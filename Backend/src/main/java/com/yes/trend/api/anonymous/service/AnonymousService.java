package com.yes.trend.api.anonymous.service;

import com.yes.trend.api.anonymous.dto.AnonymousDto;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;
import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;
import com.yes.trend.domain.dailyrecommend.repository.DailyRecommendRepository;
import com.yes.trend.domain.keyword.entity.Keyword;
import com.yes.trend.domain.keyword.repository.KeywordRepository;
import com.yes.trend.domain.keywordclick.entity.KeywordClick;
import com.yes.trend.domain.keywordclick.repository.KeywordClickRepository;
import com.yes.trend.domain.recommendkeyword.entity.RecommendKeyword;
import com.yes.trend.domain.recommendkeyword.repository.RecommendKeywordRepository;
import com.yes.trend.domain.themacode.repository.ThemaCodeRepository;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;
import com.yes.trend.domain.trendcategory.repository.TrendCategoryRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AnonymousService {
  private final BookRepository bookRepository;
  private final BookClickRepository bookClickRepository;
  private final DailyRecommendRepository dailyRecommendRepository;
  private final RecommendKeywordRepository recommendKeywordRepository;
  private final TrendCategoryRepository trendCategoryRepository;
  private final KeywordClickRepository keywordClickRepository;
  private final KeywordRepository keywordRepository;

  @Transactional
  public AnonymousDto.BookKeywordsClickCountDto postBookKeywordClickCount(Integer bookId, Byte categoryId){
    // 값 검증
    Book book = bookRepository.findById(bookId).orElseThrow(()-> new CustomException(ErrorCode.NO_BOOK,bookId ));
    TrendCategory trendCategory = trendCategoryRepository.findById(categoryId).orElseThrow(() -> new CustomException(ErrorCode.NO_TREND_CATEGORY, categoryId));

    // 오늘 날짜
    LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
    LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

    // 오늘의 책 클릭 업데이트
    BookClick bookClick = bookClickRepository.findByBookIdAndCreatedTimeBetween(bookId, todayStart, todayEnd).orElseGet(() -> new BookClick(book));
    bookClick.addClickCount();
    bookClickRepository.save(bookClick);

    // 키워드 이름 찾기
    int keywordSize = 3; // 책마다의 키워드 개수
    Pageable pageable = PageRequest.of(0, keywordSize);
    LocalDate searchStartDate = getTrendSearchStartDate();
    List<String> keywordNames = keywordRepository.findTopKeyword_NameByBookIdAndCategoryId(bookId, categoryId, searchStartDate, pageable);

    List<AnonymousDto.KeywordClickDto> keywordDtos = new ArrayList<>();
    // 키워드이름마다 이름 & 카테고리 조합으로 클릭 엔티티 찾기
    for(String keywordName: keywordNames) {
      KeywordClick keywordClick = keywordClickRepository.findByKeywordNameAndCategory_IdAndCreatedTimeBetween(keywordName, categoryId, todayStart, todayEnd).orElseGet(() -> new KeywordClick(keywordName, trendCategory));
      keywordClick.addClickCount();
      keywordClick = keywordClickRepository.save(keywordClick);
      keywordDtos.add(AnonymousDto.KeywordClickDto.builder()
          .keywordClickId(keywordClick.getId())
          .name(keywordClick.getKeywordName())
          .clickCount(keywordClick.getClickCount())
          .trendCategoryName(trendCategory.getName())
          .build());
    }

    // DailyRecommend dailyRecommend = dailyRecommendRepository.findByBook(book);
    // List<RecommendKeyword> recommendKeywords = recommendKeywordRepository.findByDailyRecommend(dailyRecommend);
    // List<Keyword> keywords = new ArrayList<>();
    //
    // recommendKeywords.forEach(rk -> {
    //   keywords.add(rk.getKeyword());
    // });
    //
    // keywords.forEach(keyword -> {
    //   keyword.addClickCount(keyword);
    // });

    // List<AnonymousDto.KeywordClickDto> keywordDtos = keywords.stream()
    //     .map(keyword -> AnonymousDto.KeywordClickDto.builder()
    //         .keywordClickId(keyword.getId())
    //         .name(keyword.getName())
    //         .clickCount(keyword.getClickCount())
    //         .build())
    //     .toList();

    return new AnonymousDto.BookKeywordsClickCountDto(book.getId(), bookClick.getCount(), keywordDtos);
  }

  public LocalDate getTrendSearchStartDate() {
    // return LocalDate.now().minusWeeks(1L);
    return LocalDate.now().minusWeeks(4L);
  }
}
