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
		private ListDto<BookClickDto> weeklyClickCount;

	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class BookClickDto {
		private LocalDate date;
		private Integer count;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class TopClickedKeywordsDto {
		private ListDto<CategoryDto> categories;
		private String keywordName;
		private Integer clickCountSum;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class CategoryDto {
		private String trendCategoryName;
	}

	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class KeywordClickDto {
		private LocalDate date;
		private Boolean trend;
	}

}
