package com.yes.trend.api.status.controller;

import com.yes.trend.api.status.dto.StatusDto;
import com.yes.trend.api.status.service.StatusService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.dto.ListDto;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/status")
public class StatusController {
  private final StatusService statusService;

  @Operation(summary = "UA-02 도서 클릭수 리스트", description = "")
  @GetMapping("/books")
  public ApiResponse<ListDto<StatusDto.WeeklyTopClickBooksDto>> getTopThreeClickBooks() {
    return ApiResponse.success(SuccessCode.GET_SUCCESS, statusService.getWeeklyTopClickedBooks());
  }

  @Operation(summary = "UA-02-1 도서 누적 클릭수 리스트", description = "")
  @GetMapping("/books/{bookId}")
  public ApiResponse<ListDto<StatusDto.ClickDto>> WeeklyBookClicked(@PathVariable Integer bookId) {
    return ApiResponse.success(SuccessCode.GET_SUCCESS, statusService.getWeeklyBookClickCount(bookId));
  }


}
