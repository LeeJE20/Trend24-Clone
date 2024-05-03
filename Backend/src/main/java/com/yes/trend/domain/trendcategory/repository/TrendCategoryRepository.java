package com.yes.trend.domain.trendcategory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;

public interface TrendCategoryRepository extends JpaRepository<TrendCategory, Byte> {
}
