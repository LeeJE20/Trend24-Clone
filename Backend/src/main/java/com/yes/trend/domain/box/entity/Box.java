package com.yes.trend.domain.box.entity;

import com.yes.trend.common.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;

@Entity
@Table(name = "box")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Box extends BaseEntity {

	@Column(length = 100)
	private String name;

	private Integer adminId;
}
