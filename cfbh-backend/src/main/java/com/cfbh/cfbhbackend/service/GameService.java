package com.cfbh.cfbhbackend.service;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Game;
import com.cfbh.cfbhbackend.entity.Team;
import com.cfbh.cfbhbackend.repository.GameRepository;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private TeamService teamService;

    public List<Game> getTeamGamesForSeason(int teamId, int year) throws Exception {
        Team team = teamService.getTeam(teamId);
        if (team == null) // If team was not found
            throw new Exception("Team with ID " + teamId + " not found!");
        // Find all games in which the team was either a home or away team
        return gameRepository.findAllByTeamIdAndYear(teamId, year);
    }
}
