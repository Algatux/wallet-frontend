.PHONY: up setup start bash

up: docker-compose.yml
	docker-compose up -d --force-recreate

setup: docker-compose.yml composer.json
	docker-compose run --rm yarn install

start: up
	docker-compose exec node bash

stop: docker-compose.yml
	docker-compose stop

bash: docker-compose.yml
	docker-compose exec node bash
