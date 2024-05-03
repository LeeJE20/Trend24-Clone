package com.yes.trend.domain.keyword.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.keyword.entity.Keyword;

public interface KeywordRepository extends JpaRepository<Keyword, Integer> {
}
