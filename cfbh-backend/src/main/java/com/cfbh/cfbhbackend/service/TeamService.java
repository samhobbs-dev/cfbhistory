package com.cfbh.cfbhbackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.FullTeam;
import com.cfbh.cfbhbackend.entity.Logo;
import com.cfbh.cfbhbackend.entity.Team;
import com.cfbh.cfbhbackend.repository.TeamRepository;

@Service
public class TeamService {
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private LogoService logoService;

    final int CURRENT_YEAR = 2022;

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

    public List<FullTeam> getAllTeamsInYear(int year) throws Exception {
        List<FullTeam> fullTeams = new ArrayList<FullTeam>();
        List<Team> currentTeams = teamRepository.findAllInYear(year);
        for (Team t : currentTeams) {
            // Get team's logo that year
            String logo = logoService.getLogoImage(t.getId(), year);
            // Get team's logo this current year
            String currentLogo = logoService.getLogoImage(t.getId(), CURRENT_YEAR);
            fullTeams.add(new FullTeam(t,logo,currentLogo));
        }        
        return fullTeams;
    }
}
