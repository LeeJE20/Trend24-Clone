package com.yes.trend.api.recommend.dto;

import java.time.LocalDate;
import java.util.List;

import com.yes.trend.common.dto.PageInfoDto;
import com.yes.trend.domain.book.dto.BookDto;
import com.yes.trend.domain.keyword.dto.KeywordDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class RecommendDto {
	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Response {
		private PageInfoDto pageInfo;
		private List<BookWithKeywords> list;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class BookWithKeywords extends BookDto {
		private List<KeywordDto> keywords;
	}
}
