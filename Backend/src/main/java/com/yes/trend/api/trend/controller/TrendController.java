package com.yes.trend.api.trend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.trend.dto.TrendDto;
import com.yes.trend.api.trend.service.TrendService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.dto.ListDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/trend")
public class TrendController {
	private final TrendService trendService;

	@GetMapping("/keywords")
	public ApiResponse<ListDto<TrendDto.DailyKeywordsDto>> getDailyKeywords() {
		return ApiResponse.success(SuccessCode.GET_SUCCESS, trendService.getDailyKeywords());
	}
}
