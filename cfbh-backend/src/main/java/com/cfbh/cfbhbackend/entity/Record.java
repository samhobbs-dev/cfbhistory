package com.cfbh.cfbhbackend.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "records")
public class Record {
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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "team_id", nullable = false)
    private Team team;
}
