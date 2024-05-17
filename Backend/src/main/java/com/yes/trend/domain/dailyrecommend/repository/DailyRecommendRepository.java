package com.yes.trend.domain.dailyrecommend.repository;

import com.yes.trend.domain.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;

import java.util.Optional;

public interface DailyRecommendRepository extends JpaRepository<DailyRecommend, Integer> {
  DailyRecommend findByBook(Optional<Book> book);
}
