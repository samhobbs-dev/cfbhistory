package com.cfbh.cfbhbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
// Team containing string logo
public class FullTeam {
    private int id;
    private String fullName;
    private String school;
    private String mascot;
    private String logo;
    private String currentLogo;
    public FullTeam(Team team, String logo, String currentLogo) {
        this.id = team.getId();
        this.fullName = team.getFullName();
        this.school = team.getSchool();
        this.mascot = team.getMascot();
        this.logo = logo;
        this.currentLogo = currentLogo;
    }
}
