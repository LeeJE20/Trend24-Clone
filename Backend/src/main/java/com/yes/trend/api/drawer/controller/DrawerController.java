package com.yes.trend.api.drawer.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.drawer.dto.DrawerDto;
import com.yes.trend.api.drawer.service.DrawerService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/drawer")
public class DrawerController {
	private final DrawerService drawerService;

	@Operation(summary = "BD-03 서랍 추가", description = "이름 중복 안 됨")
	@PostMapping("")
	public ApiResponse<DrawerDto.Response> postDrawer(@RequestBody DrawerDto.Post drawerPost) {
		return ApiResponse.success(SuccessCode.POST_SUCCESS, drawerService.postDrawer(drawerPost));
	}
}
