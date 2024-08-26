package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "fingerUser") // 테이블 이름을 지정합니다.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String userPw;

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setId(Long userId) {
        this.userId = userId;
    }

    public String getuserName() {
        return userName;
    }

    public void setuserName(String userName) {
        this.userName = userName;
    }

    public String getuserPw() {
        return userPw;
    }

    public void setuserPw(String userPw) {
        this.userPw = userPw;
    }
}
