package com.yes.trend.domain.bookclick.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.book.entity.Book;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "book_click")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BookClick extends BaseEntity {
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "book_id")
  private Book book;

  private Integer count;
}