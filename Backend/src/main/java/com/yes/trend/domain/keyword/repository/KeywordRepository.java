package com.yes.trend.domain.keyword.repository;

import com.yes.trend.domain.keyword.entity.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface KeywordRepository extends JpaRepository<Keyword, Integer> {
  List<Keyword> findByNameAndCreatedTimeBetween(String name, LocalDateTime start,
                                                LocalDateTime end);
}
