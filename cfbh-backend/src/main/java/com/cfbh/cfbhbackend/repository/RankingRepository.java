package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.Ranking;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, Integer> {
    // Database considers all postseason rankings to be week 1
    @Query(value = "SELECT * FROM rankings WHERE year = ?1 AND postseason = 1", nativeQuery = true)
    public List<Ranking> findAllFinalRankingsByYear(int year);
    @Query(value = "SELECT * FROM rankings WHERE year = ?1 AND postseason = 1 AND poll = 'AP Top 25'", nativeQuery = true)
    public List<Ranking> findAllAPFinalRankingsByYear(int year);
    
}
