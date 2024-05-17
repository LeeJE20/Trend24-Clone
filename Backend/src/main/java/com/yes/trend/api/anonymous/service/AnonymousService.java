package com.yes.trend.api.anonymous.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.anonymous.dto.AnonymousDto;
import com.yes.trend.api.recommend.dto.RecommendDto;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.mapper.BookMapper;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;
import com.yes.trend.domain.keyword.repository.KeywordRepository;
import com.yes.trend.domain.keywordclick.entity.KeywordClick;
import com.yes.trend.domain.keywordclick.repository.KeywordClickRepository;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;
import com.yes.trend.domain.trendcategory.repository.TrendCategoryRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AnonymousService {
	private final BookRepository bookRepository;
	private final BookClickRepository bookClickRepository;
	private final TrendCategoryRepository trendCategoryRepository;
	private final KeywordClickRepository keywordClickRepository;
	private final KeywordRepository keywordRepository;
	private final BookMapper bookMapper;

	@Transactional
	public AnonymousDto.BookKeywordsClickCountDto postBookKeywordClickCount(Integer bookId, Byte categoryId) {
		// 값 검증
		Book book = bookRepository.findById(bookId).orElseThrow(() -> new CustomException(ErrorCode.NO_BOOK, bookId));
		TrendCategory trendCategory = trendCategoryRepository.findById(categoryId)
			.orElseThrow(() -> new CustomException(ErrorCode.NO_TREND_CATEGORY, categoryId));

		// 오늘 날짜
		LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
		LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

		// 오늘의 책 클릭 업데이트
		BookClick bookClick = bookClickRepository.findByBookIdAndCreatedTimeBetween(bookId, todayStart, todayEnd)
			.orElseGet(() -> new BookClick(book));
		bookClick.addClickCount();
		bookClickRepository.save(bookClick);

		// 키워드 이름 찾기
		int keywordSize = 3; // 책마다의 키워드 개수
		Pageable pageable = PageRequest.of(0, keywordSize);
		LocalDate searchStartDate = getTrendSearchStartDate();
		List<String> keywordNames = keywordRepository.findTopKeyword_NameByBookIdAndCategoryId(bookId, categoryId,
			searchStartDate, pageable);

		List<AnonymousDto.KeywordClickDto> keywordDtos = new ArrayList<>();
		// 키워드이름마다 이름 & 카테고리 조합으로 클릭 엔티티 찾기
		for (String keywordName : keywordNames) {
			KeywordClick keywordClick = keywordClickRepository.findByKeywordNameAndCategory_IdAndCreatedTimeBetween(
					keywordName, categoryId, todayStart, todayEnd)
				.orElseGet(() -> new KeywordClick(keywordName, trendCategory));
			keywordClick.addClickCount();
			keywordClick = keywordClickRepository.save(keywordClick);
			keywordDtos.add(AnonymousDto.KeywordClickDto.builder()
				.keywordClickId(keywordClick.getId())
				.name(keywordClick.getKeywordName())
				.clickCount(keywordClick.getClickCount())
				.trendCategoryName(trendCategory.getName())
				.build());
		}

		return new AnonymousDto.BookKeywordsClickCountDto(book.getId(), bookClick.getCount(), keywordDtos);
	}

	@Transactional(readOnly = true)
	public ListDto<AnonymousDto.KeywordsAndBooksByCategory> getKeywordsAndBooksByCategory(Byte categoryId, int size,
		LocalDate date) {
		List<String> categoryNames = new ArrayList<>();
		categoryNames.add("NEWS");
		categoryNames.add("IT");
		categoryNames.add("ANIMAL");
		categoryNames.add("ENTERTAINMENT");
		categoryNames.add("NEWMEDIA");
		List<AnonymousDto.KeywordsAndBooksByCategory> response = new ArrayList<>();
		for (String name : categoryNames) {

			List<AnonymousDto.KeywordWithFrequency> keywords = new ArrayList<>();

			keywords.add(new AnonymousDto.KeywordWithFrequency("푸바오", 1));
			keywords.add(new AnonymousDto.KeywordWithFrequency("봄이", 2));
			keywords.add(new AnonymousDto.KeywordWithFrequency("고양이", 3));
			keywords.add(new AnonymousDto.KeywordWithFrequency("토끼", 4));
			keywords.add(new AnonymousDto.KeywordWithFrequency("사자", 5));
			keywords.add(new AnonymousDto.KeywordWithFrequency("호랑이", 6));
			keywords.add(new AnonymousDto.KeywordWithFrequency("두식이", 7));

			List<RecommendDto.BookWithKeywords> books = new ArrayList<>();
			for (int i = 0; i < 5; i++) {
				int id = 60700 + i;
				Book book = bookRepository.findById(id).orElseThrow(() -> new CustomException(ErrorCode.NO_BOOK, id));
				List<String> keywordNames = new ArrayList<>();
				keywordNames.add("키워드1");
				keywordNames.add("키워드2");
				keywordNames.add("키워드3");
				books.add(new RecommendDto.BookWithKeywords(book, keywordNames));
			}

			AnonymousDto.KeywordsAndBooksByCategory dto = new AnonymousDto.KeywordsAndBooksByCategory( keywords,
				books, name);

			response.add(dto);
		}
		return new ListDto<>(response);

	}

	public LocalDate getTrendSearchStartDate() {
		return LocalDate.now().minusWeeks(1L);
	}
}
