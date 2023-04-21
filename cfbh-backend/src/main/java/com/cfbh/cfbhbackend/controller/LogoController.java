package com.cfbh.cfbhbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.entity.Logo;
import com.cfbh.cfbhbackend.service.LogoService;

@RestController
@CrossOrigin(origins = {
        "http://localhost:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com:3000",
        "http://ec2-18-223-193-4.us-east-2.compute.amazonaws.com"
})
@RequestMapping("/logo")
public class LogoController {
    @Autowired
    private LogoService logoService;

    @GetMapping("/{teamId}")
    public ResponseEntity<List<Logo>> getAllTeamLogos(@PathVariable int teamId)
            throws Exception {
        List<Logo> teamLogos = logoService.getAllTeamLogos(teamId);
        return ResponseEntity.ok().body(teamLogos);
    }

    @GetMapping("/image/{teamId}")
    public ResponseEntity<String> getLogoImage(@PathVariable int teamId, @RequestParam int year)
            throws Exception {
        String logoImage = logoService.getLogoImage(teamId, year);
        // null means no logo was found - frontend handles this
        return ResponseEntity.ok().body(logoImage);
    }

    @PostMapping("/add")
    public ResponseEntity addLogo() {
        // TODO replace
        return null;
    }

    @PutMapping("/update/image")
    public ResponseEntity updateLogoImage() {
        // TODO replace
        return null;
    }

    @PutMapping("/update/year/{teamId}")
    public ResponseEntity updateLogoYears(
            @PathVariable int teamId,
            @RequestParam int firstYear,
            @RequestParam(required = false) int lastYear) {
        // TODO replace
        return null;
    }

}
