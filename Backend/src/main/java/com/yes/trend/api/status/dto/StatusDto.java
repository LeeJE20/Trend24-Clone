package com.yes.trend.api.status.dto;

import com.yes.trend.domain.book.dto.BookDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private List<Integer> weeklyClickCount;

  }
}
