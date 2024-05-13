package com.yes.trend.domain.keyword.repository;

import com.yes.trend.domain.keyword.entity.KeywordView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface KeywordViewRepository extends JpaRepository<KeywordView, Integer> {
  List<KeywordView> findByCreatedTimeBetweenOrderByCreatedTimeDescRankingAsc(LocalDateTime start, LocalDateTime end);
}
