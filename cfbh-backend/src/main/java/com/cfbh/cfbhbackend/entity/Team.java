package com.cfbh.cfbhbackend.entity;

import org.springframework.stereotype.Indexed;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @Column
    private int id;

    @OneToMany
    private Set<Logo> logo;
}
