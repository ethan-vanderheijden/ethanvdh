FROM nginx:latest

RUN apt update && apt install -y python3 python3-venv && rm -rf /var/lib/apt/lists/*

RUN python3 -m venv /certbot
RUN /certbot/bin/pip install certbot certbot-nginx
RUN ln -s /certbot/bin/certbot /usr/bin/certbot

RUN rm /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./templates/ /etc/nginx/templates/
