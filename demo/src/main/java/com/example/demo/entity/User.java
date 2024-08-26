package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_info")  // 테이블 이름을 변경
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uuid")  // 컬럼 이름 명시
    private Integer uuid;   // 데이터베이스의 uuid 컬럼과 매핑

    @Column(name = "username", nullable = false, length = 50)  // 컬럼 이름 명시
    private String username;   // 데이터베이스의 username 컬럼과 매핑

    @Column(name = "password", nullable = false, length = 100)  // 컬럼 이름 명시
    private String password;   // 데이터베이스의 password 컬럼과 매핑

    @Column(name = "timestamp", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")  // 컬럼 이름 명시
    private LocalDateTime timestamp;   // 데이터베이스의 timestamp 컬럼과 매핑

    @Column(name = "name", nullable = false, length = 50)  // 컬럼 이름 명시
    private String name;   // 데이터베이스의 username 컬럼과 매핑

    // 기본 생성자
    public User() {
    }

    // 매개변수가 있는 생성자 (필요에 따라 추가)
    public User(String username, String password, LocalDateTime timestamp, String name) {
        this.username = username;
        this.password = password;
        this.timestamp = timestamp;
        this.name = name;
    }

    // Getters and Setters
    public Integer getUuid() {
        return uuid;
    }

    public void setUuid(Integer uuid) {
        this.uuid = uuid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
