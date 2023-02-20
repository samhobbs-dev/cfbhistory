package com.cfbh.cfbhbackend.entity;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

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
