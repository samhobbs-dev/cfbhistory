package com.cfbh.cfbhbackend.entity;

import java.sql.Blob;
import javax.persistence.Entity;

@Entity
@Table(name = "logos")
public class Logo {
    @Column
    Blob image;
    @Column
    Integer firstYear;
    @Column
    Integer lastYear;
}
