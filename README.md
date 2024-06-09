# Welcome to... [![CI/CD](https://github.com/fritzip/welcome-to/actions/workflows/actions.yml/badge.svg)](https://github.com/fritzip/welcome-to/actions/workflows/actions.yml)

Implementation of the famous boardgame by Benoit Turpin. This project is a web-based version of the game, allowing you to play with your friends online.

## Pre-requisites
- Traefik docker container running on your server
- Docker network named `proxy`
- A domain name pointing to your server

## How to deploy
1. Clone this repository
2. Copy the `.env.example` file to `.env` and fill in the required values
3. Run `docker-compose up -d`
4. Visit your domain name

## How to play
1. Select a seed
2. Share the seed with your friends
3. Sync the turns in audio/visio calls
4. Enjoy the game!
