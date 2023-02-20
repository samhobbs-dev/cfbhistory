package com.cfbh.cfbhbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cfbh.cfbhbackend.entity.Logo;

@Repository
public interface LogoRepository extends JpaRepository<Logo, Integer> {

}
