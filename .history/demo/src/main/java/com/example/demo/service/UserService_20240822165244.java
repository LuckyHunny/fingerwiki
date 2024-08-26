package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> login(String userName, String userPw) {
        Optional<User> user = userRepository.findByUsername(userName);
        if (user.isPresent() && user.get().getPassword().equals(userPw)) {
            return user;
        } else {
            return Optional.empty();
        }
    }
}
