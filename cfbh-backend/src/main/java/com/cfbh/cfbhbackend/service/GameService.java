package com.cfbh.cfbhbackend.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Game;
import com.cfbh.cfbhbackend.entity.Schedule;
import com.cfbh.cfbhbackend.repository.GameRepository;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private TeamService teamService;

    public List<Game> getTeamGamesForSeason(int teamId, int year) throws Exception {
        if (!teamService.teamExists(teamId)) // If team was not found
            throw new Exception("Team with ID " + teamId + " not found!");
        // Find all games in which the team was either a home or away team
        return gameRepository.findAllByTeamIdAndYear(teamId, year);
    }

    public List<Schedule> getAllTeamSchedules(int year) {
        List<Schedule> schedules = new ArrayList<Schedule>();
        List<Game> yearGames = gameRepository.finalAllByYear(year);
        for (Game g : yearGames) {
            boolean homeFound = false;
            boolean awayFound = false;
            for (Schedule s : schedules) {
                int teamId = s.getTeamId();
                if (teamId == g.getHomeTeamId()) {
                    s.getGames().add(g);
                    homeFound = true;                
                }
                if (teamId == g.getAwayTeamId()) {
                    s.getGames().add(g);
                    awayFound = true;
                }
                // Stop iterating once both home and away teams are present
                if (homeFound && awayFound)
                    break;
            }
            if (!homeFound) {
                List<Game> gameList = new ArrayList<Game>(Arrays.asList(g));
                schedules.add(new Schedule(g.getHomeTeamId(), gameList));
            }
            if (!awayFound) {
                List<Game> gameList = new ArrayList<Game>(Arrays.asList(g));
                schedules.add(new Schedule(g.getAwayTeamId(), gameList));
            }
        }
        return schedules;
    }
}
