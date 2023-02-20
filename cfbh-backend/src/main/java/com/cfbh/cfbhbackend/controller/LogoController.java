package com.cfbh.cfbhbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.service.LogoService;

@RestController
public class LogoController {
    @Autowired
    LogoService logoService;

    @GetMapping("/logo/{teamId}")
    public ResponseEntity<byte[]> getLogo(@PathVariable int teamId, @RequestParam int year)
            throws Exception {
        byte[] logo = logoService.getLogo(teamId, year);
        // TODO consider allowing content type to be detectable (e.g. for JPGS)
        // null means no logo was found - frontend handles this
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(logo);
    }

    @PostMapping("/logo")
    public ResponseEntity addLogo() {
        // TODO replace
        return null;
    }

    @PutMapping("/logo/image")
    public ResponseEntity updateLogoImage() {
        // TODO replace
        return null;
    }

    @PutMapping("/logo/year/{teamId}")
    public ResponseEntity updateLogoYears(
            @PathVariable int teamId,
            @RequestParam int firstYear,
            @RequestParam(required = false) int lastYear) {
        // TODO replace
        return null;
    }

}
