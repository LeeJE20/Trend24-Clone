package com.yes.trend.domain.bookclick.repository;

import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.bookclick.entity.BookClick;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface BookClickRepository extends JpaRepository<BookClick, Integer> {
  List<BookClick> findByCreatedTimeAfter(LocalDateTime start);

  List<BookClick> findTop3ByCreatedTimeAfterOrderByClickCountDesc(LocalDateTime start);

  @Query("SELECT SUM(b.clickCount) FROM BookClick b WHERE b.createdTime > :start ORDER BY b.clickCount DESC")
  List<BookClick> findTop3ByClickCountSumAfter(LocalDateTime start);

  List<BookClick> findByBookAndCreatedTimeBetween(Book book, LocalDateTime start, LocalDateTime end);

  Book findByBook(Book book);
}
