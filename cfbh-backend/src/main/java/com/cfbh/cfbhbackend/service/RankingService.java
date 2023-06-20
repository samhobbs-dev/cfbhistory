package com.cfbh.cfbhbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.Ranking;
import com.cfbh.cfbhbackend.repository.RankingRepository;

@Service
public class RankingService {
    @Autowired
    private RankingRepository rankingRepository;

    public List<Ranking> getAPFinalRankingsByYear(int year) {
        // Find all final rankings (i.e. postseason rankings)
        return rankingRepository.findAllAPFinalRankingsByYear(year);
    }
}
