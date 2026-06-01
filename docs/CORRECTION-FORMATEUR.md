# Correction formateur — TrainShop

## Réponses attendues

1. Le service `proxy` expose le port 80.
2. PostgreSQL reste sur le réseau backend interne pour des raisons de sécurité.
3. Redis sert de cache simple pour la liste des produits.
4. Prometheus collecte les métriques exposées par `/metrics`.
5. `ci.yml` lance tests, lint, build et build Docker local.
6. `docker-publish.yml` publie les images API et frontend vers Docker Hub.
7. Un rollback consiste à remettre un ancien tag d'image dans `.env`, puis relancer Compose.

## Grille sur 20

| Critère | Points |
|---|---:|
| Lancement local | 3 |
| Compréhension architecture | 3 |
| Dockerfile | 3 |
| docker-compose | 4 |
| GitHub Actions | 4 |
| Sécurité | 1 |
| Monitoring | 1 |
| Documentation orale | 1 |
