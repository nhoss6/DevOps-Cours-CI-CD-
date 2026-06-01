# TrainShop — Projet DevOps complet

Projet pédagogique complet avec :

- API Node.js / Express
- Frontend HTML/CSS/JS
- PostgreSQL
- Redis
- Nginx reverse proxy
- Dockerfile API
- Dockerfile Frontend
- docker-compose local
- docker-compose production
- GitHub Actions CI
- GitHub Actions build + push Docker Hub
- Exemple de déploiement SSH
- Prometheus
- Grafana
- Healthchecks
- Logs structurés
- Documentation TP

## Lancement local

```bash
cp .env.example .env
docker compose up -d --build
```

## URLs

```text
Frontend : http://localhost
API health : http://localhost/api/health
API products : http://localhost/api/products
API metrics : http://localhost/api/metrics
Prometheus : http://localhost:9090
Grafana : http://localhost:3001
```

Grafana :

```text
admin / admin
```

## Commandes utiles

```bash
docker compose ps
docker compose logs -f api
docker compose exec api sh
docker compose down
docker compose down -v
docker system df
```

## GitHub Actions

Workflows inclus :

```text
.github/workflows/ci.yml
.github/workflows/docker-publish.yml
.github/workflows/deploy-ssh-example.yml
```

Secrets GitHub à créer pour Docker Hub :

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

Secrets optionnels pour déploiement SSH :

```text
SSH_HOST
SSH_USER
SSH_PRIVATE_KEY
```

## Production

Modifier `.env` :

```env
API_IMAGE=username/trainshop-api:1.0.0
FRONTEND_IMAGE=username/trainshop-frontend:1.0.0
```

Puis lancer :

```bash
docker compose -f docker-compose.prod.yml --env-file .env up -d
```

## Rollback

Changer les tags dans `.env`, puis :

```bash
docker compose -f docker-compose.prod.yml --env-file .env pull
docker compose -f docker-compose.prod.yml --env-file .env up -d
docker compose logs -f api
```
