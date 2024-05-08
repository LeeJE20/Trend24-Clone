package com.yes.trend.api.recommend.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.recommend.dto.KeywordWithBookDto;
import com.yes.trend.api.recommend.dto.RecommendDto;
import com.yes.trend.api.recommend.mapper.RecommendMapper;
import com.yes.trend.common.dto.ListDto;
import com.yes.trend.common.dto.PageInfoDto;
import com.yes.trend.domain.book.repository.BookRepository;
import com.yes.trend.domain.recommendkeyword.repository.RecommendKeywordRepository;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;
import com.yes.trend.domain.trendcategory.repository.TrendCategoryRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class RecommendService {
	private final BookRepository bookRepository;
	private final RecommendKeywordRepository recommendKeywordRepository;
	private final TrendCategoryRepository trendCategoryRepository;
	private final RecommendMapper recommendMapper;

	public RecommendDto.Response getRecommendedBooksByKeywordIds(List<Integer> keywordIds, int page, int size) {
		Pageable pageable = PageRequest.of(page, size);
		Page<Integer> bookIds = recommendKeywordRepository.findBooksByKeywordIds(keywordIds, pageable);

		List<KeywordWithBookDto> keywordWithBookDtos = recommendKeywordRepository.findKeywordWithBookByBookIds(
			bookIds.toList());

		// 순서 유지
		Map<Integer, RecommendDto.BookWithKeywords> responseMap = new LinkedHashMap<>();
		for (Integer id : bookIds.toList()) {
			responseMap.put(id, null);
		}

		for (KeywordWithBookDto keywordWithBookDto : keywordWithBookDtos) {
			Integer bookId = keywordWithBookDto.getBookId();
			RecommendDto.BookWithKeywords currentBookWithKeywords = responseMap.get(bookId);
			if (currentBookWithKeywords == null) {
				responseMap.put(bookId, recommendMapper.KeywordWithBookDtoToBookWithKeywords(keywordWithBookDto));
				currentBookWithKeywords = responseMap.get(bookId);
			}
			currentBookWithKeywords.getKeywords().add(keywordWithBookDto.getKeyword());
		}

		// 최종
		return RecommendDto.Response.builder()
			.pageInfo(new PageInfoDto(bookIds))
			.list(responseMap.values().stream().toList())
			.build();

	}

	public ListDto<RecommendDto.CategoryWithKeywords> getTrendCategories() {
		List<TrendCategory> categories = trendCategoryRepository.findAll();
		List<RecommendDto.CategoryWithKeywords> list = categories.stream()
			.map(x -> RecommendDto.CategoryWithKeywords.builder().trendCategoryId(x.getId()).name(x.getName()).build())
			.toList();
		return new ListDto<>(list);
	}

	public ListDto<RecommendDto.CategoryWithKeywords> getTrendCategoriesWithKeywords() {
		return null;
	}
}
