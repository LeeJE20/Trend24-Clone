package com.yes.trend.api.anonymous.dto;

import java.util.List;

import com.yes.trend.api.recommend.dto.RecommendDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AnonymousDto {
	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class BookKeywordsClickCountDto {
		private Integer bookId;
		private Integer clickCount;
		private List<KeywordClickDto> keywords;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class KeywordClickDto {
		private Integer keywordClickId;
		private String name;
		private Integer clickCount;
		private String trendCategoryName;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class KeywordsAndBooksByCategory {
		List<KeywordWithFrequency> keywords;
		List<RecommendDto.BookWithKeywords> books;
		private String name; // 트렌드 카테고리 이름
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class KeywordWithFrequency {
		String name;
		Integer freq;

	}
}
