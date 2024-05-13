package com.yes.trend.domain.book.repository;

import com.yes.trend.domain.book.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface BookRepository extends JpaRepository<Book, Integer>, QuerydslPredicateExecutor<Book> {
  Page<Book> findAll(Pageable pageable);

}
