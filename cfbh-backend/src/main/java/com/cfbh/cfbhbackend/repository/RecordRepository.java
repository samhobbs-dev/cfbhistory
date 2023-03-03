package com.cfbh.cfbhbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends JpaRepository<com.cfbh.cfbhbackend.entity.Record, Integer> {

}
