package com.yes.trend.domain.admin.entity;

import com.yes.trend.common.entity.BaseEntity;
import com.yes.trend.domain.box.entity.Box;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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

  @Setter
  private Byte layout = 1;

  @Column(length = 100)
  private String branch = "";

  @Setter
  private String customName;

  @Setter
  private String customContents;

  @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
  private List<Box> boxes;

  @Builder
  public Admin(String adminId, String adminPw, String name) {
    this.adminId = adminId;
    this.adminPw = adminPw;
    this.name = name;
  }
}