package com.cfbh.cfbhbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cfbh.cfbhbackend.service.LogoService;

@RestController
@RequestMapping("/logo")
public class LogoController {
    @Autowired
    private LogoService logoService;

    @GetMapping("/{teamId}")
    public ResponseEntity<byte[]> getLogo(@PathVariable int teamId, @RequestParam int year)
            throws Exception {
        byte[] logo = logoService.getLogo(teamId, year);
        // TODO consider allowing content type to be detectable (e.g. for JPGS)
        // null means no logo was found - frontend handles this
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(logo);
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
