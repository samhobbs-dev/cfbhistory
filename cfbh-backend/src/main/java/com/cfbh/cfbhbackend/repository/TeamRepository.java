package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    public Team findById(int id);
    @Query(value = "SELECT * FROM teams WHERE id IN ((SELECT id_home_team FROM games where year = ?1) UNION (SELECT id_away_team FROM games WHERE year = ?1))", nativeQuery = true)
    public List<Team> findAllInYear(int year);
}
