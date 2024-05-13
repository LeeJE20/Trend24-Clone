package com.yes.trend.domain.recommendkeyword.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.dailyrecommend.entity.DailyRecommend;
import com.yes.trend.domain.keyword.entity.Keyword;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "recommend_keyword")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RecommendKeyword extends BaseEntity {

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "daily_recommend_id")
  private DailyRecommend dailyRecommend;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "keyword_id")
  private Keyword keyword;
}
