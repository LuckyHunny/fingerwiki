package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import ch.qos.logback.classic.Logger;

import java.util.*;

import org.slf4j.LoggerFactory;
// import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LoginController {

    private final org.slf4j.Logger Logger = LoggerFactory.getLogger(LoginController.class.getName());
    
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        
        Map<String,Object> resultMap = new HashMap<String,Object>();
        resultMap.put("username", username);
        resultMap.put("password", password);
        Logger.info("sdfsdf", resultMap);
        Optional<User> user = userService.login(resultMap);
        if (user.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
