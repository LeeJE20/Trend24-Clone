package com.yes.trend.api.trend.dto;

import java.time.LocalDate;
import java.util.List;

import com.yes.trend.domain.keyword.dto.KeywordDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class TrendDto {
	@Getter
	@NoArgsConstructor
	public static class DailyKeywordsDto {
		private LocalDate date;
		private List<KeywordDto.Response> words;

		@Builder
		public DailyKeywordsDto(LocalDate date, List<KeywordDto.Response> words) {
			this.date = date;
			this.words = words;
		}
	}

}
