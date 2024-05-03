package com.yes.trend.domain.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.book.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
