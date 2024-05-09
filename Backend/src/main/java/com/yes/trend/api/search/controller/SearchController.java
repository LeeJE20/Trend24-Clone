package com.yes.trend.api.search.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.search.service.SearchService;
import com.yes.trend.common.dto.ApiResponse;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
public class SearchController {
	private final SearchService searchService;

	@Operation(summary = "BS-01 도서 검색", description = "category는 id로 보내주세요")
	@GetMapping("/")
	public ApiResponse<?> search(
		@RequestParam(required = false) String title,
		@RequestParam(required = false) String category,
		@RequestParam(defaultValue = "0") int page,
		@RequestParam(defaultValue = "40") int size) {

		return null;
	}
}
