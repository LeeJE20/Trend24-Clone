package com.yes.trend.domain.keyword.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.trendcategory.entity.TrendCategory;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "keyword_view")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class KeywordView extends BaseEntity {

  @Column(length = 255)
  private String name;

  private Integer clickCount;
  private Integer ranking;
  private Boolean selected;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "category_id")
  private TrendCategory category;
}
