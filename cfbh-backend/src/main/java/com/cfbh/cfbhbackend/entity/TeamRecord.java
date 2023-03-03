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
@Table(name = "records")
public class TeamRecord {
    @Id
    @Column
    private int id;
    @Column
    private Integer year;
    @Column
    private String division;
    @Column
    private String conference;
    @Column(name = "win_total")
    private Integer totalWins;
    @Column(name = "loss_total")
    private Integer totalLosses;
    @Column(name = "tie_total")
    private Integer totalTies;
    @Column(name = "win_conf")
    private Integer totalConfWins;
    @Column(name = "loss_conf")
    private Integer totalConfLosses;
    @Column(name = "tie_conf")
    private Integer totalConfTies;

    @Column(name = "team_id", nullable = false)
    private int teamId;
}
