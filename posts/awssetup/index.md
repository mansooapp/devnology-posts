# NextJ + ReactJS 블로그 운영을 위한 저비용 AWS EC2 셋업
&nbsp;

## AWS 에서 저비용으로 블로그를 운영해보자

예전에 멋모르고 EC2 막 운영했다가 비용이 엄청 나온적이 있다. 최소한의 비용으로 운영할 수 있는 환경을 구축해보자.  
정답이 아닌 맨땅에 헤딩이니 무작정 따라하시면 안됩니다. ㅠㅠ  
인스턴스는 무료 티어로 해보니깐 속도가 너무 안나와 t3.medium 으로 세팅해보았다. 일단 운영해보고 비용이 너무 많이 나오면 
티어를 내리던지 리스케쥴링 해보는 걸로...  

![Image](http://static.devnology.co.kr/files/posts/awssetup/4.png)
![Image](http://static.devnology.co.kr/files/posts/awssetup/5.png)

일단 on-demand 로 월 사용료가 2.7$ 정도 산정되었는데 1년 이상 약정보다 값이 저렴한 걸로 보아 트래픽에 대한 과금이 빠져있나 보다.  
일단 찾는 사람은 없을테니... :)  

## EC2 생성
일단 다른 설정들은 나중에 하기로 하고 바로 Launch 버튼을 누른다.
그러면 ssh 에 접속하기 위한 key-pair 를 선택하라고 나오는데 이미 있다면 선택하고 없다면 하나 생성해주자.
![Image](http://static.devnology.co.kr/files/posts/awssetup/1.png)
![Image](http://static.devnology.co.kr/files/posts/awssetup/2.png)
![Image](http://static.devnology.co.kr/files/posts/awssetup/3.png)

## EC2 운영 비용 산정
무료 티어인 t2.micro 를 써도 무방하나 너무 느려서 m3.medium 으로 새로 생성해주었다.
https://calculator.aws/#/
대충 비용을 계산해보니 아래와 같이 나왔다. 사용량만큼 과금되는 on-demand 로 하면 적게 나오지만 트래픽에 따라 비용이 더 많이 나올 것 이다. 나는 대충 개발 테스트용 & 스터디 용이기 때문에 최대한 비용이 적게 나와야 하기 때문에 월 사용을 8시간 정도로 하니 비용이 적게 나왔다.  검색엔진에 노출되는 상황을 봐서 인스턴스를 중단시키거나 스케쥴링을 다시 해야 할 듯 하다.... 비용이... ㅠㅠ

## SSH 접속 설정
EC2 생성 시 만들었거나 선택한 키를 이용하여 ssh 접속설정한다.
```
# vim ~/.ssh/config

Host ec2_blog
HostName x.xxx.xx.xxx
User ubuntu
IdentityFile ~/.ssh/keys/ec2-blog.pem

# ssh ec2_blog
```

## EC2 세팅
```
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# command -v nvm
# source ~/.bashrc
# nvm install --lts
# npm i -g yarn
# yarn set version berry
# yarn --version
# mkdir ~/apps
# cd ~/apps
# git clone https://github.com/cheonsoo/devnology-next-react-ts.git
# sudo apt-get install nginx -y
# nginx -v
nginx version: nginx/1.18.0 (Ubuntu)
# sudo vim /etc/nginx/sites-available/default
---
server {
        listen 80 default_server;
        listen [::]:80 default_server;


        server_name test.devnology.co.kr;


        location / {
                proxy_pass http://127.0.0.1:3000;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
        }
}
---
# sudo nginx -t
# sudo systemctl reload nginx
# sudo apt-get install python3-certbot-nginx
```


## Elastic IP 설정

![Image](http://static.devnology.co.kr/files/posts/awssetup/6.png)

## 라우트 (Route 53) 설정

![Image](http://static.devnology.co.kr/files/posts/awssetup/7.png)

## 프로젝트 실행 (PM2)
제대로 운영할 건 아니니깐 Cluster 는 한개만 ...
```
# pm2 start /home/ubuntu/apps/devnology-next-react-ts/bin/run.sh -i 1 --name 'devnology'
```

![Image](http://static.devnology.co.kr/files/posts/awssetup/7.png)

## Trouble Shooting

* Yarn install
yarn berry 로 모든 의존성을 버전관리에 포함시켜주는 zero install 을 사용했다고 생각했는데 뭔가 누락된 부분이 있었다 보다.
yarn install 을 별도로 실행시켜주어야 했다.

* puppeteer 관련 의존성 설치 & 업데이트
그 외에도 puppeteer 로 크롤링을 할 때 관련 모듈이 설치되어 있지 않아 에러가 발생했다.
아래 명령어로 관련 의존성을 설치해주니 해결되었다.
```
# sudo apt update && \ 
        sudo apt install -y \ 
                ca-certificates \ 
                fonts-liberation \ 
                libappindicator3-1 \ 
                libasound2 \ 
                libatk-bridge2.0-0 \ 
                libatk1.0-0 \ 
                libc6 \ 
                libcairo2 \ 
                libcups2 \ 
                libdbus-1-3 \ 
                libexpat1 \ 
                libfontconfig1 \ 
                libgbm1 \ 
                libgcc1 \ 
                libglib2.0-0 \ 
                libgtk-3-0 \ 
                libnspr4 \ 
                libnss3 \ 
                libpango-1.0-0 \ 
                libpangocairo-1.0-0 \ 
                libstdc++6 \ 
                libx11-6 \ 
                libx11-xcb1 \ 
                libxcb1 \ 
                libxcomposite1 \ 
                libxcursor1 \ 
                libxdamage1 \ 
                libxext6 \ 
                libxfixes3 \ 
                libxi6 \ 
                libxrandr2 \ 
                libxrender1 \ 
                libxss1 \ 
                libxtst6 \ 
                lsb-release \ 
                wget \ 
                xdg-utils
```
