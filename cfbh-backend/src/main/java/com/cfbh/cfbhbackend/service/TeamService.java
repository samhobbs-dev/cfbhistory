package com.cfbh.cfbhbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Team;
import com.cfbh.cfbhbackend.repository.TeamRepository;

@Service
public class TeamService {
    @Autowired
    private TeamRepository teamRepository;

    public Team getTeam(int teamId) {
        return teamRepository.findById(teamId);
    }
}
