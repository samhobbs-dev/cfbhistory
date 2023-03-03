package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.TeamRecord;
import com.cfbh.cfbhbackend.service.RecordService;

@RestController
@RequestMapping("/record")
public class RecordController {
    @Autowired
    RecordService recordService;

    @GetMapping("/{year}")
    public ResponseEntity<List<TeamRecord>> getYearRecords(@PathVariable int year) {
        return ResponseEntity.ok().body(recordService.getYearRecords(year));
    }
}
