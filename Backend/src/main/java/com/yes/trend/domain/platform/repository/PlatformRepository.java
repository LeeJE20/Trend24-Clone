package com.yes.trend.domain.platform.repository;

import com.yes.trend.domain.platform.entity.Platform;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatformRepository extends JpaRepository<Platform, Integer> {
}
