package com.yes.trend.api.status.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.yes.trend.domain.keyword.entity.Keyword;
import com.yes.trend.domain.keyword.repository.KeywordRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.status.dto.StatusDto;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class StatusService {
	private final BookClickRepository bookClickRepository;
	private final KeywordRepository keywordRepository;
	private final BookRepository bookRepository;

	public ListDto<StatusDto.WeeklyTopClickedBooksDto> getWeeklyTopClickedBooks() {
		LocalDate now = LocalDate.now();
		LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusDays(6L);
		LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
		List<BookClick> bookClicks = bookClickRepository.findByCreatedTimeBetween(start, end);

		//		LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusWeeks(1).plusDays(1);
		//		LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
		//		List<BookClick> bookClicks = bookClickRepository.findByCreatedTimeAfter(start);

		Map<Book, Integer> clickCountMap = new HashMap<>();
		// 도서별 클릭수 합계 계산
		if (!bookClicks.isEmpty()) {
			//map에서 value를 long으로 변경해야할까?
			for (BookClick bc : bookClicks) {
				clickCountMap.put(bc.getBook(), clickCountMap.getOrDefault(bc.getBook(), 0) + bc.getCount());
			}

			// 클릭수가 높은 도서 3권 선택 및 정렬
			List<Map.Entry<Book, Integer>> sortedList = new LinkedList<>(clickCountMap.entrySet());
			sortedList.sort(new Comparator<Map.Entry<Book, Integer>>() {
				@Override
				public int compare(Map.Entry<Book, Integer> o1, Map.Entry<Book, Integer> o2) {
					return o2.getValue() - o1.getValue();
				}
			});

			Map<Book, Integer> topThreeBooks = new LinkedHashMap<>();
			int num = 1;

			for (Map.Entry<Book, Integer> entry : sortedList) {
				if (num > 3)
					break;
				topThreeBooks.put(entry.getKey(), entry.getValue());
				num++;
			}

			int rank = 1;
			List<StatusDto.WeeklyTopClickedBooksDto> list = topThreeBooks.entrySet()
				.stream()
				.map(t -> StatusDto.WeeklyTopClickedBooksDto.builder()
					.bookId(t.getKey().getId())
					.clickCountSum(t.getValue())
					.productName(t.getKey().getProductName())
					.ranking(1)
					.weeklyClickCount(getWeeklyBookClickCount(t.getKey().getId()))
					.build())
				.toList();

			return new ListDto<>(list);
		}

		//		for (Map.Entry<Book, Integer> entry : sortedList) {
		//			if (ranking > 3)
		//				break;
		//			// TODO: setter 안쓰는 방법으로 변경하기.
		//			if (entry.getKey() != null) {
		//				Book book = entry.getKey();
		//				StatusDto.WeeklyTopClickBooksDto dto = new StatusDto.WeeklyTopClickBooksDto();
		//				dto.setBookId(book.getId());
		//				dto.setProductName(book.getProductName());
		//				dto.setClickCountSum(entry.getValue());
		//				dto.setWeeklyClickCount(getWeeklyBookClickCount(book.getId()));
		//				dto.setRanking(ranking++);
		//			}
		//		}

		return null;
	}

	public ListDto<StatusDto.ClickDto> getWeeklyBookClickCount(Integer bookId) {
		//    Optional<Book> book = bookRepository.findById(bookId);
		LocalDate now = LocalDate.now();
		LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusDays(6L);
		LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
		List<BookClick> bookClicks = bookClickRepository.findByBookIdAndCreatedTimeBetween(bookId, start, end);

		Map<LocalDate, Integer> clickByDate = new LinkedHashMap<>();
		for (int i = 0; i < 7; i++) {
			clickByDate.put(now.minusDays(i), 0);
		}

		for (BookClick bc : bookClicks) {
			LocalDate targetDate = bc.getCreatedTime().toLocalDate();
			clickByDate.put(targetDate, bc.getCount());
		}

		List<StatusDto.ClickDto> list = clickByDate.entrySet()
			.stream()
			.map(bc -> StatusDto.ClickDto.builder()
				.date(bc.getKey())
				.count(bc.getValue())
				.build())
			.toList();

		return new ListDto<>(list);
	}

	//  private List<Integer> getWeeklyClickCount(Book book, LocalDateTime start, LocalDateTime end) {
	//    List<BookClick> bookClicks = bookClickRepository.findByBookAndCreatedTimeBetween(book, start, end);
	//    List<Integer> weeklyClickCount = new ArrayList<>(Collections.nCopies(7, 0));
	//    for (BookClick click : bookClicks) {
	//      int dayOfWeek = click.getCreatedTime().getDayOfWeek().getValue() - 1; // Adjusting to 0-indexed
	//      weeklyClickCount.set(dayOfWeek, click.getCount());
	////      weeklyClickCount.set(dayOfWeek, weeklyClickCount.get(dayOfWeek) + click.getCount());
	//    }
	//    return weeklyClickCount;
	//  }
	public ListDto<StatusDto.TopClickedKeywordsDto> getTopClickedKeyword() {
		List<Keyword> keywords = keywordRepository.findAll();

		Map<String, Integer> clickByKeyword = new HashMap<>();
		for (Keyword k : keywords) {
			clickByKeyword.put(k.getName(), clickByKeyword.getOrDefault(k.getName(), 0) + k.getClickCount());
		}

		// 클릭수가 높은 키워드 정렬
		List<Map.Entry<String, Integer>> sortedList = new LinkedList<>(clickByKeyword.entrySet());
		sortedList.sort(new Comparator<Map.Entry<String, Integer>>() {
			@Override
			public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
				return o2.getValue() - o1.getValue();
			}
		});

		Map<String, Integer> topFiveKeywords = new LinkedHashMap<>();
		int num = 1;

		for (Map.Entry<String, Integer> entry : sortedList) {
			if (num > 5)
				break;
			topFiveKeywords.put(entry.getKey(), entry.getValue());
			num++;
		}

		List<StatusDto.TopClickedKeywordsDto> list = topFiveKeywords.entrySet()
				.stream()
				.map(k -> StatusDto.TopClickedKeywordsDto.builder()
//						.weeklyClickCount(getWeeklyBookClickCount(t.getKey().getId()))
						.categories(getKeywordCategories(k.getKey()))
						.keywordName(k.getKey())
						.clickCountSum(k.getValue())
						.build())
				.toList();

		return new ListDto<>(list);
	}

	public ListDto<StatusDto.CategoryDto> getKeywordCategories(String keywordName) {
		List<Keyword> keywords = keywordRepository.findAllByName(keywordName);

		Map<String, Integer> categoryByKeyword = new HashMap<>();
		for (Keyword k : keywords) {
			categoryByKeyword.put(k.getCategory().getName(), categoryByKeyword.getOrDefault(k.getCategory(), 0) + 1);
		}

		List<Map.Entry<String, Integer>> sortedList = new LinkedList<>(categoryByKeyword.entrySet());
		sortedList.sort(new Comparator<Map.Entry<String, Integer>>() {
			@Override
			public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
				return o2.getValue() - o1.getValue();
			}
		});

		List<StatusDto.CategoryDto> list = categoryByKeyword.entrySet()
				.stream()
				.map(k -> StatusDto.CategoryDto.builder()
						.trendCategoryName(k.getKey())
						.build())
				.toList();

		return new ListDto<>(list);
	}
}
