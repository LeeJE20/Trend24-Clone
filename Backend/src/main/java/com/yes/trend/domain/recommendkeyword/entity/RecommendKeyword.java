package com.yes.trend.domain.recommendkeyword.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.keyword.entity.Keyword;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.FetchType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "recommend_keyword")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RecommendKeyword extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "recommend_book_id")
	private Book recommendBook;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "keywords_id")
	private Keyword keyword;
}
