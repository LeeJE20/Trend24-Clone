package com.yes.trend.api.recommend.controller;

import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.recommend.dto.RecommendDto;
import com.yes.trend.api.recommend.service.RecommendService;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.common.util.NumberUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/recommend")
public class RecommendController {
	private final RecommendService recommendService;

	// TR-02
	@GetMapping("/books")
	public ApiResponse<RecommendDto.Response> getRecommendedBooksByKeywordIds(
		@RequestParam() String keywords,
		@RequestParam(defaultValue = "0") int page,
		@RequestParam(defaultValue = "100") int size) {
		StringTokenizer stringTokenizer = new StringTokenizer(keywords, ",");
		Set<Integer> keywordIds = new HashSet<>();
		while (stringTokenizer.hasMoreTokens()) {
			String target = stringTokenizer.nextToken();
			if (!NumberUtil.isOver1(target)) {
				throw new CustomException(ErrorCode.KEYWORDS_SHOULD_BE_ID, target);
			}
			keywordIds.add(Integer.parseInt(target));
		}

		return ApiResponse.success(
			SuccessCode.GET_SUCCESS, recommendService.getRecommendedBooksByKeywordIds(keywordIds.stream().toList(),
				page, size)
		);

	}
}
