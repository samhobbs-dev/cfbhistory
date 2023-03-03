package com.cfbh.cfbhbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.TeamRecord;

@Repository
public interface RecordRepository extends JpaRepository<TeamRecord, Integer> {
    public List<TeamRecord> findAllByYear(int year);
}
