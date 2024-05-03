package com.yes.trend.domain.bookclick.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.bookclick.entity.BookClick;

public interface BookClickRepository extends JpaRepository<BookClick, Integer> {
}
