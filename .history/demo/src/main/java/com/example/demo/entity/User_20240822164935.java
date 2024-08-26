package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "fingerUser") // 테이블 이름을 명시적으로 설정
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer uuid; // 'uuid' 필드는 int형이므로 Integer로 매핑

    @Column(nullable = false, length = 15)
    private String userId; // 'userId' 필드는 varchar(15)이므로 String으로 매핑

    @Column(nullable = false, length = 20)
    private String userName; // 'userName' 필드는 varchar(20)이므로 String으로 매핑

    @Column(nullable = false, length = 20)
    private String userPw; // 'userPw' 필드는 varchar(20)이므로 String으로 매핑

    @Column(nullable = true, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime joinDate; // 'joinDate' 필드는 timestamp이므로 LocalDateTime으로 매핑

    // 기본 생성자
    public User() {
    }

    // 매개변수가 있는 생성자 (필요에 따라 추가)
    public User(String userId, String userName, String userPw, LocalDateTime joinDate) {
        this.userId = userId;
        this.userName = userName;
        this.userPw = userPw;
        this.joinDate = joinDate;
    }

    // Getters and Setters
    public Integer getUuid() {
        return uuid;
    }

    public void setUuid(Integer uuid) {
        this.uuid = uuid;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public LocalDateTime getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(LocalDateTime joinDate) {
        this.joinDate = joinDate;
    }
}
