package com.yes.trend.domain.book.repository;

import com.yes.trend.domain.book.entity.Book;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Integer>, QuerydslPredicateExecutor<Book> {
	Page<Book> findAll(Pageable pageable);

	@Query("SELECT b.id, b.productId, b.salePrice, b.totalClickCount, b.totalOrderAmount, b.totalOrderCount, b.totalPurchaseCount, b.categoryId, b.categoryName, b.contents FROM Book b WHERE b.productName LIKE %:bookText%")
	List<Object[]> findByTitleContain(@Param("bookText") String bookText, Pageable pageable);

	@Query("SELECT b FROM Book b WHERE b.productId = :productId")
	Optional<Book> findByProductId(@Param("productId") Integer productId);

}
