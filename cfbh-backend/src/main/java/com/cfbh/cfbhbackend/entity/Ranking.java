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
@Table(name = "rankings")
public class Ranking {
    @Id
    @Column
    private int id;
    @Column
    private Integer year;
    @Column
    private Integer week;
    @Column
    private Integer ranking;
    @Column(name = "postseason")
    private Boolean isPostseasonGame;
    @Column
    private String poll;
    @Column(name = "first_place_votes")
    private Integer firstPlaceVotes;
    @Column
    private Integer points;
    @Column
    private String conference;
    // No mapped relation to Teams to avoid unnecessary recursion
    @Column(name = "team_id", nullable = false)
    private Integer teamId;
}
