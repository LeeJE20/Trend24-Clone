package com.yes.trend.api.recommend.dto;

import java.util.ArrayList;
import java.util.List;

import com.yes.trend.common.dto.PageInfoDto;
import com.yes.trend.domain.book.dto.BookDto;

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

	// 책과 해당 책을 추천해준 키워드들
	@Getter
	@NoArgsConstructor
	public static class BookWithKeywords extends BookDto.Response {
		private List<String> keywords = new ArrayList<>();

		@Builder
		public BookWithKeywords(Integer bookId, Integer productId, String productName, String categoryName,
			String searchKeyword, Integer totalClickCount, Integer totalOrderCount, Integer totalOrderAmount,
			Integer salePrice,
			String contents, Integer totalPurchaseCount) {
			super(bookId, productId, productName, categoryName, searchKeyword, totalClickCount, totalOrderCount,
				totalOrderAmount, salePrice, contents, totalPurchaseCount);
		}
	}
}
