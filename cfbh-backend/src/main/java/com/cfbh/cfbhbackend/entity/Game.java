package com.cfbh.cfbhbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "games")
public class Game {
    @Id
    @Column
    private int id;
    @Column
    private Integer year;
    @Column
    private Integer week;
    @Column(name = "postseason")
    private Boolean isPostseasonGame;
    @Column(name = "points_home")
    private Integer homePoints;
    @Column(name = "points_away")
    private Integer awayPoints;
    @Column(name = "completed")
    private Boolean isCompleted;
    @Column(name = "conference_game")
    private Boolean isConferenceGame;

    // No mapped relation to Teams to avoid unnecessary recursion
    @Column(name = "id_home_team", nullable = false)
    private Integer homeTeamId;
    @Column(name = "id_away_team", nullable = false)
    private Integer awayTeamId;
}
