package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.Game;
import com.cfbh.cfbhbackend.entity.Schedule;
import com.cfbh.cfbhbackend.service.GameService;

@RestController
@CrossOrigin(origins = {
        "http://localhost:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com",
        "http://cfbhistory.net"
})
@RequestMapping("/game")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping("/{teamId}")
    public ResponseEntity<List<Game>> getTeamGamesForSeason(@PathVariable int teamId, @RequestParam int year)
            throws Exception {
        return ResponseEntity.ok().body(gameService.getTeamGamesForSeason(teamId, year));
    }

    @GetMapping("/all/{year}")
    public ResponseEntity<List<Schedule>> getAllTeamSchedules(@PathVariable int year)
            throws Exception {
        return ResponseEntity.ok().body(gameService.getAllTeamSchedules(year));
    }

}
