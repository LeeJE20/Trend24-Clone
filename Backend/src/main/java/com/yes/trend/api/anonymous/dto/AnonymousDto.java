package com.yes.trend.api.anonymous.dto;

import java.util.List;

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
}
