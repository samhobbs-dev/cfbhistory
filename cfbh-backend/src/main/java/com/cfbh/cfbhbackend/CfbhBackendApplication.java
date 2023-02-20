package com.cfbh.cfbhbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.cfbh.cfbhbackend.entity")
public class CfbhBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(CfbhBackendApplication.class, args);
	}

}
