package com.cfbh.cfbhbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
// Team containing string logo
public class FullTeamDTO {
    private int id;
    private String name_full;
    private String name_school;
    private String mascot;
    private String logo;
    private String currentLogo;
    public FullTeamDTO(Team team, String logo, String currentLogo) {
        this.id = team.getId();
        this.name_full = team.getFullName();
        this.name_school = team.getSchool();
        this.mascot = team.getMascot();
        this.logo = logo;
        this.currentLogo = currentLogo;
    }
}
