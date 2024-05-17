package com.yes.trend.api.anonymous.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.anonymous.dto.AnonymousDto;
import com.yes.trend.api.anonymous.service.AnonymousService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/anonymous2")
public class AnonymousController {
	private final AnonymousService anonymousService;

	@Operation(summary = "BR-03 도서 및 키워드 클릭 수 올리기", description = "")
	@PostMapping("/recommend/book/{bookId}/click")
	public ApiResponse<AnonymousDto.BookKeywordsClickCountDto> postBookKeywordClickCount(@PathVariable Integer bookId,
		@RequestParam(name = "category-id") Byte categoryId) {
		return ApiResponse.success(SuccessCode.GET_SUCCESS,
			anonymousService.postBookKeywordClickCount(bookId, categoryId));
	}

}
