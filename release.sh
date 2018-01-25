#!/usr/bin/env bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
cd jianghui/webpack && git pull && git checkout master && git pull && npm run stop && npm run run