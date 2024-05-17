package com.yes.trend.domain.bookquestionmap.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yes.trend.domain.book.entity.Book;
import com.yes.trend.domain.bookquestionmap.entity.BookQuestionMap;

import io.lettuce.core.dynamic.annotation.Param;

public interface BookQuestionMapRepository extends JpaRepository<BookQuestionMap, Integer> {

	@Query("SELECT b FROM Book b WHERE b.id IN (SELECT bqm.book.id FROM BookQuestionMap bqm WHERE bqm.question.id = :questionId)")
	List<Book> findBooksByQuestionId(@Param("questionId") Integer questionId);

}
