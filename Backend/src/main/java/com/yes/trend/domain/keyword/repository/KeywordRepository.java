package com.yes.trend.domain.keyword.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.keyword.entity.Keyword;

public interface KeywordRepository extends JpaRepository<Keyword, Integer> {
	List<Keyword> findByNameAndCreatedTimeBetween(String name, LocalDateTime start,
		LocalDateTime end);
	List<Keyword> findAllByName(String name);
	Keyword findByName(String name);

}
