package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

// import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")

    public  Map<String,Object> login11 (@RequestBody Map<String, Object> paramMap){
        Optional<User> user = userService.login((String)paramMap.get("username"), (String)paramMap.get("password"));
        Map<String,Object> resultMap = new HashMap<String,Object>();
        
        if (user.isPresent()) {
            return resultMap;
        } else {
            return resultMap;
        }


		// resultMap.put("java return", "im java");
		// return resultMap;
    }


    // public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
    //     Optional<User> user = userService.login(username, password);
        // if (user.isPresent()) {
        //     return ResponseEntity.ok("Login successful");
        // } else {
        //     return ResponseEntity.status(401).body("Invalid credentials");
        // }
    // }
}
