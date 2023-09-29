package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.TeamRecord;
import com.cfbh.cfbhbackend.service.RecordService;

@RestController
@CrossOrigin(origins = {
        "*",
        "http://localhost:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com",
        "http://ec2-18-189-66-35.us-east-2.compute.amazonaws.com:3000",
        "http://ec2-18-189-66-35.us-east-2.compute.amazonaws.com",
        "http://cfbhistory.net",
        "https://cfbhistory.net",
        "https://main.d2b1gwg20r4wph.amplifyapp.com"
})
@RequestMapping("/record")
public class RecordController {
    @Autowired
    RecordService recordService;

    @GetMapping("/{year}")
    public ResponseEntity<List<TeamRecord>> getYearRecords(@PathVariable int year)
            throws Exception {
        return ResponseEntity.ok().body(recordService.getYearRecords(year));
    }
}
