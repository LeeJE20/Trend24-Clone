package com.yes.trend.api.recommend.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.recommend.dto.KeywordWithBookDto;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.recommendkeyword.repository.RecommendKeywordRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class RecommendService {
	private final BookRepository bookRepository;
	private final RecommendKeywordRepository recommendKeywordRepository;

	public Object getRecommendedBooksByKeywordIds(List<Integer> keywordIds, int page, int size) {
		Pageable pageable = PageRequest.of(page, size);

		List<KeywordWithBookDto> keywordWithBookDtos = recommendKeywordRepository.findBooksByKeywordIds(keywordIds);

		return null;

	}
}
