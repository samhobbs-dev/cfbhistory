package com.cfbh.cfbhbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Logo;
import com.cfbh.cfbhbackend.repository.LogoRepository;
import com.cfbh.cfbhbackend.repository.TeamRepository;

@Service
public class LogoService {
    @Autowired
    private LogoRepository logoRepository;
    @Autowired
    private TeamRepository teamRepository;

    public boolean teamExists(int teamId) {
        return teamRepository.findById(teamId) != null;
    }

    public List<Logo> getAllTeamLogos(int teamId) throws Exception {
        if (!teamExists(teamId)) // If team was not found
            throw new Exception("Team with ID " + teamId + " not found!");
        return logoRepository.findAllByTeamId(teamId);
    }

    public String getLogoImage(int teamId, int year) throws Exception {
        for (Logo logo : getAllTeamLogos(teamId)) {
            // If logo passes first boundary
            if (logo.getFirstYear() <= year)
                // If logo is present logo or passes later boundary
                if (logo.getLastYear() == null || logo.getLastYear() >= year) {
                    return logo.getImage();
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
