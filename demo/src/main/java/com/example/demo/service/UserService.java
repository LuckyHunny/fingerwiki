package com.example.demo.service;

import com.example.demo.controller.LoginController;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public Optional<User> login(String userName, String userPw) {

        logger.info("login in >>>>>>>>>>>>>>>", userName);
        logger.info("login in >>>>>>>>>>>>>>>", userPw);
        
        Optional<User> user = userRepository.findByUsername(userName);
        if (user.isPresent() && user.get().getPassword().equals(userPw)) {
            return user;
        } else {
            return Optional.empty();
        }
    }
}
