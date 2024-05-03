package com.yes.trend.domain.recommendkeyword.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.recommendkeyword.entity.RecommendKeyword;

public interface RecommendKeywordRepository extends JpaRepository<RecommendKeyword, Integer> {
}
