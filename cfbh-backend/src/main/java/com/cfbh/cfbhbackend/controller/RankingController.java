package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.Ranking;
import com.cfbh.cfbhbackend.service.RankingService;

@RestController
@CrossOrigin(origins = {
        "http://localhost:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com",
        "http://cfbhistory.net",
        "https://main.d2b1gwg20r4wph.amplifyapp.com"
})
@RequestMapping("/ranking")
public class RankingController {
    @Autowired
    private RankingService rankingService;

    @GetMapping("/{year}/final/ap")
    public ResponseEntity<List<Ranking>> getAPFinalRankingsByYear(@PathVariable int year) {
        return ResponseEntity.ok().body(rankingService.getAPFinalRankingsByYear(year));
    }
    
}
