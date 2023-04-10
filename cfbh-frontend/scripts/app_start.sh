source /home/ec2-user/.bash_profile
cd /home/ec2-user/cfbh-frontend
pm2 serve --name "cfbh-app" build 3000 --spa