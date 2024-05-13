package com.yes.trend.domain.trendcategory.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.keyword.entity.Keyword;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "trend_category")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrendCategory extends BaseEntity {

  @Column(length = 100)
  private String name;
  private Byte code;

  @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
  private List<Keyword> keywords;
}
