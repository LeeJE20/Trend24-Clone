package com.yes.trend.domain.question.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

	List<Question> findAll();
}
