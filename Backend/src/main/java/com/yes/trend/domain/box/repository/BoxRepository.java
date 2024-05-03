package com.yes.trend.domain.box.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.yes.trend.domain.box.entity.Box;

public interface BoxRepository extends JpaRepository<Box, Integer> {
}
