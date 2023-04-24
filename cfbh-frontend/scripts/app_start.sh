source /home/ec2-user/.bash_profile
cd /home/ec2-user/cfbh-frontend
# If no app running, start
if ! netstat -ano | grep :3000; then pm2 serve --name 'cfbh-app' build 3000 --spa; fi
