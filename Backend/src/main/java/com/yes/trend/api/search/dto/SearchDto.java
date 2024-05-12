package com.yes.trend.api.search.dto;

import com.yes.trend.common.dto.PageInfoDto;
import com.yes.trend.domain.book.dto.BookDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class SearchDto {
  @Getter
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  public static class Response {
    private PageInfoDto pageInfo;
    private List<BookDto.Response> list;
  }
}
