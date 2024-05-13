package com.yes.trend.domain.dailyrecommend.repository;

import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyRecommendRepository extends JpaRepository<DailyRecommend, Integer> {
}
