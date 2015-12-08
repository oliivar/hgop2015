#!/bin/bash

sudo service docker start

docker kill starter

docker rm -f starter

docker run -p 9000:8080 -d --name starter -e "NODE_ENV=production" olafurij12/tictactoe
