package com.yes.trend.api.custom.controller;

import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.custom.dto.CustomDto;
import com.yes.trend.api.custom.service.CustomService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/custom")
public class CustomController {
	private final CustomService customService;

	@Operation(summary = "CP-05 커스텀 페이지 제목 변경", description = "name 조건: null 불가, 공백만 있으면 안 됨, 100자 이내")
	@PatchMapping("/page")
	public ApiResponse<CustomDto.PatchPageName> patchPageName(@Valid @RequestBody CustomDto.PatchPageName name) {
		return ApiResponse.success(SuccessCode.PATCH_SUCCESS, customService.patchPageName(name));
	}
}
