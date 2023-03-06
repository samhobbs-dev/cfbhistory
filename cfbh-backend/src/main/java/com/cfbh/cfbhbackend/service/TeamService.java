package com.cfbh.cfbhbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Team;
import com.cfbh.cfbhbackend.repository.TeamRepository;

@Service
public class TeamService {
    @Autowired
    private TeamRepository teamRepository;

    public Team getTeam(int teamId) throws Exception {
        // Enforcing team id cannot be null, as this is used in other services
        Team team = teamRepository.findById(teamId);
        if (team == null) // If team was not found
            throw new Exception("Team with ID " + teamId + " not found!");
        return team;
    }

    public boolean teamExists(int teamId) {
        return teamRepository.findById(teamId) != null;
    }
}
