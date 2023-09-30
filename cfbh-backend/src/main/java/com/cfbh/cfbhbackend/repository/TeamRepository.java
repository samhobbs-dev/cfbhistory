package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.FullTeam;
import com.cfbh.cfbhbackend.entity.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    public Team findById(int id);
}
