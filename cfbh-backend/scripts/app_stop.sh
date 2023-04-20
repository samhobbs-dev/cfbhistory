#!/bin/bash
# Kill any process already on port 8081, including jar if already running
fuser -k 8081/tcp
# ps -ef | grep cfbh-backend-1.0.jar | grep -v grep | awk '{print $2}' | xargs kill