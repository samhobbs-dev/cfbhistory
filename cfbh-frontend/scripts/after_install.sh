source /home/ubuntu/.profile
cd /home/ubuntu/cfbh-frontend
nvm -v
npm install
npm install pm2 -g
sudo apt install nginx -y
sudo mv nginx-redirect.conf /etc/nginx/conf.d/nginx-redirect.conf
sudo service nginx start
