package com.yes.trend.domain.dailyrecommend.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.book.entity.Book;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "daily_recommend")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DailyRecommend extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "book_id")
	private Book book;
}