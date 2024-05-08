package com.yes.trend.api.recommend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.recommend.dto.KeywordWithBookDto;
import com.yes.trend.api.recommend.dto.RecommendDto;
import com.yes.trend.api.recommend.mapper.RecommendMapper;
import com.yes.trend.common.dto.PageInfoDto;
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
	private final RecommendMapper recommendMapper;

	public RecommendDto.Response getRecommendedBooksByKeywordIds(List<Integer> keywordIds, int page, int size) {
		Pageable pageable = PageRequest.of(page, size);

		Page<Integer> bookIds = recommendKeywordRepository.findBooksByKeywordIds(keywordIds, pageable);
		List<KeywordWithBookDto> keywordWithBookDtos = recommendKeywordRepository.findKeywordWithBookByBookIds(bookIds.toList());

		// List<BookWithKeywords> 만들기
		Integer currentId = null;
		RecommendDto.BookWithKeywords currentBookWithKeywords = null;
		List<RecommendDto.BookWithKeywords> responseList = new ArrayList<>();

		for(KeywordWithBookDto keywordWithBookDto: keywordWithBookDtos) {
			Integer bookId = keywordWithBookDto.getBookId();
			if (!bookId.equals(currentId)) {
				currentBookWithKeywords = recommendMapper.KeywordWithBookDtoToBookWithKeywords(keywordWithBookDto);
				responseList.add(currentBookWithKeywords);
				currentId = bookId;
			}
			currentBookWithKeywords.getKeywords().add(keywordWithBookDto.getKeyword());
		}

		// 최종
		RecommendDto.Response response = RecommendDto.Response.builder()
			.pageInfo(new PageInfoDto(bookIds))
			.list(responseList)
			.build();

		return response;

	}
}
