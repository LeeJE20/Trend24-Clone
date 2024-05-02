package com.yes.trend.domain.trendcategory.entity;

import com.yes.trend.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "trend_category")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrendCategory extends BaseEntity {

	@Column(length = 100)
	private String name;

	private Byte code;
}
