package com.cfbh.cfbhbackend.service;

import java.util.ArrayList;
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
        // Get all team ids for current year
        for (Integer id : gameRepository.findAllTeamIdInYear(year)) {
            // Then fetch every teams' schedule
            List<Game> teamGames = gameRepository.findAllByTeamIdAndYear(id, year);
            schedules.add(new Schedule(id,teamGames));
        }
        return schedules;
    }
}
