package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.Game;
import com.cfbh.cfbhbackend.service.GameService;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping("/{teamId}")
    public ResponseEntity<List<Game>> getTeamGamesForSeason(@PathVariable int teamId, @RequestParam int year)
            throws Exception {
        return ResponseEntity.ok().body(gameService.getTeamGamesForSeason(teamId, year));
    }

}
