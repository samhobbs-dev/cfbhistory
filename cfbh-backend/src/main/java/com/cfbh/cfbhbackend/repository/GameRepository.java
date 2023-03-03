package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {
    @Query(value = "SELECT * FROM games WHERE (id_home_team = ?1 or id_away_team = ?1) AND year = ?2", nativeQuery = true)
    public List<Game> findAllByTeamIdAndYear(int team_id, int year);
}
