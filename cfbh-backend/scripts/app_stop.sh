#!/bin/bash
ps -ef | grep cfbh-backend-1.0.jar | grep -v grep | awk '{print $2}' | xargs kill