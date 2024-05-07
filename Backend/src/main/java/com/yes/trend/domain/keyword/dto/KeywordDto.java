package com.yes.trend.domain.keyword.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

public class KeywordDto {

	@Getter
	@NoArgsConstructor
	public static class Response {
		private Integer keywordId;
		private String name;
		private Integer clickCount;
		private Integer ranking;
		private Boolean selected;
	}
}
