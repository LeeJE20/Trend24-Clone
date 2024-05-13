package com.yes.trend.api.status.dto;

import com.yes.trend.common.dto.ListDto;
import com.yes.trend.domain.book.dto.BookDto;
import lombok.*;

import java.util.List;

public class StatusDto {
  @Getter
  @Setter
  @NoArgsConstructor
  public static class WeeklyTopClickBooksDto extends BookDto.Response {
    private Integer bookId;
    private Integer clickCountSum;
    private String productName;
    private Integer ranking;
    private ListDto<ClickDto> weeklyClickCount;

  }

  @Getter
  @NoArgsConstructor
  @AllArgsConstructor
  @Builder
  public static class ClickDto {
    private Integer count;
  }
}
