PROJECT_NAME = smart_team
# ────────────────────────────────────────
#   M A I N   S T A R T   C O M M A N D
# ────────────────────────────────────────
init: down env up-build migrate


# ────────────────────────────
#   H E L P   C O M M A N D
# ────────────────────────────
help:
	@echo "Available commands in Makefile:"
	@grep -E '^[a-zA-Z_-]+:' Makefile | cut -d':' -f1 | sort


# ────────────────────────────────────────
#   C O N T A I N E R   C O M M A N D S
# ────────────────────────────────────────
up:
	docker compose up
up-build:
	docker compose up --build
down:
	docker compose down
restart:
	docker compose down && docker compose up --build
ps:
	docker compose ps


# ────────────────────────────────────────
#   . E N V   F I L E   C O M M A N D S
# ────────────────────────────────────────
env: client-env server-env
client-env:
	test -f ./client_side/.env || cp ./client_side/.env.example ./client_side/.env
server-env:
	test -f ./server_side/.env || cp ./server_side/.env.example ./server_side/.env


# ────────────────────────────
#   L O G   C O M M E N T S
# ────────────────────────────
logs:
	docker compose logs -f
client-logs:
	docker compose logs -f client
server-logs:
	docker compose logs -f server
db-logs:
	docker compose logs -f database
traefik-logs:
	docker compose logs -f traefik


# ────────────────────────────────────────────────────
#   E N T E R   C O N T A I N E R   S H E L L   C O M M A N D S
# ────────────────────────────────────────────────────
client-shell:
	docker exec -it client sh
server-shell:
	docker exec -it server sh
traefik-shell:
	docker exec -it traefik sh
db-shell:
	docker exec -it database psql -U team -d smart_team_database


# ──────────────────────────────────────
#   D A T A B A S E   C O M M A N D S
# ──────────────────────────────────────
migrate:
	docker compose exec server npm run migrate
migrate-undo:
	docker compose exec server npm run migrate:undo
migrate-undo-all:
	docker compose exec server npm run migrate:undo:all

seed:
	docker compose exec server npm run seed
seed-undo:
	docker compose exec server npm run seed:undo
seed-undo-all:
	docker compose exec server npm run seed:undo:all

db-dump:
	mkdir -p backups
	docker exec -t database pg_dumpall -c -U team > backups/dump_`date +%Y-%m-%d"_"%H_%M_%S`.sql
