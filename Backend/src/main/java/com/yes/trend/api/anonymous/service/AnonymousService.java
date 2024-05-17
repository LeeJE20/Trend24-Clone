package com.yes.trend.api.anonymous.service;

import com.yes.trend.api.anonymous.dto.AnonymousDto;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;
import com.yes.trend.domain.bookclick.repository.BookClickRepository;
import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;
import com.yes.trend.domain.dailyrecommend.repository.DailyRecommendRepository;
import com.yes.trend.domain.keyword.entity.Keyword;
import com.yes.trend.domain.recommendkeyword.entity.RecommendKeyword;
import com.yes.trend.domain.recommendkeyword.repository.RecommendKeywordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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

  public AnonymousDto.BookKeywordsClickCountDto postBookKeywordClickCount(Integer bookId){
    Optional<Book> book = bookRepository.findById(bookId);
    BookClick bookClick = bookClickRepository.findByBook(book);
    bookClick.addClickCount(bookClick);
    DailyRecommend dailyRecommend = dailyRecommendRepository.findByBook(book);
    List<RecommendKeyword> recommendKeywords = recommendKeywordRepository.findByDailyRecommend(dailyRecommend);
    List<Keyword> keywords = new ArrayList<>();

    recommendKeywords.forEach(rk -> {
      keywords.add(rk.getKeyword());
    });

    keywords.forEach(keyword -> {
      keyword.addClickCount(keyword);
    });

    List<AnonymousDto.KeywordDto> keywordDtos = keywords.stream()
        .map(keyword -> AnonymousDto.KeywordDto.builder()
            .keywordId(keyword.getId())
            .name(keyword.getName())
            .clickCount(keyword.getClickCount())
            .build())
        .toList();

    return new AnonymousDto.BookKeywordsClickCountDto();
  }
}
