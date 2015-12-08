#!/bin/bash

set -e

echo Cleaning...
rm -rf ./dist

echo Building app
grunt

cp ./Dockerfile ./dist/

cd dist
npm install --production

echo Building docker image
docker build -t olafurij12/tictactoe .

echo "Done"
