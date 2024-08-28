package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;  // HttpSession 추가

import java.util.*;

@RestController
@RequestMapping("/api")
public class LoginController {
    
    private static Logger logger = LoggerFactory.getLogger(LoginController.class);
    
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, Object> paramMap, HttpSession session) {  // HttpSession 추가
        Optional<User> user = userService.login((String) paramMap.get("username"), (String) paramMap.get("password"));
        Map<String, Object> resultMap = new HashMap<String, Object>();
        
        if (user.isPresent()) {
            // 유저 매칭 성공
            resultMap.put("reData", true);
            resultMap.put("name", user.get().getName());

            // 세션 생성 및 세션 유지 시간 설정 (5분)
            session.setAttribute("username", user.get().getUsername());
            session.setMaxInactiveInterval(5 * 60);  // 5분 (300초)

            return resultMap;
        } else {
            // 잘못된 유저 정보
            resultMap.put("reData", false);
            return resultMap;
        }
    }

    @PostMapping("/logout")
    public Map<String, Object> logout(HttpSession session) {
        session.invalidate();  // 세션 무효화
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("reData", true);
        resultMap.put("message", "로그아웃 되었습니다.");
        return resultMap;
    }

    @GetMapping("/check-session")
    public Map<String, Object> checkSession(HttpSession session) {
        Map<String, Object> resultMap = new HashMap<>();
        if (session.getAttribute("username") != null) {
            resultMap.put("active", true);
        } else {
            resultMap.put("active", false);
        }
        return resultMap;
    }
}
