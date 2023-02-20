package com.cfbh.cfbhbackend.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "teams")
public class Team {
    @Id
    @Column
    private int id;
    @OneToMany
    private Set<Logo> logos;
    @Column(name = "name_full")
    private String fullName;
}
