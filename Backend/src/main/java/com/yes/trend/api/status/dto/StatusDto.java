package com.yes.trend.api.status.dto;

import java.time.LocalDate;

import com.yes.trend.common.dto.ListDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class StatusDto {
	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class WeeklyTopClickedBooksDto {
		private Integer bookId;
		private Integer clickCountSum;
		private String productName;
		private Integer ranking;
		private ListDto<ClickDto> weeklyClickCount;

	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class ClickDto {
		private LocalDate date;
		private Integer count;
	}
}
