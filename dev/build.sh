#!/usr/bin/env bash

( cd frontend && docker-compose run node npm run build )

mv ./../public//backend/* ./../public
rm -rf ./../public/backend/