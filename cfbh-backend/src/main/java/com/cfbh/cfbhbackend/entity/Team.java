package com.cfbh.cfbhbackend.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

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
    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private Set<Logo> logos;
    @Column(name = "name_full")
    private String fullName;
}
