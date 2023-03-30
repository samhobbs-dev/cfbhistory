#!/bin/bash
cd /home/ec2-user/server
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install node
nvm install-latest-npm