package com.yes.trend.domain.trendsource.repository;

import com.yes.trend.domain.trendsource.entity.TrendSource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrendSourceRepository extends JpaRepository<TrendSource, Integer> {
}
