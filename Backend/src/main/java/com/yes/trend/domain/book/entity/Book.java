package com.yes.trend.domain.book.entity;

import com.yes.trend.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "book")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Book extends BaseEntity {

	private Integer productId;

	@Column(length = 255)
	private String productName;

	@Column(length = 50)
	private String categoryId;

	@Column(length = 100)
	private String categoryName;

	@Column(length = 255)
	private String searchKeyword;

	private Integer totalClickCount;
	private Integer totalOrderCount;
	private Integer totalOrderAmount;
	private Integer salePrice;

	@Column(columnDefinition = "TEXT")
	private String contents;

	private Integer totalPurchaseCount;
}