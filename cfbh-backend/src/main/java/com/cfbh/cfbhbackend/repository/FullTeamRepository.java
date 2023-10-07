package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.FullTeam;

@Repository
public interface FullTeamRepository extends JpaRepository<FullTeam, Integer> {
    @Query(value = 
    // "SELECT * FROM teams WHERE id IN ((SELECT id_home_team FROM games where year = ?1) UNION (SELECT id_away_team FROM games WHERE year = ?1))"
    "select id, name_full as full_name, name_school as school, mascot, logo, current_logo from teams t left join ("+
        "select team_id as id, logo, current_logo from ("+
            "select team_id, image as logo from logos where team_id is not null and (year_first <= ?1 and (year_last >= ?1 or year_last is null)) group by team_id, image having min(year_first)"+
        ") as t1 left join ("+
            "select team_id, image as current_logo from logos where team_id is not null and year_last is null"+
        ") as t2 using (team_id) "+
        "union "+
        "select team_id as id, logo, current_logo from ("+
            "select team_id, image as logo from logos where team_id is not null and (year_first <= ?1 and (year_last >= ?1 or year_last is null)) group by team_id, image having min(year_first)"+
        ") as t1 right join ("+
            "select team_id, image as current_logo from logos where team_id is not null and year_last is null"+
        ") as t2 using (team_id)"+
    ") as t3 using (id) order by id"
    , nativeQuery = true)
    public List<FullTeam> findAllInYear(int year);

}