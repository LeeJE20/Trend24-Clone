package com.yes.trend.api.drawer.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.drawer.dto.DrawerDto;
import com.yes.trend.common.costants.ErrorCode;
import com.yes.trend.common.exception.CustomException;
import com.yes.trend.domain.admin.entity.Admin;
import com.yes.trend.domain.admin.repository.AdminRepository;
import com.yes.trend.domain.admin.service.AdminService;
import com.yes.trend.domain.box.entity.Box;
import com.yes.trend.domain.box.repository.BoxRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class DrawerService {
	private final BoxRepository boxRepository;
	private final AdminRepository adminRepository;
	private final AdminService adminService;

	@Transactional
	public DrawerDto.Response postDrawer(DrawerDto.Post drawerPost) {
		Admin admin = adminService.getLoginAdmin();
		if (boxRepository.existsByNameAndAdmin(drawerPost.getName(), admin)) {
			throw new CustomException(ErrorCode.ALREADY_EXISTS_DRAWER, drawerPost.getName());
		}
		Box box = new Box(drawerPost.getName(), admin);
		box = boxRepository.save(box);
		return new DrawerDto.Response(box.getId(), box.getName(), new ArrayList<>());
	}

	@Transactional
	public DrawerDto.Layout patchDrawerLayout(DrawerDto.Layout layout) {
		Admin admin = adminService.getLoginAdmin();
		admin.setLayout(layout.getLayout());
		return new DrawerDto.Layout(admin.getLayout());
	}
}
