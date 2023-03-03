package com.cfbh.cfbhbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cfbh.cfbhbackend.entity.TeamRecord;
import com.cfbh.cfbhbackend.repository.RecordRepository;

@Service
public class RecordService {
    @Autowired
    private RecordRepository recordRepository;

    public List<TeamRecord> getYearRecords(int year) {
        return recordRepository.findAllByYear(year);
    }
}
