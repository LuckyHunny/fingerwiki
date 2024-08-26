package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class LoginController {
    
    private static Logger logger = LoggerFactory.getLogger(LoginController.class);
    
    @Autowired
    private UserService userService;

    @PostMapping("/login")

    public  Map<String,Object> login (@RequestBody Map<String, Object> paramMap){
       
        Optional<User> user = userService.login((String)paramMap.get("username"), (String)paramMap.get("password"));
        Map<String,Object> resultMap = new HashMap<String,Object>();
        
        if (user.isPresent()) {
            // 유저 매칭 성공
            resultMap.put("reData",true);
            resultMap.put("name",(String)user.get().getName());
            return resultMap;
        } else {
            // 잘못된 유저 정보
            resultMap.put("reData",false);
            return resultMap;
        }
    }
}
