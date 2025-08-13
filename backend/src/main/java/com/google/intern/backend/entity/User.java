package com.google.intern.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

/**
 * 用户实体类，对应数据库中的 user 表
 */
@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;

    private String password;

    private String salt;

    @Column(name = "head_img_url")
    private String headImgUrl;

    @Column(name = "register_date")
    private Date registerDate;

    @Column(name = "last_login_date")
    private Date lastLoginDate;
}
