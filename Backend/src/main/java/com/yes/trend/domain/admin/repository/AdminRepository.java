package com.yes.trend.domain.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yes.trend.domain.admin.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
