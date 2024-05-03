package com.yes.trend.domain.admin.entity;

import java.util.List;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.box.entity.Box;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
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

	@OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
	private List<Box> boxes;
}