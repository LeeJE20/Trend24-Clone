package com.yes.trend.domain.origindata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.origindata.entity.OriginData;

public interface OriginDataRepository extends JpaRepository<OriginData, Integer> {
}
