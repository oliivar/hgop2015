#!/bin/bash

set -e

docker push olafurij12/tictactoe

testing="ssh vagrant@192.168.33.12 docker"

exit="ssh vagrant@192.168.33.12 exit"

$testing kill oli

$testing rm -f oli 

$testing pull olafurij12/tictactoe

$testing run -p 9090:8080 -d --name oli -e "NODE_ENV=production" olafurij12/tictactoe

echo hallo

$exit

