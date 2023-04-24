source /home/ec2-user/.bash_profile
cd /home/ec2-user/cfbh-frontend
nvm -v
npm install
npm install pm2 -g
sudo yum install nginx -y
sudo mv ningx-redirect.conf /etc/nginx/conf.d/ningx-redirect.conf
sudo service nginx start
