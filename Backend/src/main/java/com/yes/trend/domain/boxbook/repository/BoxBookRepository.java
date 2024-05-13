package com.yes.trend.domain.boxbook.repository;

import com.yes.trend.domain.boxbook.entity.BoxBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoxBookRepository extends JpaRepository<BoxBook, Integer> {
}
