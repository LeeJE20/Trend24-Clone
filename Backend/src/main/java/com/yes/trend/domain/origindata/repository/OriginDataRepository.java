package com.yes.trend.domain.origindata.repository;

import com.yes.trend.api.trend.dto.KeywordOriginDataDto;
import com.yes.trend.domain.origindata.entity.OriginData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OriginDataRepository extends JpaRepository<OriginData, Integer> {

  @Query(
      "SELECT NEW com.yes.trend.api.trend.dto.KeywordOriginDataDto(p.id, p.name, od.uri, od.contents)" +
          " FROM TrendSource ts " +
          " JOIN ts.originData od " +
          " JOIN od.platform p " +
          " WHERE ts.keyword.id = :keywordId"
  )
  List<KeywordOriginDataDto> findKeywordOriginDataDtoByKeywordId(@Param("keywordId") Integer keywordId);
}
