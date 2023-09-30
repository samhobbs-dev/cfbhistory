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
    @Autowired
    private LogoService logoService;

    public List<TeamRecord> getYearRecords(int year) throws Exception {
        List<TeamRecord> yearRecords = recordRepository.findAllByYear(year);
        // for (TeamRecord tr : yearRecords) {
        //     // TODO a lot of assumptions, may need to account for here
        //     String logo = logoService.getLogoImage(tr.getTeam().getId(), tr.getYear());
        //     tr.setLogo(logo);
        // }
        return yearRecords;
    }
}
