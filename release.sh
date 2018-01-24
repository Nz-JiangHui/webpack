#!/bin/bash
git checkout master && git pull && forever start ./build/dev-server.js