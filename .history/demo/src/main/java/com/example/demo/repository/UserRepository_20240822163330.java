package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// @Repository
@NoRepositoryBean
public interface UserRepository extends JpaRepository<User, Long> {
    // username으로 User 검색
    Optional<User> findByUsername(String userName);
}
