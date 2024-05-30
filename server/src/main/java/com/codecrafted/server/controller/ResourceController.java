package com.codecrafted.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("/public")
    public ResponseEntity<?> publicApi(){
        return ResponseEntity.ok("Public API call works!!");
    }

    @GetMapping("/protected")
    public ResponseEntity<?> protectedApi(){
        return ResponseEntity.ok("Protected API call works!!");
    }
}
