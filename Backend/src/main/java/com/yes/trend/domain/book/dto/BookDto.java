package com.yes.trend.domain.book.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

public class BookDto {

	@Getter
	@NoArgsConstructor
	public static class Response {
		private Integer bookId;
		private Integer productId;
		private String productName;
		private String categoryName;
		private String searchKeyword;
		private Integer totalClickCount;
		private Integer totalOrderCount;
		private Integer totalOrderAmount;
		private Integer salePrice;
		private String contents;
		private Integer totalPurchaseCount;
	}
}
