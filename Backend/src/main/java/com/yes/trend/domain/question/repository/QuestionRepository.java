package com.yes.trend.domain.question.repository;

import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.question.entity.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

    @Query("SELECT bqm.book FROM BookQuestionMap bqm WHERE bqm.question.id = :questionId ORDER BY bqm.recommendCnt DESC")
    List<Book> findTop10BooksByQuestionId(@Param("questionId") Integer questionId);
}
