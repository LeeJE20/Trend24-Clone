package com.yes.trend.domain.keyword.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.FetchType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "keyword")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Keyword extends BaseEntity {

	@Column(length = 255)
	private String name;

	private Integer clickCount;
	private Integer ranking;
	private Boolean selected;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private TrendCategory category;
}
