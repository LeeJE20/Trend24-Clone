package com.yes.trend.api.custom.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yes.trend.api.custom.dto.CustomDto;
import com.yes.trend.domain.admin.entity.Admin;
import com.yes.trend.domain.admin.repository.AdminRepository;
import com.yes.trend.domain.admin.service.AdminService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CustomService {
	private final AdminRepository adminRepository;
	private final AdminService adminService;

	@Transactional
	public CustomDto.PatchPageName patchPageName(CustomDto.PatchPageName name) {
		Admin admin = adminService.getLoginAdmin();
		admin.setCustomName(name.getName());
		return new CustomDto.PatchPageName(admin.getCustomName());
	}
}
