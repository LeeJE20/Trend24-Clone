package com.yes.trend.domain.dailyrecommend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;

public interface DailyRecommendRepository extends JpaRepository<DailyRecommend, Integer> {
}
