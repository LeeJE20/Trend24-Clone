package com.yes.trend.domain.keywordclick.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.keywordclick.entity.KeywordClick;

public interface KeywordClickRepository extends JpaRepository<KeywordClick, Integer> {
	Optional<KeywordClick> findByKeywordNameAndCategory_IdAndCreatedTimeBetween(String keywordName, Byte CategoryId,
		LocalDateTime startDate, LocalDateTime endDate);
}
