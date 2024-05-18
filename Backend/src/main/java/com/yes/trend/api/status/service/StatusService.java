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
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.status.dto.StatusDto;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;
import com.yes.trend.domain.keyword.entity.Keyword;
import com.yes.trend.domain.keyword.repository.KeywordRepository;

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

		Map<Book, Integer> clickCountMap = new HashMap<>();
		// 도서별 클릭수 합계 계산

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
			if (num > 3) {
				break;
			}
			topThreeBooks.put(entry.getKey(), entry.getValue());
			num++;
		}
		AtomicInteger ranking = new AtomicInteger(1);
		List<StatusDto.WeeklyTopClickedBooksDto> list = topThreeBooks.entrySet()
			.stream()
			.map(t -> StatusDto.WeeklyTopClickedBooksDto.builder()
				.bookId(t.getKey().getId())
				.clickCountSum(t.getValue())
				.productName(t.getKey().getProductName())
				.ranking(ranking.getAndIncrement())
				.weeklyClickCount(getWeeklyBookClickCount(t.getKey().getId()))
				.build())
			.toList();
		return new ListDto<>(list);



	}

	public ListDto<StatusDto.BookClickDto> getWeeklyBookClickCount(Integer bookId) {
		//    Optional<Book> book = bookRepository.findById(bookId);
		LocalDate now = LocalDate.now();
		LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusDays(6L);
		LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
		List<BookClick> bookClicks = bookClickRepository.findAllByBookIdAndCreatedTimeBetween(bookId, start, end);

		Map<LocalDate, Integer> clickByDate = new LinkedHashMap<>();
		for (int i = 0; i < 7; i++) {
			clickByDate.put(now.minusDays(i), 0);
		}

		for (BookClick bc : bookClicks) {
			LocalDate targetDate = bc.getCreatedTime().toLocalDate();
			clickByDate.put(targetDate, bc.getCount());
		}

		List<StatusDto.BookClickDto> list = clickByDate.entrySet()
			.stream()
			.map(bc -> StatusDto.BookClickDto.builder()
				.date(bc.getKey())
				.count(bc.getValue())
				.build())
			.toList();

		return new ListDto<>(list);
	}

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

	public ListDto<StatusDto.KeywordClickDto> getWeeklyKeywordClickCount(String keywordName) {
		//    Optional<Book> book = bookRepository.findById(bookId);
		LocalDate now = LocalDate.now();
		LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN).minusDays(6L);
		LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
		List<Keyword> keywordClicks = keywordRepository.findByNameAndCreatedTimeBetween(keywordName, start, end);

		Map<LocalDate, Boolean> clickByDate = new LinkedHashMap<>();
		for (int i = 0; i < 7; i++) {
			clickByDate.put(now.minusDays(i), false);
		}

		for (Keyword k : keywordClicks) {
			LocalDate targetDate = k.getCreatedTime().toLocalDate();
			clickByDate.put(targetDate, true);
		}

		List<StatusDto.KeywordClickDto> list = clickByDate.entrySet()
			.stream()
			.map(bc -> StatusDto.KeywordClickDto.builder()
				.date(bc.getKey())
				.trend(bc.getValue())
				.build())
			.toList();

		return new ListDto<>(list);
	}
}
