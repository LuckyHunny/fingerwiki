package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // 필요에 따라 커스텀 쿼리 메서드를 정의할 수 있습니다.
    // 예: 특정 필드로 사용자 조회
    User findByUsername(String userName);
}
