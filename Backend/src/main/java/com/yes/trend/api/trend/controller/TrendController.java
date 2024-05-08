package com.yes.trend.api.trend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.trend.dto.TrendDto;
import com.yes.trend.api.trend.service.TrendService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.dto.ListDto;

import io.swagger.v3.oas.annotations.Operation;
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

	@Operation(summary = "HT-05 키워드 변화 그래프", description = "1주일동안의 키워드 순위 변동 그래프")
	@GetMapping("/keywords/{keywordId}/ranking")
	public ApiResponse<ListDto<TrendDto.KeywordRanking>> getKeywordsRankingHistories(@PathVariable int keywordId) {
		return ApiResponse.success(SuccessCode.GET_SUCCESS, trendService.getKeywordsRankingHistories(keywordId));
	}
}
