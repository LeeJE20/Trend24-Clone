package com.yes.trend.domain.bookclick.entity;

import com.yes.trend.common.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "book_click")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BookClick extends BaseEntity {

	private Integer count;
	private Integer id2;
}
