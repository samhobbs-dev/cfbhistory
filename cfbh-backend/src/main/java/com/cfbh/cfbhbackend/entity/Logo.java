package com.cfbh.cfbhbackend.entity;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "logos")
public class Logo {
    @Id
    @Column
    private int id;
    @Lob
    private Blob image;
    @Column(name = "year_first")
    private Integer firstYear;
    @Column(name = "year_last")
    private Integer lastYear;
}
