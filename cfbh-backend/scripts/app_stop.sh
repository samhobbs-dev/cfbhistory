#!/bin/bash
# Kill any process already on port 8081, including jar if already running
if fuser 8081/tcp; then fuser -k 8081/tcp; fi
# ps -ef | grep cfbh-backend-1.0.jar | grep -v grep | awk '{print $2}' | xargs kill