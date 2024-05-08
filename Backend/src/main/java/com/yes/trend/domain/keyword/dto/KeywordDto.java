package com.yes.trend.domain.keyword.dto;

import java.time.LocalDateTime;

import lombok.Builder;
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

		@Builder
		public Response(Integer keywordId, String name, Integer clickCount, Integer ranking) {
			this.keywordId = keywordId;
			this.name = name;
			this.clickCount = clickCount;
			this.ranking = ranking;
		}
	}
}
