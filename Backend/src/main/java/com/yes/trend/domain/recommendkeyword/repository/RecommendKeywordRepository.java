package com.yes.trend.domain.recommendkeyword.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yes.trend.api.recommend.dto.KeywordWithBookDto;
import com.yes.trend.domain.recommendkeyword.entity.RecommendKeyword;

public interface RecommendKeywordRepository extends JpaRepository<RecommendKeyword, Integer> {
	@Query(
		"SELECT NEW com.yes.trend.api.recommend.dto.KeywordWithBookDto(k.name, b.id, b.productId, b.productName, b.categoryName, b.searchKeyword, b.totalClickCount, b.totalOrderCount, b.totalOrderAmount, b.salePrice, b.contents, b.totalPurchaseCount)"
			+
			" FROM RecommendKeyword rk " +
			" JOIN rk.keyword k " +
			" JOIN rk.dailyRecommend dr " +
			" JOIN dr.book b " +
			" WHERE b.id IN :bookIds"
	)
	List<KeywordWithBookDto> findKeywordWithBookByBookIds(@Param("bookIds") List<Integer> bookIds);

	@Query(
		"SELECT DISTINCT b.id" +
			" FROM RecommendKeyword rk " +
			" JOIN rk.keyword k " +
			" JOIN rk.dailyRecommend dr " +
			" JOIN dr.book b " +
			" WHERE k.id IN :keywordIds"
	)
	Page<Integer> findBooksByKeywordIds(@Param("keywordIds") List<Integer> keywordIds, Pageable pageable);
}
