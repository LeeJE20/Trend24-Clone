package com.yes.trend.domain.admin.repository;

import com.yes.trend.domain.admin.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

  Optional<Admin> findByAdminId(String adminId);
}
