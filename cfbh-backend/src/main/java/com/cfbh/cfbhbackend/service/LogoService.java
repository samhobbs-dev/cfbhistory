package com.cfbh.cfbhbackend.service;

import java.sql.Blob;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Logo;
import com.cfbh.cfbhbackend.entity.Team;
import com.cfbh.cfbhbackend.repository.LogoRepository;

@Service
public class LogoService {
    @Autowired
    private LogoRepository logoRepository;
    @Autowired
    private TeamService teamService;

    public byte[] getLogo(int teamId, int year) throws Exception {
        Team team = teamService.getTeam(teamId);
        if (team == null) // If team was not found
            throw new Exception("Team with ID " + teamId + " not found!");
        List<Logo> logos = logoRepository.findAllByTeamId(teamId);
        for (Logo logo : logos) {
            // If logo passes first boundary
            if (logo.getFirstYear() <= year)
                // If logo is present logo or passes later boundary
                if (logo.getLastYear() == null || logo.getLastYear() >= year) {
                    Blob image = logo.getImage();
                    return image.getBytes(1, (int) image.length());
                }
        }
        return null; // No logo for provided year
    }

    public byte[] uploadLogo() {
        // TODO replace
        return null;
    }

    public byte[] updateLogoImage() {
        // TODO replace
        return null;
    }

    // Last year not provided (Pres)
    public byte[] updateLogoYears(int firstYear, int lastYear) {
        // TODO replace
        return null;
    }

    // Last year provided
    public byte[] updateLogoYears(int firstYear) {
        // TODO replace
        return null;
    }
}
