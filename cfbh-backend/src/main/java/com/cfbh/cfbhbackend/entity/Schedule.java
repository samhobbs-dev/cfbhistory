package com.cfbh.cfbhbackend.entity;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Schedule {
    private int teamId;
    private List<Game> games;
}
