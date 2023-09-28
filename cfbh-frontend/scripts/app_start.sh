echo $HOME
source /home/ubuntu/.profile
source /home/ubuntu/.bashrc
cd /home/ubuntu/cfbh-frontend
nvm -v
npm -v
/home/ubuntu/.nvm/versions/node/v20.7.0/bin/pm2 -v
# If no app running, start
if ! ss -ltn | grep :3000; then pm2 serve --name 'cfbh-app' build 3000 --spa; fi
