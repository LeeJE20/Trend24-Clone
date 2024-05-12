package com.yes.trend.api.drawer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yes.trend.api.drawer.dto.DrawerDto;
import com.yes.trend.api.drawer.service.DrawerService;
import com.yes.trend.common.costants.SuccessCode;
import com.yes.trend.common.dto.ApiResponse;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
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

	@Operation(summary = "BD-02 서랍 보기 방식 변경", description = "layout은 number로 1, 2, 3, 4가 있다. 스웨거에 string 형태로 나오는데 무시할 것.")
	@PatchMapping("/layout")
	public ApiResponse<DrawerDto.Layout> patchDrawerLayout(@Valid @RequestBody DrawerDto.Layout layout) {
		return ApiResponse.success(SuccessCode.PATCH_SUCCESS, drawerService.patchDrawerLayout(layout));
	}

	@Operation(summary = "BD-04 서랍 보기 방식 조회", description = "레이아웃 조회")
	@GetMapping("/layout")
	public ApiResponse<DrawerDto.Layout> getDrawerLayout() {
		return ApiResponse.success(SuccessCode.GET_SUCCESS, drawerService.getDrawerLayout());
	}
}
