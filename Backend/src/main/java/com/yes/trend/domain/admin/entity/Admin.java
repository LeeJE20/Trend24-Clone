package com.yes.trend.domain.admin.entity;

import com.yes.trend.common.entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "admin")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Admin extends BaseEntity {

	@Column(length = 100)
	private String adminId;

	@Column(length = 100)
	private String adminPw;

	@Column(length = 100)
	private String name;

	private Byte layout;

	@Column(length = 100)
	private String branch;
}