package com.example.demo.service;
import java.util.*;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> login(Map<String, Object> data) {
        Optional<User> user = userRepository.findByUsername((String)data.get("username") );
        if (user.isPresent() && user.get().getPassword().equals((String)data.get("password"))) {
            return user;
        } else {
            return Optional.empty();
        }
    }
}
