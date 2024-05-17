package com.yes.trend.api.anonymous.dto;

import com.yes.trend.common.dto.ListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class AnonymousDto {
  @Getter
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  public static class BookKeywordsClickCountDto {
    private Integer bookId;
    private Integer clickCount;
    private ListDto<AnonymousDto.KeywordDto> keywords;
  }

  @Getter
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  public static class KeywordDto {
    private Integer keywordId;
    private String name;
    private Integer clickCount;
  }
}
