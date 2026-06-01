# TP Étudiants — TrainShop DevOps

## Objectif

Lancer et comprendre une application complète avec Docker et GitHub Actions.

## Étapes

```bash
cp .env.example .env
docker compose up -d --build
docker compose ps
curl http://localhost/api/health
curl http://localhost/api/products
```

## Questions

1. Quel service expose le port 80 ?
2. Pourquoi PostgreSQL n'est pas exposé publiquement ?
3. À quoi sert Redis ?
4. À quoi sert Prometheus ?
5. À quoi sert le workflow `ci.yml` ?
6. À quoi sert le workflow `docker-publish.yml` ?
7. Comment faire un rollback ?
