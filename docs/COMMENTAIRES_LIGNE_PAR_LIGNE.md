# Commentaires ligne par ligne du projet TrainShop DevOps

Ce document liste les fichiers en relation avec le cours et explique chaque ligne sans modifier les fichiers executables du projet.

## Fichiers en relation avec le cours

- `.dockerignore`
- `.env`
- `.env.example`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-ssh-example.yml`
- `.github/workflows/docker-publish.yml`
- `.gitignore`
- `README.md`
- `api/.dockerignore`
- `api/Dockerfile`
- `api/package.json`
- `api/src/app.js`
- `api/src/db/pool.js`
- `api/src/db/redis.js`
- `api/src/metrics.js`
- `api/src/middleware/logger.js`
- `api/src/routes/health.js`
- `api/src/routes/orders.js`
- `api/src/routes/products.js`
- `api/src/server.js`
- `api/tests/health.test.js`
- `database/init/001-init.sql`
- `docker-compose.prod.yml`
- `docker-compose.yml`
- `docs/CORRECTION-FORMATEUR.md`
- `docs/TP-ETUDIANTS.md`
- `frontend/.dockerignore`
- `frontend/Dockerfile`
- `frontend/nginx/default.conf`
- `frontend/src/app.js`
- `frontend/src/index.html`
- `frontend/src/style.css`
- `monitoring/prometheus.yml`
- `nginx/default.conf`

## Commentaires ligne par ligne

### `.dockerignore`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `.git` | Motif d exclusion pour Git ou Docker. |
| 2 | `.github` | Motif d exclusion pour Git ou Docker. |
| 3 | `node_modules` | Motif d exclusion pour Git ou Docker. |
| 4 | `coverage` | Motif d exclusion pour Git ou Docker. |
| 5 | `dist` | Motif d exclusion pour Git ou Docker. |
| 6 | `.env` | Motif d exclusion pour Git ou Docker. |
| 7 | `.env.*` | Motif d exclusion pour Git ou Docker. |
| 8 | `*.pem` | Motif d exclusion pour Git ou Docker. |
| 9 | `*.key` | Motif d exclusion pour Git ou Docker. |
| 10 | `docs` | Motif d exclusion pour Git ou Docker. |
| 11 | `README.md` | Motif d exclusion pour Git ou Docker. |
| 12 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.env`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `NODE_ENV=development` | Variable d environnement utilisee par Docker ou l application. |
| 2 | `API_PORT=3000` | Variable d environnement utilisee par Docker ou l application. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `POSTGRES_DB=trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 5 | `POSTGRES_USER=trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 6 | `POSTGRES_PASSWORD=trainshop_password` | Variable d environnement utilisee par Docker ou l application. |
| 7 | `DATABASE_URL=postgres://trainshop:trainshop_password@db:5432/trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 8 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 9 | `REDIS_URL=redis://redis:6379` | Variable d environnement utilisee par Docker ou l application. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 11 | `DOCKERHUB_USERNAME=your-dockerhub-username` | Variable d environnement utilisee par Docker ou l application. |
| 12 | `API_IMAGE=your-dockerhub-username/trainshop-api:latest` | Variable d environnement utilisee par Docker ou l application. |
| 13 | `FRONTEND_IMAGE=your-dockerhub-username/trainshop-frontend:latest` | Variable d environnement utilisee par Docker ou l application. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.env.example`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `NODE_ENV=development` | Variable d environnement utilisee par Docker ou l application. |
| 2 | `API_PORT=3000` | Variable d environnement utilisee par Docker ou l application. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `POSTGRES_DB=trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 5 | `POSTGRES_USER=trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 6 | `POSTGRES_PASSWORD=trainshop_password` | Variable d environnement utilisee par Docker ou l application. |
| 7 | `DATABASE_URL=postgres://trainshop:trainshop_password@db:5432/trainshop` | Variable d environnement utilisee par Docker ou l application. |
| 8 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 9 | `REDIS_URL=redis://redis:6379` | Variable d environnement utilisee par Docker ou l application. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 11 | `DOCKERHUB_USERNAME=your-dockerhub-username` | Variable d environnement utilisee par Docker ou l application. |
| 12 | `API_IMAGE=your-dockerhub-username/trainshop-api:latest` | Variable d environnement utilisee par Docker ou l application. |
| 13 | `FRONTEND_IMAGE=your-dockerhub-username/trainshop-frontend:latest` | Variable d environnement utilisee par Docker ou l application. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.github/workflows/ci.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `name: TrainShop CI` | Nom affiche du workflow ou de la configuration. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `on:` | Declencheurs du workflow GitHub Actions. |
| 4 | `  push:` | Ligne de configuration YAML. |
| 5 | `    branches: ["main", "develop"]` | Ligne de configuration YAML. |
| 6 | `  pull_request:` | Ligne de configuration YAML. |
| 7 | `    branches: ["main"]` | Ligne de configuration YAML. |
| 8 | `  workflow_dispatch:` | Ligne de configuration YAML. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 10 | `jobs:` | Liste des jobs executes par GitHub Actions. |
| 11 | `  api-quality:` | Ligne de configuration YAML. |
| 12 | `    name: API quality and tests` | Nom affiche du workflow ou de la configuration. |
| 13 | `    runs-on: ubuntu-latest` | Ligne de configuration YAML. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `    defaults:` | Ligne de configuration YAML. |
| 16 | `      run:` | Commande executee dans une etape de CI. |
| 17 | `        working-directory: api` | Ligne de configuration YAML. |
| 18 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 19 | `    steps:` | Ligne de configuration YAML. |
| 20 | `      - name: Checkout` | Ligne de configuration YAML. |
| 21 | `        uses: actions/checkout@v4` | Action GitHub Actions reutilisable. |
| 22 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 23 | `      - name: Setup Node.js` | Ligne de configuration YAML. |
| 24 | `        uses: actions/setup-node@v4` | Action GitHub Actions reutilisable. |
| 25 | `        with:` | Ligne de configuration YAML. |
| 26 | `          node-version: "20"` | Ligne de configuration YAML. |
| 27 | `          cache: npm` | Ligne de configuration YAML. |
| 28 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 29 | `      - name: Install dependencies` | Ligne de configuration YAML. |
| 30 | `        run: npm install` | Commande executee dans une etape de CI. |
| 31 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 32 | `      - name: Lint` | Ligne de configuration YAML. |
| 33 | `        run: npm run lint` | Commande executee dans une etape de CI. |
| 34 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 35 | `      - name: Run tests` | Ligne de configuration YAML. |
| 36 | `        run: npm test` | Commande executee dans une etape de CI. |
| 37 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 38 | `      - name: Build` | Ligne de configuration YAML. |
| 39 | `        run: npm run build` | Commande executee dans une etape de CI. |
| 40 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 41 | `  docker-build-check:` | Ligne de configuration YAML. |
| 42 | `    name: Docker build check` | Nom affiche du workflow ou de la configuration. |
| 43 | `    runs-on: ubuntu-latest` | Ligne de configuration YAML. |
| 44 | `    needs: api-quality` | Ligne de configuration YAML. |
| 45 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 46 | `    steps:` | Ligne de configuration YAML. |
| 47 | `      - name: Checkout` | Ligne de configuration YAML. |
| 48 | `        uses: actions/checkout@v4` | Action GitHub Actions reutilisable. |
| 49 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 50 | `      - name: Build API image` | Ligne de configuration YAML. |
| 51 | `        run: docker build -t trainshop-api:test ./api` | Commande executee dans une etape de CI. |
| 52 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 53 | `      - name: Build frontend image` | Ligne de configuration YAML. |
| 54 | `        run: docker build -t trainshop-frontend:test ./frontend` | Commande executee dans une etape de CI. |
| 55 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.github/workflows/deploy-ssh-example.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `name: Deploy SSH Example` | Nom affiche du workflow ou de la configuration. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `on:` | Declencheurs du workflow GitHub Actions. |
| 4 | `  workflow_dispatch:` | Ligne de configuration YAML. |
| 5 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 6 | `jobs:` | Liste des jobs executes par GitHub Actions. |
| 7 | `  deploy:` | Ligne de configuration YAML. |
| 8 | `    name: Deploy on remote Docker server` | Nom affiche du workflow ou de la configuration. |
| 9 | `    runs-on: ubuntu-latest` | Ligne de configuration YAML. |
| 10 | `    environment: production` | Ligne de configuration YAML. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `    steps:` | Ligne de configuration YAML. |
| 13 | `      - name: Deploy by SSH` | Ligne de configuration YAML. |
| 14 | `        uses: appleboy/ssh-action@v1.0.3` | Action GitHub Actions reutilisable. |
| 15 | `        with:` | Ligne de configuration YAML. |
| 16 | `          host: ${{ secrets.SSH_HOST }}` | Ligne de configuration YAML. |
| 17 | `          username: ${{ secrets.SSH_USER }}` | Ligne de configuration YAML. |
| 18 | `          key: ${{ secrets.SSH_PRIVATE_KEY }}` | Ligne de configuration YAML. |
| 19 | `          script: \|` | Ligne de configuration YAML. |
| 20 | `            cd /opt/trainshop` | Ligne de configuration YAML. |
| 21 | `            docker compose -f docker-compose.prod.yml --env-file .env pull` | Ligne de configuration YAML. |
| 22 | `            docker compose -f docker-compose.prod.yml --env-file .env up -d` | Ligne de configuration YAML. |
| 23 | `            docker compose ps` | Ligne de configuration YAML. |
| 24 | `            curl -f http://localhost/api/health` | Ligne de configuration YAML. |
| 25 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.github/workflows/docker-publish.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `name: Docker Publish` | Nom affiche du workflow ou de la configuration. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `on:` | Declencheurs du workflow GitHub Actions. |
| 4 | `  push:` | Ligne de configuration YAML. |
| 5 | `    branches: ["main"]` | Ligne de configuration YAML. |
| 6 | `  workflow_dispatch:` | Ligne de configuration YAML. |
| 7 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 8 | `env:` | Ligne de configuration YAML. |
| 9 | `  API_IMAGE_NAME: trainshop-api` | Ligne de configuration YAML. |
| 10 | `  FRONTEND_IMAGE_NAME: trainshop-frontend` | Ligne de configuration YAML. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `jobs:` | Liste des jobs executes par GitHub Actions. |
| 13 | `  docker-publish:` | Ligne de configuration YAML. |
| 14 | `    name: Build and push Docker images` | Nom affiche du workflow ou de la configuration. |
| 15 | `    runs-on: ubuntu-latest` | Ligne de configuration YAML. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 17 | `    permissions:` | Ligne de configuration YAML. |
| 18 | `      contents: read` | Ligne de configuration YAML. |
| 19 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 20 | `    steps:` | Ligne de configuration YAML. |
| 21 | `      - name: Checkout` | Ligne de configuration YAML. |
| 22 | `        uses: actions/checkout@v4` | Action GitHub Actions reutilisable. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `      - name: Setup Docker Buildx` | Ligne de configuration YAML. |
| 25 | `        uses: docker/setup-buildx-action@v3` | Action GitHub Actions reutilisable. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `      - name: Login Docker Hub` | Ligne de configuration YAML. |
| 28 | `        uses: docker/login-action@v3` | Action GitHub Actions reutilisable. |
| 29 | `        with:` | Ligne de configuration YAML. |
| 30 | `          username: ${{ secrets.DOCKERHUB_USERNAME }}` | Ligne de configuration YAML. |
| 31 | `          password: ${{ secrets.DOCKERHUB_TOKEN }}` | Ligne de configuration YAML. |
| 32 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 33 | `      - name: API metadata` | Ligne de configuration YAML. |
| 34 | `        id: api-meta` | Ligne de configuration YAML. |
| 35 | `        uses: docker/metadata-action@v5` | Action GitHub Actions reutilisable. |
| 36 | `        with:` | Ligne de configuration YAML. |
| 37 | `          images: ${{ secrets.DOCKERHUB_USERNAME }}/${{ env.API_IMAGE_NAME }}` | Ligne de configuration YAML. |
| 38 | `          tags: \|` | Ligne de configuration YAML. |
| 39 | `            type=raw,value=latest` | Ligne de configuration YAML. |
| 40 | `            type=sha,prefix=sha-` | Ligne de configuration YAML. |
| 41 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 42 | `      - name: Build and push API` | Ligne de configuration YAML. |
| 43 | `        uses: docker/build-push-action@v5` | Action GitHub Actions reutilisable. |
| 44 | `        with:` | Ligne de configuration YAML. |
| 45 | `          context: ./api` | Ligne de configuration YAML. |
| 46 | `          file: ./api/Dockerfile` | Ligne de configuration YAML. |
| 47 | `          push: true` | Ligne de configuration YAML. |
| 48 | `          tags: ${{ steps.api-meta.outputs.tags }}` | Ligne de configuration YAML. |
| 49 | `          labels: ${{ steps.api-meta.outputs.labels }}` | Ligne de configuration YAML. |
| 50 | `          cache-from: type=gha` | Ligne de configuration YAML. |
| 51 | `          cache-to: type=gha,mode=max` | Ligne de configuration YAML. |
| 52 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 53 | `      - name: Frontend metadata` | Ligne de configuration YAML. |
| 54 | `        id: frontend-meta` | Ligne de configuration YAML. |
| 55 | `        uses: docker/metadata-action@v5` | Action GitHub Actions reutilisable. |
| 56 | `        with:` | Ligne de configuration YAML. |
| 57 | `          images: ${{ secrets.DOCKERHUB_USERNAME }}/${{ env.FRONTEND_IMAGE_NAME }}` | Ligne de configuration YAML. |
| 58 | `          tags: \|` | Ligne de configuration YAML. |
| 59 | `            type=raw,value=latest` | Ligne de configuration YAML. |
| 60 | `            type=sha,prefix=sha-` | Ligne de configuration YAML. |
| 61 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 62 | `      - name: Build and push Frontend` | Ligne de configuration YAML. |
| 63 | `        uses: docker/build-push-action@v5` | Action GitHub Actions reutilisable. |
| 64 | `        with:` | Ligne de configuration YAML. |
| 65 | `          context: ./frontend` | Ligne de configuration YAML. |
| 66 | `          file: ./frontend/Dockerfile` | Ligne de configuration YAML. |
| 67 | `          push: true` | Ligne de configuration YAML. |
| 68 | `          tags: ${{ steps.frontend-meta.outputs.tags }}` | Ligne de configuration YAML. |
| 69 | `          labels: ${{ steps.frontend-meta.outputs.labels }}` | Ligne de configuration YAML. |
| 70 | `          cache-from: type=gha` | Ligne de configuration YAML. |
| 71 | `          cache-to: type=gha,mode=max` | Ligne de configuration YAML. |
| 72 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `.gitignore`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `node_modules` | Motif d exclusion pour Git ou Docker. |
| 2 | `dist` | Motif d exclusion pour Git ou Docker. |
| 3 | `coverage` | Motif d exclusion pour Git ou Docker. |
| 4 | `.env` | Motif d exclusion pour Git ou Docker. |
| 5 | `.env.*` | Motif d exclusion pour Git ou Docker. |
| 6 | `!.env.example` | Motif d exclusion pour Git ou Docker. |
| 7 | `*.log` | Motif d exclusion pour Git ou Docker. |
| 8 | `*.pem` | Motif d exclusion pour Git ou Docker. |
| 9 | `*.key` | Motif d exclusion pour Git ou Docker. |
| 10 | `secrets/` | Motif d exclusion pour Git ou Docker. |
| 11 | `.DS_Store` | Motif d exclusion pour Git ou Docker. |
| 12 | `.vscode` | Motif d exclusion pour Git ou Docker. |
| 13 | `.idea` | Motif d exclusion pour Git ou Docker. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `README.md`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `# TrainShop — Projet DevOps complet` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `Projet pédagogique complet avec :` | Texte de documentation destine aux etudiants ou au formateur. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `- API Node.js / Express` | Element de liste dans la documentation. |
| 6 | `- Frontend HTML/CSS/JS` | Element de liste dans la documentation. |
| 7 | `- PostgreSQL` | Element de liste dans la documentation. |
| 8 | `- Redis` | Element de liste dans la documentation. |
| 9 | `- Nginx reverse proxy` | Element de liste dans la documentation. |
| 10 | `- Dockerfile API` | Element de liste dans la documentation. |
| 11 | `- Dockerfile Frontend` | Element de liste dans la documentation. |
| 12 | `- docker-compose local` | Element de liste dans la documentation. |
| 13 | `- docker-compose production` | Element de liste dans la documentation. |
| 14 | `- GitHub Actions CI` | Element de liste dans la documentation. |
| 15 | `- GitHub Actions build + push Docker Hub` | Element de liste dans la documentation. |
| 16 | `- Exemple de déploiement SSH` | Element de liste dans la documentation. |
| 17 | `- Prometheus` | Element de liste dans la documentation. |
| 18 | `- Grafana` | Element de liste dans la documentation. |
| 19 | `- Healthchecks` | Element de liste dans la documentation. |
| 20 | `- Logs structurés` | Element de liste dans la documentation. |
| 21 | `- Documentation TP` | Element de liste dans la documentation. |
| 22 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 23 | `## Lancement local` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 24 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 25 | `\`\`\`bash` | Debut ou fin d un bloc de code dans la documentation. |
| 26 | `cp .env.example .env` | Texte de documentation destine aux etudiants ou au formateur. |
| 27 | `docker compose up -d --build` | Texte de documentation destine aux etudiants ou au formateur. |
| 28 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 29 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 30 | `## URLs` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 31 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 32 | `\`\`\`text` | Debut ou fin d un bloc de code dans la documentation. |
| 33 | `Frontend : http://localhost` | Texte de documentation destine aux etudiants ou au formateur. |
| 34 | `API health : http://localhost/api/health` | Texte de documentation destine aux etudiants ou au formateur. |
| 35 | `API products : http://localhost/api/products` | Texte de documentation destine aux etudiants ou au formateur. |
| 36 | `API metrics : http://localhost/api/metrics` | Texte de documentation destine aux etudiants ou au formateur. |
| 37 | `Prometheus : http://localhost:9090` | Texte de documentation destine aux etudiants ou au formateur. |
| 38 | `Grafana : http://localhost:3001` | Texte de documentation destine aux etudiants ou au formateur. |
| 39 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 40 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 41 | `Grafana :` | Texte de documentation destine aux etudiants ou au formateur. |
| 42 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 43 | `\`\`\`text` | Debut ou fin d un bloc de code dans la documentation. |
| 44 | `admin / admin` | Texte de documentation destine aux etudiants ou au formateur. |
| 45 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 46 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 47 | `## Commandes utiles` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 48 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 49 | `\`\`\`bash` | Debut ou fin d un bloc de code dans la documentation. |
| 50 | `docker compose ps` | Texte de documentation destine aux etudiants ou au formateur. |
| 51 | `docker compose logs -f api` | Texte de documentation destine aux etudiants ou au formateur. |
| 52 | `docker compose exec api sh` | Texte de documentation destine aux etudiants ou au formateur. |
| 53 | `docker compose down` | Texte de documentation destine aux etudiants ou au formateur. |
| 54 | `docker compose down -v` | Texte de documentation destine aux etudiants ou au formateur. |
| 55 | `docker system df` | Texte de documentation destine aux etudiants ou au formateur. |
| 56 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 57 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 58 | `## GitHub Actions` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 59 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 60 | `Workflows inclus :` | Texte de documentation destine aux etudiants ou au formateur. |
| 61 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 62 | `\`\`\`text` | Debut ou fin d un bloc de code dans la documentation. |
| 63 | `.github/workflows/ci.yml` | Texte de documentation destine aux etudiants ou au formateur. |
| 64 | `.github/workflows/docker-publish.yml` | Texte de documentation destine aux etudiants ou au formateur. |
| 65 | `.github/workflows/deploy-ssh-example.yml` | Texte de documentation destine aux etudiants ou au formateur. |
| 66 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 67 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 68 | `Secrets GitHub à créer pour Docker Hub :` | Texte de documentation destine aux etudiants ou au formateur. |
| 69 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 70 | `\`\`\`text` | Debut ou fin d un bloc de code dans la documentation. |
| 71 | `DOCKERHUB_USERNAME` | Texte de documentation destine aux etudiants ou au formateur. |
| 72 | `DOCKERHUB_TOKEN` | Texte de documentation destine aux etudiants ou au formateur. |
| 73 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 74 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 75 | `Secrets optionnels pour déploiement SSH :` | Texte de documentation destine aux etudiants ou au formateur. |
| 76 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 77 | `\`\`\`text` | Debut ou fin d un bloc de code dans la documentation. |
| 78 | `SSH_HOST` | Texte de documentation destine aux etudiants ou au formateur. |
| 79 | `SSH_USER` | Texte de documentation destine aux etudiants ou au formateur. |
| 80 | `SSH_PRIVATE_KEY` | Texte de documentation destine aux etudiants ou au formateur. |
| 81 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 82 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 83 | `## Production` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 84 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 85 | `Modifier \`.env\` :` | Texte de documentation destine aux etudiants ou au formateur. |
| 86 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 87 | `\`\`\`env` | Debut ou fin d un bloc de code dans la documentation. |
| 88 | `API_IMAGE=username/trainshop-api:1.0.0` | Texte de documentation destine aux etudiants ou au formateur. |
| 89 | `FRONTEND_IMAGE=username/trainshop-frontend:1.0.0` | Texte de documentation destine aux etudiants ou au formateur. |
| 90 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 91 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 92 | `Puis lancer :` | Texte de documentation destine aux etudiants ou au formateur. |
| 93 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 94 | `\`\`\`bash` | Debut ou fin d un bloc de code dans la documentation. |
| 95 | `docker compose -f docker-compose.prod.yml --env-file .env up -d` | Texte de documentation destine aux etudiants ou au formateur. |
| 96 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 97 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 98 | `## Rollback` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 99 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 100 | `Changer les tags dans \`.env\`, puis :` | Texte de documentation destine aux etudiants ou au formateur. |
| 101 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 102 | `\`\`\`bash` | Debut ou fin d un bloc de code dans la documentation. |
| 103 | `docker compose -f docker-compose.prod.yml --env-file .env pull` | Texte de documentation destine aux etudiants ou au formateur. |
| 104 | `docker compose -f docker-compose.prod.yml --env-file .env up -d` | Texte de documentation destine aux etudiants ou au formateur. |
| 105 | `docker compose logs -f api` | Texte de documentation destine aux etudiants ou au formateur. |
| 106 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 107 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/.dockerignore`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `node_modules` | Motif d exclusion pour Git ou Docker. |
| 2 | `npm-debug.log` | Motif d exclusion pour Git ou Docker. |
| 3 | `coverage` | Motif d exclusion pour Git ou Docker. |
| 4 | `.env` | Motif d exclusion pour Git ou Docker. |
| 5 | `.env.*` | Motif d exclusion pour Git ou Docker. |
| 6 | `.git` | Motif d exclusion pour Git ou Docker. |
| 7 | `.github` | Motif d exclusion pour Git ou Docker. |
| 8 | `tests` | Motif d exclusion pour Git ou Docker. |
| 9 | `README.md` | Motif d exclusion pour Git ou Docker. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/Dockerfile`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `FROM node:20-alpine AS deps` | Choisit l image de base utilisee pour construire le container. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `WORKDIR /app` | Definit le dossier de travail dans le container. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `COPY package*.json ./` | Copie des fichiers du projet dans l image Docker. |
| 6 | `RUN npm install --omit=dev` | Execute une commande pendant la construction de l image. |
| 7 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 8 | `FROM node:20-alpine AS runtime` | Choisit l image de base utilisee pour construire le container. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 10 | `WORKDIR /app` | Definit le dossier de travail dans le container. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `ENV NODE_ENV=production` | Instruction Dockerfile. |
| 13 | `ENV API_PORT=3000` | Instruction Dockerfile. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `RUN addgroup -S appgroup && adduser -S appuser -G appgroup` | Execute une commande pendant la construction de l image. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 17 | `COPY --from=deps /app/node_modules ./node_modules` | Copie des fichiers du projet dans l image Docker. |
| 18 | `COPY src ./src` | Copie des fichiers du projet dans l image Docker. |
| 19 | `COPY package*.json ./` | Copie des fichiers du projet dans l image Docker. |
| 20 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 21 | `RUN chown -R appuser:appgroup /app` | Execute une commande pendant la construction de l image. |
| 22 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 23 | `USER appuser` | Definit l utilisateur Linux utilise dans le container. |
| 24 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 25 | `EXPOSE 3000` | Documente le port utilise par le container. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \` | Instruction Dockerfile. |
| 28 | `  CMD wget -qO- http://localhost:3000/health \|\| exit 1` | Commande executee au demarrage du container. |
| 29 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 30 | `CMD ["node", "src/server.js"]` | Commande executee au demarrage du container. |
| 31 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/package.json`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `{` | Debut ou fin d un objet JSON. |
| 2 | `  "name": "trainshop-api",` | Propriete JSON de configuration du projet Node.js. |
| 3 | `  "version": "1.0.0",` | Propriete JSON de configuration du projet Node.js. |
| 4 | `  "description": "TrainShop API for DevOps training",` | Propriete JSON de configuration du projet Node.js. |
| 5 | `  "main": "src/server.js",` | Propriete JSON de configuration du projet Node.js. |
| 6 | `  "scripts": {` | Declare les commandes npm disponibles. |
| 7 | `    "start": "node src/server.js",` | Commande utilisee pour demarrer l application. |
| 8 | `    "dev": "node --watch src/server.js",` | Propriete JSON de configuration du projet Node.js. |
| 9 | `    "test": "jest --runInBand",` | Commande utilisee pour lancer les tests. |
| 10 | `    "lint": "echo \"Lint OK\"",` | Propriete JSON de configuration du projet Node.js. |
| 11 | `    "build": "echo \"Build OK\""` | Propriete JSON de configuration du projet Node.js. |
| 12 | `  },` | Propriete JSON de configuration du projet Node.js. |
| 13 | `  "dependencies": {` | Declare les dependances necessaires a l execution. |
| 14 | `    "cors": "^2.8.5",` | Propriete JSON de configuration du projet Node.js. |
| 15 | `    "dotenv": "^16.4.7",` | Propriete JSON de configuration du projet Node.js. |
| 16 | `    "express": "^4.21.2",` | Propriete JSON de configuration du projet Node.js. |
| 17 | `    "ioredis": "^5.4.2",` | Propriete JSON de configuration du projet Node.js. |
| 18 | `    "pg": "^8.13.1",` | Propriete JSON de configuration du projet Node.js. |
| 19 | `    "prom-client": "^15.1.3"` | Propriete JSON de configuration du projet Node.js. |
| 20 | `  },` | Propriete JSON de configuration du projet Node.js. |
| 21 | `  "devDependencies": {` | Declare les dependances de test ou de developpement. |
| 22 | `    "jest": "^29.7.0",` | Propriete JSON de configuration du projet Node.js. |
| 23 | `    "supertest": "^7.0.0"` | Propriete JSON de configuration du projet Node.js. |
| 24 | `  }` | Debut ou fin d un objet JSON. |
| 25 | `}` | Debut ou fin d un objet JSON. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/app.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const express = require('express');` | Importe un module JavaScript ou un fichier local. |
| 2 | `const cors = require('cors');` | Importe un module JavaScript ou un fichier local. |
| 3 | `const healthRoutes = require('./routes/health');` | Importe un module JavaScript ou un fichier local. |
| 4 | `const productRoutes = require('./routes/products');` | Importe un module JavaScript ou un fichier local. |
| 5 | `const orderRoutes = require('./routes/orders');` | Importe un module JavaScript ou un fichier local. |
| 6 | `const logger = require('./middleware/logger');` | Importe un module JavaScript ou un fichier local. |
| 7 | `const { client, metricsMiddleware } = require('./metrics');` | Importe un module JavaScript ou un fichier local. |
| 8 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 9 | `const app = express();` | Declare une constante utilisee par le fichier. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 11 | `app.use(cors());` | Ajoute un middleware Express a l application. |
| 12 | `app.use(express.json());` | Ajoute un middleware Express a l application. |
| 13 | `app.use(logger);` | Ajoute un middleware Express a l application. |
| 14 | `app.use(metricsMiddleware);` | Ajoute un middleware Express a l application. |
| 15 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 16 | `app.get('/', (req, res) =&gt; {` | Declare une route HTTP GET. |
| 17 | `  res.json({` | Ligne de code JavaScript participant a la logique applicative. |
| 18 | `    name: 'TrainShop API',` | Ligne de code JavaScript participant a la logique applicative. |
| 19 | `    version: '1.0.0',` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `    endpoints: ['/health', '/metrics', '/products', '/orders']` | Ligne de code JavaScript participant a la logique applicative. |
| 21 | `  });` | Ligne de code JavaScript participant a la logique applicative. |
| 22 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `app.use('/health', healthRoutes);` | Ajoute un middleware Express a l application. |
| 25 | `app.use('/products', productRoutes);` | Ajoute un middleware Express a l application. |
| 26 | `app.use('/orders', orderRoutes);` | Ajoute un middleware Express a l application. |
| 27 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 28 | `app.get('/metrics', async (req, res) =&gt; {` | Declare une route HTTP GET. |
| 29 | `  res.set('Content-Type', client.register.contentType);` | Ligne de code JavaScript participant a la logique applicative. |
| 30 | `  res.end(await client.register.metrics());` | Ligne de code JavaScript participant a la logique applicative. |
| 31 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 32 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 33 | `app.use((req, res) =&gt; {` | Ajoute un middleware Express a l application. |
| 34 | `  res.status(404).json({ error: 'Route not found' });` | Construit la reponse HTTP avec un statut precis. |
| 35 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 36 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 37 | `app.use((err, req, res, next) =&gt; {` | Ajoute un middleware Express a l application. |
| 38 | `  console.error(JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 39 | `    level: 'error',` | Ligne de code JavaScript participant a la logique applicative. |
| 40 | `    message: err.message,` | Ligne de code JavaScript participant a la logique applicative. |
| 41 | `    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack` | Ligne de code JavaScript participant a la logique applicative. |
| 42 | `  }));` | Ligne de code JavaScript participant a la logique applicative. |
| 43 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 44 | `  res.status(500).json({ error: 'Internal server error' });` | Construit la reponse HTTP avec un statut precis. |
| 45 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 46 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 47 | `module.exports = app;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 48 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/db/pool.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const { Pool } = require('pg');` | Importe un module JavaScript ou un fichier local. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `const pool = new Pool({` | Declare une constante utilisee par le fichier. |
| 4 | `  connectionString: process.env.DATABASE_URL \|\| 'postgres://trainshop:trainshop_password@localhost:5432/trainshop',` | Ligne de code JavaScript participant a la logique applicative. |
| 5 | `  max: 10,` | Ligne de code JavaScript participant a la logique applicative. |
| 6 | `  idleTimeoutMillis: 30000,` | Ligne de code JavaScript participant a la logique applicative. |
| 7 | `  connectionTimeoutMillis: 5000` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 10 | `module.exports = pool;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/db/redis.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const Redis = require('ioredis');` | Importe un module JavaScript ou un fichier local. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `let redis;` | Ligne de code JavaScript participant a la logique applicative. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `function getRedis() {` | Declare une fonction JavaScript. |
| 6 | `  if (!redis) {` | Ligne de code JavaScript participant a la logique applicative. |
| 7 | `    redis = new Redis(process.env.REDIS_URL \|\| 'redis://localhost:6379', {` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `      maxRetriesPerRequest: 2,` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `      lazyConnect: true` | Ligne de code JavaScript participant a la logique applicative. |
| 10 | `    });` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `  return redis;` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `module.exports = { getRedis };` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/metrics.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const client = require('prom-client');` | Importe un module JavaScript ou un fichier local. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `client.collectDefaultMetrics({ prefix: 'trainshop_api_' });` | Ligne de code JavaScript participant a la logique applicative. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `const httpRequestDuration = new client.Histogram({` | Declare une constante utilisee par le fichier. |
| 6 | `  name: 'trainshop_http_request_duration_seconds',` | Ligne de code JavaScript participant a la logique applicative. |
| 7 | `  help: 'HTTP request duration in seconds',` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `  labelNames: ['method', 'route', 'status'],` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5]` | Ligne de code JavaScript participant a la logique applicative. |
| 10 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `function metricsMiddleware(req, res, next) {` | Declare une fonction JavaScript. |
| 13 | `  const start = process.hrtime();` | Declare une constante utilisee par le fichier. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `  res.on('finish', () =&gt; {` | Ligne de code JavaScript participant a la logique applicative. |
| 16 | `    const diff = process.hrtime(start);` | Declare une constante utilisee par le fichier. |
| 17 | `    const duration = diff[0] + diff[1] / 1e9;` | Declare une constante utilisee par le fichier. |
| 18 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 19 | `    httpRequestDuration` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `      .labels(req.method, req.route?.path \|\| req.path, String(res.statusCode))` | Construit la reponse HTTP avec un statut precis. |
| 21 | `      .observe(duration);` | Ligne de code JavaScript participant a la logique applicative. |
| 22 | `  });` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `  next();` | Ligne de code JavaScript participant a la logique applicative. |
| 25 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `module.exports = { client, metricsMiddleware };` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 28 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/middleware/logger.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `function logger(req, res, next) {` | Declare une fonction JavaScript. |
| 2 | `  const start = Date.now();` | Declare une constante utilisee par le fichier. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `  res.on('finish', () =&gt; {` | Ligne de code JavaScript participant a la logique applicative. |
| 5 | `    console.log(JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 6 | `      level: res.statusCode &gt;= 500 ? 'error' : 'info',` | Construit la reponse HTTP avec un statut precis. |
| 7 | `      method: req.method,` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `      path: req.originalUrl,` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `      status: res.statusCode,` | Construit la reponse HTTP avec un statut precis. |
| 10 | `      durationMs: Date.now() - start,` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `      timestamp: new Date().toISOString()` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `    }));` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `  });` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `  next();` | Ligne de code JavaScript participant a la logique applicative. |
| 16 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 17 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 18 | `module.exports = logger;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 19 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/routes/health.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const express = require('express');` | Importe un module JavaScript ou un fichier local. |
| 2 | `const pool = require('../db/pool');` | Importe un module JavaScript ou un fichier local. |
| 3 | `const { getRedis } = require('../db/redis');` | Importe un module JavaScript ou un fichier local. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `const router = express.Router();` | Declare une constante utilisee par le fichier. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 7 | `router.get('/', async (req, res) =&gt; {` | Declare une route HTTP GET. |
| 8 | `  const checks = { api: 'ok', database: 'unknown', redis: 'unknown' };` | Declare une constante utilisee par le fichier. |
| 9 | `  let status = 200;` | Declare une variable modifiable. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 11 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `    await pool.query('SELECT 1');` | Execute une requete SQL vers PostgreSQL. |
| 13 | `    checks.database = 'ok';` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 15 | `    checks.database = 'error';` | Ligne de code JavaScript participant a la logique applicative. |
| 16 | `    status = 503;` | Ligne de code JavaScript participant a la logique applicative. |
| 17 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 18 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 19 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `    const redis = getRedis();` | Declare une constante utilisee par le fichier. |
| 21 | `    if (redis.status !== 'ready') await redis.connect();` | Ligne de code JavaScript participant a la logique applicative. |
| 22 | `    await redis.ping();` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `    checks.redis = 'ok';` | Ligne de code JavaScript participant a la logique applicative. |
| 24 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 25 | `    checks.redis = 'error';` | Ligne de code JavaScript participant a la logique applicative. |
| 26 | `    status = 503;` | Ligne de code JavaScript participant a la logique applicative. |
| 27 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 28 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 29 | `  res.status(status).json({` | Construit la reponse HTTP avec un statut precis. |
| 30 | `    status: status === 200 ? 'ok' : 'error',` | Ligne de code JavaScript participant a la logique applicative. |
| 31 | `    service: 'trainshop-api',` | Ligne de code JavaScript participant a la logique applicative. |
| 32 | `    checks,` | Ligne de code JavaScript participant a la logique applicative. |
| 33 | `    timestamp: new Date().toISOString()` | Ligne de code JavaScript participant a la logique applicative. |
| 34 | `  });` | Ligne de code JavaScript participant a la logique applicative. |
| 35 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 36 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 37 | `module.exports = router;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 38 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/routes/orders.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const express = require('express');` | Importe un module JavaScript ou un fichier local. |
| 2 | `const pool = require('../db/pool');` | Importe un module JavaScript ou un fichier local. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `const router = express.Router();` | Declare une constante utilisee par le fichier. |
| 5 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 6 | `router.get('/', async (req, res, next) =&gt; {` | Declare une route HTTP GET. |
| 7 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `    const result = await pool.query(\`` | Declare une constante utilisee par le fichier. |
| 9 | `      SELECT o.id, o.customer_name, o.status, o.created_at,` | Ligne de code JavaScript participant a la logique applicative. |
| 10 | `             COALESCE(SUM(oi.quantity * p.price_cents), 0) AS total_cents` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `      FROM orders o` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `      LEFT JOIN order_items oi ON oi.order_id = o.id` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `      LEFT JOIN products p ON p.id = oi.product_id` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `      GROUP BY o.id` | Ligne de code JavaScript participant a la logique applicative. |
| 15 | `      ORDER BY o.created_at DESC` | Ligne de code JavaScript participant a la logique applicative. |
| 16 | `    \`);` | Ligne de code JavaScript participant a la logique applicative. |
| 17 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 18 | `    res.json(result.rows);` | Ligne de code JavaScript participant a la logique applicative. |
| 19 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `    next(error);` | Ligne de code JavaScript participant a la logique applicative. |
| 21 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 22 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `router.post('/', async (req, res, next) =&gt; {` | Declare une route HTTP POST. |
| 25 | `  const client = await pool.connect();` | Declare une constante utilisee par le fichier. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 28 | `    const { customerName, items } = req.body;` | Declare une constante utilisee par le fichier. |
| 29 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 30 | `    if (!customerName \|\| !Array.isArray(items) \|\| items.length === 0) {` | Ligne de code JavaScript participant a la logique applicative. |
| 31 | `      return res.status(400).json({ error: 'customerName and items are required' });` | Construit la reponse HTTP avec un statut precis. |
| 32 | `    }` | Ligne de code JavaScript participant a la logique applicative. |
| 33 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 34 | `    await client.query('BEGIN');` | Ligne de code JavaScript participant a la logique applicative. |
| 35 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 36 | `    const orderResult = await client.query(` | Declare une constante utilisee par le fichier. |
| 37 | `      'INSERT INTO orders (customer_name, status) VALUES ($1, $2) RETURNING id, customer_name, status, created_at',` | Ligne de code JavaScript participant a la logique applicative. |
| 38 | `      [customerName, 'created']` | Ligne de code JavaScript participant a la logique applicative. |
| 39 | `    );` | Ligne de code JavaScript participant a la logique applicative. |
| 40 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 41 | `    const order = orderResult.rows[0];` | Declare une constante utilisee par le fichier. |
| 42 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 43 | `    for (const item of items) {` | Ligne de code JavaScript participant a la logique applicative. |
| 44 | `      await client.query(` | Ligne de code JavaScript participant a la logique applicative. |
| 45 | `        'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)',` | Ligne de code JavaScript participant a la logique applicative. |
| 46 | `        [order.id, item.productId, item.quantity]` | Ligne de code JavaScript participant a la logique applicative. |
| 47 | `      );` | Ligne de code JavaScript participant a la logique applicative. |
| 48 | `    }` | Ligne de code JavaScript participant a la logique applicative. |
| 49 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 50 | `    await client.query('COMMIT');` | Ligne de code JavaScript participant a la logique applicative. |
| 51 | `    res.status(201).json(order);` | Construit la reponse HTTP avec un statut precis. |
| 52 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 53 | `    await client.query('ROLLBACK');` | Ligne de code JavaScript participant a la logique applicative. |
| 54 | `    next(error);` | Ligne de code JavaScript participant a la logique applicative. |
| 55 | `  } finally {` | Ligne de code JavaScript participant a la logique applicative. |
| 56 | `    client.release();` | Ligne de code JavaScript participant a la logique applicative. |
| 57 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 58 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 59 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 60 | `module.exports = router;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 61 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/routes/products.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const express = require('express');` | Importe un module JavaScript ou un fichier local. |
| 2 | `const pool = require('../db/pool');` | Importe un module JavaScript ou un fichier local. |
| 3 | `const { getRedis } = require('../db/redis');` | Importe un module JavaScript ou un fichier local. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `const router = express.Router();` | Declare une constante utilisee par le fichier. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 7 | `router.get('/', async (req, res, next) =&gt; {` | Declare une route HTTP GET. |
| 8 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `    const redis = getRedis();` | Declare une constante utilisee par le fichier. |
| 10 | `    const cacheKey = 'products:list';` | Declare une constante utilisee par le fichier. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `    try {` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `      if (redis.status !== 'ready') await redis.connect();` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `      const cached = await redis.get(cacheKey);` | Declare une constante utilisee par le fichier. |
| 15 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 16 | `      if (cached) {` | Ligne de code JavaScript participant a la logique applicative. |
| 17 | `        return res.json({ source: 'cache', data: JSON.parse(cached) });` | Ligne de code JavaScript participant a la logique applicative. |
| 18 | `      }` | Ligne de code JavaScript participant a la logique applicative. |
| 19 | `    } catch (cacheError) {` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `      console.warn(JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 21 | `        level: 'warn',` | Ligne de code JavaScript participant a la logique applicative. |
| 22 | `        message: 'redis unavailable',` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `        error: cacheError.message` | Ligne de code JavaScript participant a la logique applicative. |
| 24 | `      }));` | Ligne de code JavaScript participant a la logique applicative. |
| 25 | `    }` | Ligne de code JavaScript participant a la logique applicative. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `    const result = await pool.query(` | Declare une constante utilisee par le fichier. |
| 28 | `      'SELECT id, name, description, price_cents, stock FROM products ORDER BY id ASC'` | Ligne de code JavaScript participant a la logique applicative. |
| 29 | `    );` | Ligne de code JavaScript participant a la logique applicative. |
| 30 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 31 | `    try {` | Ligne de code JavaScript participant a la logique applicative. |
| 32 | `      await redis.set(cacheKey, JSON.stringify(result.rows), 'EX', 30);` | Ligne de code JavaScript participant a la logique applicative. |
| 33 | `    } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 34 | `      console.warn(JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 35 | `        level: 'warn',` | Ligne de code JavaScript participant a la logique applicative. |
| 36 | `        message: 'redis set failed',` | Ligne de code JavaScript participant a la logique applicative. |
| 37 | `        error: error.message` | Ligne de code JavaScript participant a la logique applicative. |
| 38 | `      }));` | Ligne de code JavaScript participant a la logique applicative. |
| 39 | `    }` | Ligne de code JavaScript participant a la logique applicative. |
| 40 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 41 | `    res.json({ source: 'database', data: result.rows });` | Ligne de code JavaScript participant a la logique applicative. |
| 42 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 43 | `    next(error);` | Ligne de code JavaScript participant a la logique applicative. |
| 44 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 45 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 46 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 47 | `router.get('/:id', async (req, res, next) =&gt; {` | Declare une route HTTP GET. |
| 48 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 49 | `    const result = await pool.query(` | Declare une constante utilisee par le fichier. |
| 50 | `      'SELECT id, name, description, price_cents, stock FROM products WHERE id = $1',` | Ligne de code JavaScript participant a la logique applicative. |
| 51 | `      [req.params.id]` | Ligne de code JavaScript participant a la logique applicative. |
| 52 | `    );` | Ligne de code JavaScript participant a la logique applicative. |
| 53 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 54 | `    if (result.rowCount === 0) {` | Ligne de code JavaScript participant a la logique applicative. |
| 55 | `      return res.status(404).json({ error: 'Product not found' });` | Construit la reponse HTTP avec un statut precis. |
| 56 | `    }` | Ligne de code JavaScript participant a la logique applicative. |
| 57 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 58 | `    res.json(result.rows[0]);` | Ligne de code JavaScript participant a la logique applicative. |
| 59 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 60 | `    next(error);` | Ligne de code JavaScript participant a la logique applicative. |
| 61 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 62 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 63 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 64 | `module.exports = router;` | Exporte des fonctions ou objets pour les utiliser ailleurs. |
| 65 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/src/server.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `require('dotenv').config();` | Ligne de code JavaScript participant a la logique applicative. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `const app = require('./app');` | Importe un module JavaScript ou un fichier local. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `const port = Number(process.env.API_PORT \|\| process.env.PORT \|\| 3000);` | Declare une constante utilisee par le fichier. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 7 | `app.listen(port, '0.0.0.0', () =&gt; {` | Ligne de code JavaScript participant a la logique applicative. |
| 8 | `  console.log(JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `    level: 'info',` | Ligne de code JavaScript participant a la logique applicative. |
| 10 | `    message: \`TrainShop API started on port ${port}\`,` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `    port,` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `    timestamp: new Date().toISOString()` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `  }));` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 15 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `api/tests/health.test.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const request = require('supertest');` | Importe un module JavaScript ou un fichier local. |
| 2 | `const app = require('../src/app');` | Importe un module JavaScript ou un fichier local. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `jest.mock('../src/db/pool', () =&gt; ({` | Ligne de code JavaScript participant a la logique applicative. |
| 5 | `  query: jest.fn().mockResolvedValue({ rows: [{ ok: 1 }] })` | Ligne de code JavaScript participant a la logique applicative. |
| 6 | `}));` | Ligne de code JavaScript participant a la logique applicative. |
| 7 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 8 | `jest.mock('../src/db/redis', () =&gt; ({` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `  getRedis: () =&gt; ({` | Ligne de code JavaScript participant a la logique applicative. |
| 10 | `    status: 'ready',` | Ligne de code JavaScript participant a la logique applicative. |
| 11 | `    connect: jest.fn().mockResolvedValue(),` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `    ping: jest.fn().mockResolvedValue('PONG')` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `  })` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `}));` | Ligne de code JavaScript participant a la logique applicative. |
| 15 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 16 | `describe('Health endpoint', () =&gt; {` | Regroupe des tests automatises. |
| 17 | `  it('returns API health status', async () =&gt; {` | Ligne de code JavaScript participant a la logique applicative. |
| 18 | `    const response = await request(app).get('/health');` | Declare une constante utilisee par le fichier. |
| 19 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 20 | `    expect(response.status).toBe(200);` | Verifie le resultat attendu dans un test. |
| 21 | `    expect(response.body.status).toBe('ok');` | Verifie le resultat attendu dans un test. |
| 22 | `    expect(response.body.service).toBe('trainshop-api');` | Verifie le resultat attendu dans un test. |
| 23 | `  });` | Ligne de code JavaScript participant a la logique applicative. |
| 24 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 25 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `database/init/001-init.sql`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `CREATE TABLE IF NOT EXISTS products (` | Cree une table dans PostgreSQL. |
| 2 | `  id SERIAL PRIMARY KEY,` | Declare la cle primaire de la table. |
| 3 | `  name VARCHAR(150) NOT NULL,` | Instruction SQL pour initialiser la base de donnees. |
| 4 | `  description TEXT NOT NULL,` | Instruction SQL pour initialiser la base de donnees. |
| 5 | `  price_cents INTEGER NOT NULL,` | Instruction SQL pour initialiser la base de donnees. |
| 6 | `  stock INTEGER NOT NULL DEFAULT 0` | Instruction SQL pour initialiser la base de donnees. |
| 7 | `);` | Instruction SQL pour initialiser la base de donnees. |
| 8 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 9 | `CREATE TABLE IF NOT EXISTS orders (` | Cree une table dans PostgreSQL. |
| 10 | `  id SERIAL PRIMARY KEY,` | Declare la cle primaire de la table. |
| 11 | `  customer_name VARCHAR(150) NOT NULL,` | Instruction SQL pour initialiser la base de donnees. |
| 12 | `  status VARCHAR(50) NOT NULL DEFAULT 'created',` | Instruction SQL pour initialiser la base de donnees. |
| 13 | `  created_at TIMESTAMP NOT NULL DEFAULT NOW()` | Instruction SQL pour initialiser la base de donnees. |
| 14 | `);` | Instruction SQL pour initialiser la base de donnees. |
| 15 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 16 | `CREATE TABLE IF NOT EXISTS order_items (` | Cree une table dans PostgreSQL. |
| 17 | `  id SERIAL PRIMARY KEY,` | Declare la cle primaire de la table. |
| 18 | `  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,` | Declare une relation entre deux tables. |
| 19 | `  product_id INTEGER NOT NULL REFERENCES products(id),` | Declare une relation entre deux tables. |
| 20 | `  quantity INTEGER NOT NULL CHECK (quantity &gt; 0)` | Instruction SQL pour initialiser la base de donnees. |
| 21 | `);` | Instruction SQL pour initialiser la base de donnees. |
| 22 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 23 | `INSERT INTO products (name, description, price_cents, stock)` | Insere des donnees initiales dans la base. |
| 24 | `VALUES` | Instruction SQL pour initialiser la base de donnees. |
| 25 | `  ('Billet Lyon → Paris', 'Trajet direct en TGV pour formation DevOps.', 4500, 20),` | Instruction SQL pour initialiser la base de donnees. |
| 26 | `  ('Billet Lyon → Marseille', 'Trajet rapide pour workshop Docker.', 3900, 15),` | Instruction SQL pour initialiser la base de donnees. |
| 27 | `  ('Pass DevOps Week', 'Pass fictif pour une semaine de pratique DevOps.', 12900, 8),` | Instruction SQL pour initialiser la base de donnees. |
| 28 | `  ('Guide Docker', 'Support pédagogique pour apprendre Docker.', 1900, 50);` | Instruction SQL pour initialiser la base de donnees. |
| 29 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `docker-compose.prod.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `services:` | Liste des services Docker Compose. |
| 2 | `  proxy:` | Ligne de configuration YAML. |
| 3 | `    image: nginx:1.27-alpine` | Image Docker utilisee pour ce service. |
| 4 | `    container_name: trainshop_proxy` | Ligne de configuration YAML. |
| 5 | `    ports:` | Declare les ports exposes entre la machine et le container. |
| 6 | `      - "80:80"` | Ligne de configuration YAML. |
| 7 | `    volumes:` | Declaration des volumes persistants. |
| 8 | `      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro` | Ligne de configuration YAML. |
| 9 | `    depends_on:` | Declare les dependances de demarrage entre services. |
| 10 | `      api:` | Ligne de configuration YAML. |
| 11 | `        condition: service_healthy` | Ligne de configuration YAML. |
| 12 | `      frontend:` | Ligne de configuration YAML. |
| 13 | `        condition: service_started` | Ligne de configuration YAML. |
| 14 | `    networks:` | Declaration des reseaux Docker. |
| 15 | `      - frontend_net` | Ligne de configuration YAML. |
| 16 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 17 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 18 | `  frontend:` | Ligne de configuration YAML. |
| 19 | `    image: ${FRONTEND_IMAGE}` | Image Docker utilisee pour ce service. |
| 20 | `    container_name: trainshop_frontend` | Ligne de configuration YAML. |
| 21 | `    networks:` | Declaration des reseaux Docker. |
| 22 | `      - frontend_net` | Ligne de configuration YAML. |
| 23 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 24 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 25 | `  api:` | Ligne de configuration YAML. |
| 26 | `    image: ${API_IMAGE}` | Image Docker utilisee pour ce service. |
| 27 | `    container_name: trainshop_api` | Ligne de configuration YAML. |
| 28 | `    env_file:` | Ligne de configuration YAML. |
| 29 | `      - .env` | Ligne de configuration YAML. |
| 30 | `    environment:` | Ligne de configuration YAML. |
| 31 | `      API_PORT: 3000` | Ligne de configuration YAML. |
| 32 | `      DATABASE_URL: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}` | Ligne de configuration YAML. |
| 33 | `      REDIS_URL: redis://redis:6379` | Ligne de configuration YAML. |
| 34 | `    depends_on:` | Declare les dependances de demarrage entre services. |
| 35 | `      db:` | Ligne de configuration YAML. |
| 36 | `        condition: service_healthy` | Ligne de configuration YAML. |
| 37 | `      redis:` | Ligne de configuration YAML. |
| 38 | `        condition: service_started` | Ligne de configuration YAML. |
| 39 | `    healthcheck:` | Declare un test de sante du container. |
| 40 | `      test: ["CMD", "wget", "-qO-", "http://localhost:3000/health"]` | Ligne de configuration YAML. |
| 41 | `      interval: 30s` | Ligne de configuration YAML. |
| 42 | `      timeout: 5s` | Ligne de configuration YAML. |
| 43 | `      start_period: 20s` | Ligne de configuration YAML. |
| 44 | `      retries: 3` | Ligne de configuration YAML. |
| 45 | `    networks:` | Declaration des reseaux Docker. |
| 46 | `      - frontend_net` | Ligne de configuration YAML. |
| 47 | `      - backend_net` | Ligne de configuration YAML. |
| 48 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 49 | `    read_only: true` | Ligne de configuration YAML. |
| 50 | `    tmpfs:` | Ligne de configuration YAML. |
| 51 | `      - /tmp` | Ligne de configuration YAML. |
| 52 | `    cap_drop:` | Ligne de configuration YAML. |
| 53 | `      - ALL` | Ligne de configuration YAML. |
| 54 | `    security_opt:` | Ligne de configuration YAML. |
| 55 | `      - no-new-privileges:true` | Ligne de configuration YAML. |
| 56 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 57 | `  db:` | Ligne de configuration YAML. |
| 58 | `    image: postgres:16-alpine` | Image Docker utilisee pour ce service. |
| 59 | `    container_name: trainshop_db` | Ligne de configuration YAML. |
| 60 | `    env_file:` | Ligne de configuration YAML. |
| 61 | `      - .env` | Ligne de configuration YAML. |
| 62 | `    volumes:` | Declaration des volumes persistants. |
| 63 | `      - db_data:/var/lib/postgresql/data` | Ligne de configuration YAML. |
| 64 | `      - ./database/init:/docker-entrypoint-initdb.d:ro` | Ligne de configuration YAML. |
| 65 | `    healthcheck:` | Declare un test de sante du container. |
| 66 | `      test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}"]` | Ligne de configuration YAML. |
| 67 | `      interval: 10s` | Ligne de configuration YAML. |
| 68 | `      timeout: 5s` | Ligne de configuration YAML. |
| 69 | `      retries: 5` | Ligne de configuration YAML. |
| 70 | `    networks:` | Declaration des reseaux Docker. |
| 71 | `      - backend_net` | Ligne de configuration YAML. |
| 72 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 73 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 74 | `  redis:` | Ligne de configuration YAML. |
| 75 | `    image: redis:7-alpine` | Image Docker utilisee pour ce service. |
| 76 | `    container_name: trainshop_redis` | Ligne de configuration YAML. |
| 77 | `    command: redis-server --appendonly yes` | Ligne de configuration YAML. |
| 78 | `    volumes:` | Declaration des volumes persistants. |
| 79 | `      - redis_data:/data` | Ligne de configuration YAML. |
| 80 | `    networks:` | Declaration des reseaux Docker. |
| 81 | `      - backend_net` | Ligne de configuration YAML. |
| 82 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 83 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 84 | `volumes:` | Declaration des volumes persistants. |
| 85 | `  db_data:` | Ligne de configuration YAML. |
| 86 | `  redis_data:` | Ligne de configuration YAML. |
| 87 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 88 | `networks:` | Declaration des reseaux Docker. |
| 89 | `  frontend_net:` | Ligne de configuration YAML. |
| 90 | `  backend_net:` | Ligne de configuration YAML. |
| 91 | `    internal: true` | Ligne de configuration YAML. |
| 92 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `docker-compose.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `services:` | Liste des services Docker Compose. |
| 2 | `  proxy:` | Ligne de configuration YAML. |
| 3 | `    image: nginx:1.27-alpine` | Image Docker utilisee pour ce service. |
| 4 | `    container_name: trainshop_proxy` | Ligne de configuration YAML. |
| 5 | `    ports:` | Declare les ports exposes entre la machine et le container. |
| 6 | `      - "80:80"` | Ligne de configuration YAML. |
| 7 | `    volumes:` | Declaration des volumes persistants. |
| 8 | `      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro` | Ligne de configuration YAML. |
| 9 | `    depends_on:` | Declare les dependances de demarrage entre services. |
| 10 | `      api:` | Ligne de configuration YAML. |
| 11 | `        condition: service_healthy` | Ligne de configuration YAML. |
| 12 | `      frontend:` | Ligne de configuration YAML. |
| 13 | `        condition: service_started` | Ligne de configuration YAML. |
| 14 | `    networks:` | Declaration des reseaux Docker. |
| 15 | `      - frontend_net` | Ligne de configuration YAML. |
| 16 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 17 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 18 | `  frontend:` | Ligne de configuration YAML. |
| 19 | `    build:` | Indique que l image Docker est construite localement. |
| 20 | `      context: ./frontend` | Ligne de configuration YAML. |
| 21 | `      dockerfile: Dockerfile` | Ligne de configuration YAML. |
| 22 | `    container_name: trainshop_frontend` | Ligne de configuration YAML. |
| 23 | `    networks:` | Declaration des reseaux Docker. |
| 24 | `      - frontend_net` | Ligne de configuration YAML. |
| 25 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 27 | `  api:` | Ligne de configuration YAML. |
| 28 | `    build:` | Indique que l image Docker est construite localement. |
| 29 | `      context: ./api` | Ligne de configuration YAML. |
| 30 | `      dockerfile: Dockerfile` | Ligne de configuration YAML. |
| 31 | `    container_name: trainshop_api` | Ligne de configuration YAML. |
| 32 | `    env_file:` | Ligne de configuration YAML. |
| 33 | `      - .env` | Ligne de configuration YAML. |
| 34 | `    environment:` | Ligne de configuration YAML. |
| 35 | `      API_PORT: 3000` | Ligne de configuration YAML. |
| 36 | `      DATABASE_URL: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}` | Ligne de configuration YAML. |
| 37 | `      REDIS_URL: redis://redis:6379` | Ligne de configuration YAML. |
| 38 | `    depends_on:` | Declare les dependances de demarrage entre services. |
| 39 | `      db:` | Ligne de configuration YAML. |
| 40 | `        condition: service_healthy` | Ligne de configuration YAML. |
| 41 | `      redis:` | Ligne de configuration YAML. |
| 42 | `        condition: service_started` | Ligne de configuration YAML. |
| 43 | `    healthcheck:` | Declare un test de sante du container. |
| 44 | `      test: ["CMD", "wget", "-qO-", "http://127.0.0.1:3000/health"]` | Ligne de configuration YAML. |
| 45 | `      interval: 30s` | Ligne de configuration YAML. |
| 46 | `      timeout: 5s` | Ligne de configuration YAML. |
| 47 | `      start_period: 20s` | Ligne de configuration YAML. |
| 48 | `      retries: 3` | Ligne de configuration YAML. |
| 49 | `    networks:` | Declaration des reseaux Docker. |
| 50 | `      - frontend_net` | Ligne de configuration YAML. |
| 51 | `      - backend_net` | Ligne de configuration YAML. |
| 52 | `      - monitoring_net` | Ligne de configuration YAML. |
| 53 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 54 | `    logging:` | Ligne de configuration YAML. |
| 55 | `      driver: "json-file"` | Ligne de configuration YAML. |
| 56 | `      options:` | Ligne de configuration YAML. |
| 57 | `        max-size: "10m"` | Ligne de configuration YAML. |
| 58 | `        max-file: "3"` | Ligne de configuration YAML. |
| 59 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 60 | `  db:` | Ligne de configuration YAML. |
| 61 | `    image: postgres:16-alpine` | Image Docker utilisee pour ce service. |
| 62 | `    container_name: trainshop_db` | Ligne de configuration YAML. |
| 63 | `    env_file:` | Ligne de configuration YAML. |
| 64 | `      - .env` | Ligne de configuration YAML. |
| 65 | `    volumes:` | Declaration des volumes persistants. |
| 66 | `      - db_data:/var/lib/postgresql/data` | Ligne de configuration YAML. |
| 67 | `      - ./database/init:/docker-entrypoint-initdb.d:ro` | Ligne de configuration YAML. |
| 68 | `    healthcheck:` | Declare un test de sante du container. |
| 69 | `      test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}"]` | Ligne de configuration YAML. |
| 70 | `      interval: 10s` | Ligne de configuration YAML. |
| 71 | `      timeout: 5s` | Ligne de configuration YAML. |
| 72 | `      retries: 5` | Ligne de configuration YAML. |
| 73 | `    networks:` | Declaration des reseaux Docker. |
| 74 | `      - backend_net` | Ligne de configuration YAML. |
| 75 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 76 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 77 | `  redis:` | Ligne de configuration YAML. |
| 78 | `    image: redis:7-alpine` | Image Docker utilisee pour ce service. |
| 79 | `    container_name: trainshop_redis` | Ligne de configuration YAML. |
| 80 | `    command: redis-server --appendonly yes` | Ligne de configuration YAML. |
| 81 | `    volumes:` | Declaration des volumes persistants. |
| 82 | `      - redis_data:/data` | Ligne de configuration YAML. |
| 83 | `    networks:` | Declaration des reseaux Docker. |
| 84 | `      - backend_net` | Ligne de configuration YAML. |
| 85 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 86 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 87 | `  prometheus:` | Ligne de configuration YAML. |
| 88 | `    image: prom/prometheus:v2.54.1` | Image Docker utilisee pour ce service. |
| 89 | `    container_name: trainshop_prometheus` | Ligne de configuration YAML. |
| 90 | `    ports:` | Declare les ports exposes entre la machine et le container. |
| 91 | `      - "9090:9090"` | Ligne de configuration YAML. |
| 92 | `    volumes:` | Declaration des volumes persistants. |
| 93 | `      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml:ro` | Ligne de configuration YAML. |
| 94 | `      - prometheus_data:/prometheus` | Ligne de configuration YAML. |
| 95 | `    networks:` | Declaration des reseaux Docker. |
| 96 | `      - monitoring_net` | Ligne de configuration YAML. |
| 97 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 98 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 99 | `  grafana:` | Ligne de configuration YAML. |
| 100 | `    image: grafana/grafana:11.1.0` | Image Docker utilisee pour ce service. |
| 101 | `    container_name: trainshop_grafana` | Ligne de configuration YAML. |
| 102 | `    ports:` | Declare les ports exposes entre la machine et le container. |
| 103 | `      - "3001:3000"` | Ligne de configuration YAML. |
| 104 | `    environment:` | Ligne de configuration YAML. |
| 105 | `      GF_SECURITY_ADMIN_USER: admin` | Ligne de configuration YAML. |
| 106 | `      GF_SECURITY_ADMIN_PASSWORD: admin` | Ligne de configuration YAML. |
| 107 | `    volumes:` | Declaration des volumes persistants. |
| 108 | `      - grafana_data:/var/lib/grafana` | Ligne de configuration YAML. |
| 109 | `    networks:` | Declaration des reseaux Docker. |
| 110 | `      - monitoring_net` | Ligne de configuration YAML. |
| 111 | `    restart: unless-stopped` | Ligne de configuration YAML. |
| 112 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 113 | `volumes:` | Declaration des volumes persistants. |
| 114 | `  db_data:` | Ligne de configuration YAML. |
| 115 | `  redis_data:` | Ligne de configuration YAML. |
| 116 | `  prometheus_data:` | Ligne de configuration YAML. |
| 117 | `  grafana_data:` | Ligne de configuration YAML. |
| 118 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 119 | `networks:` | Declaration des reseaux Docker. |
| 120 | `  frontend_net:` | Ligne de configuration YAML. |
| 121 | `  backend_net:` | Ligne de configuration YAML. |
| 122 | `    internal: true` | Ligne de configuration YAML. |
| 123 | `  monitoring_net:` | Ligne de configuration YAML. |
| 124 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `docs/CORRECTION-FORMATEUR.md`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `# Correction formateur — TrainShop` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `## Réponses attendues` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `1. Le service \`proxy\` expose le port 80.` | Texte de documentation destine aux etudiants ou au formateur. |
| 6 | `2. PostgreSQL reste sur le réseau backend interne pour des raisons de sécurité.` | Texte de documentation destine aux etudiants ou au formateur. |
| 7 | `3. Redis sert de cache simple pour la liste des produits.` | Texte de documentation destine aux etudiants ou au formateur. |
| 8 | `4. Prometheus collecte les métriques exposées par \`/metrics\`.` | Texte de documentation destine aux etudiants ou au formateur. |
| 9 | `5. \`ci.yml\` lance tests, lint, build et build Docker local.` | Texte de documentation destine aux etudiants ou au formateur. |
| 10 | `6. \`docker-publish.yml\` publie les images API et frontend vers Docker Hub.` | Texte de documentation destine aux etudiants ou au formateur. |
| 11 | `7. Un rollback consiste à remettre un ancien tag d'image dans \`.env\`, puis relancer Compose.` | Texte de documentation destine aux etudiants ou au formateur. |
| 12 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 13 | `## Grille sur 20` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 14 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 15 | `\| Critère \| Points \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 16 | `\|---\|---:\|` | Texte de documentation destine aux etudiants ou au formateur. |
| 17 | `\| Lancement local \| 3 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 18 | `\| Compréhension architecture \| 3 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 19 | `\| Dockerfile \| 3 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 20 | `\| docker-compose \| 4 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 21 | `\| GitHub Actions \| 4 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 22 | `\| Sécurité \| 1 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 23 | `\| Monitoring \| 1 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 24 | `\| Documentation orale \| 1 \|` | Texte de documentation destine aux etudiants ou au formateur. |
| 25 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `docs/TP-ETUDIANTS.md`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `# TP Étudiants — TrainShop DevOps` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `## Objectif` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `Lancer et comprendre une application complète avec Docker et GitHub Actions.` | Texte de documentation destine aux etudiants ou au formateur. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 7 | `## Étapes` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 8 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 9 | `\`\`\`bash` | Debut ou fin d un bloc de code dans la documentation. |
| 10 | `cp .env.example .env` | Texte de documentation destine aux etudiants ou au formateur. |
| 11 | `docker compose up -d --build` | Texte de documentation destine aux etudiants ou au formateur. |
| 12 | `docker compose ps` | Texte de documentation destine aux etudiants ou au formateur. |
| 13 | `curl http://localhost/api/health` | Texte de documentation destine aux etudiants ou au formateur. |
| 14 | `curl http://localhost/api/products` | Texte de documentation destine aux etudiants ou au formateur. |
| 15 | `\`\`\`` | Debut ou fin d un bloc de code dans la documentation. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 17 | `## Questions` | Commentaire, titre Markdown ou directive selon le type de fichier. |
| 18 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 19 | `1. Quel service expose le port 80 ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 20 | `2. Pourquoi PostgreSQL n'est pas exposé publiquement ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 21 | `3. À quoi sert Redis ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 22 | `4. À quoi sert Prometheus ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 23 | `5. À quoi sert le workflow \`ci.yml\` ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 24 | `6. À quoi sert le workflow \`docker-publish.yml\` ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 25 | `7. Comment faire un rollback ?` | Texte de documentation destine aux etudiants ou au formateur. |
| 26 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/.dockerignore`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `node_modules` | Motif d exclusion pour Git ou Docker. |
| 2 | `dist` | Motif d exclusion pour Git ou Docker. |
| 3 | `.env` | Motif d exclusion pour Git ou Docker. |
| 4 | `.git` | Motif d exclusion pour Git ou Docker. |
| 5 | `.github` | Motif d exclusion pour Git ou Docker. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/Dockerfile`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `FROM nginx:1.27-alpine` | Choisit l image de base utilisee pour construire le container. |
| 2 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 3 | `COPY src/ /usr/share/nginx/html/` | Copie des fichiers du projet dans l image Docker. |
| 4 | `COPY nginx/default.conf /etc/nginx/conf.d/default.conf` | Copie des fichiers du projet dans l image Docker. |
| 5 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 6 | `EXPOSE 80` | Documente le port utilise par le container. |
| 7 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 8 | `CMD ["nginx", "-g", "daemon off;"]` | Commande executee au demarrage du container. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/nginx/default.conf`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `server {` | Declare un bloc serveur Nginx ou une cible reseau. |
| 2 | `    listen 80;` | Declare le port ecoute par Nginx. |
| 3 | `    root /usr/share/nginx/html;` | Ligne de configuration serveur. |
| 4 | `    index index.html;` | Ligne de configuration serveur. |
| 5 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 6 | `    location / {` | Declare une regle de routage Nginx. |
| 7 | `        try_files $uri $uri/ /index.html;` | Ligne de configuration serveur. |
| 8 | `    }` | Ligne de configuration serveur. |
| 9 | `}` | Ligne de configuration serveur. |
| 10 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/src/app.js`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `const healthElement = document.querySelector('#health');` | Declare une constante utilisee par le fichier. |
| 2 | `const productsElement = document.querySelector('#products');` | Declare une constante utilisee par le fichier. |
| 3 | `const reloadButton = document.querySelector('#reload');` | Declare une constante utilisee par le fichier. |
| 4 | `const orderButton = document.querySelector('#create-order');` | Declare une constante utilisee par le fichier. |
| 5 | `const orderResult = document.querySelector('#order-result');` | Declare une constante utilisee par le fichier. |
| 6 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 7 | `async function loadHealth() {` | Declare une fonction asynchrone. |
| 8 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 9 | `    const response = await fetch('/api/health');` | Declare une constante utilisee par le fichier. |
| 10 | `    const data = await response.json();` | Declare une constante utilisee par le fichier. |
| 11 | `    healthElement.textContent = JSON.stringify(data, null, 2);` | Ligne de code JavaScript participant a la logique applicative. |
| 12 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 13 | `    healthElement.textContent = \`Erreur API: ${error.message}\`;` | Ligne de code JavaScript participant a la logique applicative. |
| 14 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 15 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 17 | `function formatPrice(cents) {` | Declare une fonction JavaScript. |
| 18 | `  return \`${(cents / 100).toFixed(2)} €\`;` | Ligne de code JavaScript participant a la logique applicative. |
| 19 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 20 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 21 | `async function loadProducts() {` | Declare une fonction asynchrone. |
| 22 | `  productsElement.innerHTML = '&lt;p&gt;Chargement...&lt;/p&gt;';` | Ligne de code JavaScript participant a la logique applicative. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 25 | `    const response = await fetch('/api/products');` | Declare une constante utilisee par le fichier. |
| 26 | `    const payload = await response.json();` | Declare une constante utilisee par le fichier. |
| 27 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 28 | `    productsElement.innerHTML = payload.data.map(product =&gt; \`` | Ligne de code JavaScript participant a la logique applicative. |
| 29 | `      &lt;article class="product"&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 30 | `        &lt;h3&gt;${product.name}&lt;/h3&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 31 | `        &lt;p&gt;${product.description}&lt;/p&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 32 | `        &lt;p class="price"&gt;${formatPrice(product.price_cents)}&lt;/p&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 33 | `        &lt;p&gt;Stock : ${product.stock}&lt;/p&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 34 | `      &lt;/article&gt;` | Ligne de code JavaScript participant a la logique applicative. |
| 35 | `    \`).join('');` | Ligne de code JavaScript participant a la logique applicative. |
| 36 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 37 | `    productsElement.innerHTML = \`&lt;p&gt;Erreur: ${error.message}&lt;/p&gt;\`;` | Ligne de code JavaScript participant a la logique applicative. |
| 38 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 39 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 40 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 41 | `async function createOrder() {` | Declare une fonction asynchrone. |
| 42 | `  try {` | Ligne de code JavaScript participant a la logique applicative. |
| 43 | `    const response = await fetch('/api/orders', {` | Declare une constante utilisee par le fichier. |
| 44 | `      method: 'POST',` | Ligne de code JavaScript participant a la logique applicative. |
| 45 | `      headers: { 'Content-Type': 'application/json' },` | Ligne de code JavaScript participant a la logique applicative. |
| 46 | `      body: JSON.stringify({` | Ligne de code JavaScript participant a la logique applicative. |
| 47 | `        customerName: 'Client DevOps',` | Ligne de code JavaScript participant a la logique applicative. |
| 48 | `        items: [` | Ligne de code JavaScript participant a la logique applicative. |
| 49 | `          { productId: 1, quantity: 1 },` | Ligne de code JavaScript participant a la logique applicative. |
| 50 | `          { productId: 2, quantity: 2 }` | Ligne de code JavaScript participant a la logique applicative. |
| 51 | `        ]` | Ligne de code JavaScript participant a la logique applicative. |
| 52 | `      })` | Ligne de code JavaScript participant a la logique applicative. |
| 53 | `    });` | Ligne de code JavaScript participant a la logique applicative. |
| 54 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 55 | `    const data = await response.json();` | Declare une constante utilisee par le fichier. |
| 56 | `    orderResult.textContent = JSON.stringify(data, null, 2);` | Ligne de code JavaScript participant a la logique applicative. |
| 57 | `  } catch (error) {` | Ligne de code JavaScript participant a la logique applicative. |
| 58 | `    orderResult.textContent = \`Erreur: ${error.message}\`;` | Ligne de code JavaScript participant a la logique applicative. |
| 59 | `  }` | Ligne de code JavaScript participant a la logique applicative. |
| 60 | `}` | Ligne de code JavaScript participant a la logique applicative. |
| 61 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 62 | `reloadButton.addEventListener('click', () =&gt; {` | Ajoute une reaction a une action utilisateur ou au chargement. |
| 63 | `  loadHealth();` | Ligne de code JavaScript participant a la logique applicative. |
| 64 | `  loadProducts();` | Ligne de code JavaScript participant a la logique applicative. |
| 65 | `});` | Ligne de code JavaScript participant a la logique applicative. |
| 66 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 67 | `orderButton.addEventListener('click', createOrder);` | Ajoute une reaction a une action utilisateur ou au chargement. |
| 68 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 69 | `loadHealth();` | Ligne de code JavaScript participant a la logique applicative. |
| 70 | `loadProducts();` | Ligne de code JavaScript participant a la logique applicative. |
| 71 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/src/index.html`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `&lt;!DOCTYPE html&gt;` | Indique au navigateur que le document est en HTML moderne. |
| 2 | `&lt;html lang="fr"&gt;` | Debut du document HTML et indication de la langue. |
| 3 | `&lt;head&gt;` | Debut des metadonnees de la page. |
| 4 | `  &lt;meta charset="UTF-8" /&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 5 | `  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 6 | `  &lt;title&gt;TrainShop&lt;/title&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 7 | `  &lt;link rel="stylesheet" href="/style.css" /&gt;` | Charge une ressource externe comme une feuille CSS. |
| 8 | `&lt;/head&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 9 | `&lt;body&gt;` | Debut du contenu visible. |
| 10 | `  &lt;header class="hero"&gt;` | Debut des metadonnees de la page. |
| 11 | `    &lt;p class="badge"&gt;Projet DevOps B3&lt;/p&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 12 | `    &lt;h1&gt;TrainShop&lt;/h1&gt;` | Titre affiche dans l interface. |
| 13 | `    &lt;p&gt;Projet complet avec Docker, GitHub Actions, PostgreSQL, Redis, Nginx et monitoring.&lt;/p&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 14 | `    &lt;button id="reload"&gt;Recharger&lt;/button&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 15 | `  &lt;/header&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 16 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 17 | `  &lt;main&gt;` | Structure une zone visuelle de la page. |
| 18 | `    &lt;section class="card"&gt;` | Structure une zone visuelle de la page. |
| 19 | `      &lt;h2&gt;État API&lt;/h2&gt;` | Titre affiche dans l interface. |
| 20 | `      &lt;pre id="health"&gt;Chargement...&lt;/pre&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 21 | `    &lt;/section&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 22 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 23 | `    &lt;section&gt;` | Structure une zone visuelle de la page. |
| 24 | `      &lt;h2&gt;Produits&lt;/h2&gt;` | Titre affiche dans l interface. |
| 25 | `      &lt;div id="products" class="grid"&gt;&lt;/div&gt;` | Structure une zone visuelle de la page. |
| 26 | `    &lt;/section&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 27 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 28 | `    &lt;section class="card"&gt;` | Structure une zone visuelle de la page. |
| 29 | `      &lt;h2&gt;Créer une commande de test&lt;/h2&gt;` | Titre affiche dans l interface. |
| 30 | `      &lt;button id="create-order"&gt;Créer une commande&lt;/button&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 31 | `      &lt;pre id="order-result"&gt;&lt;/pre&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 32 | `    &lt;/section&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 33 | `  &lt;/main&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 34 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 35 | `  &lt;footer&gt;TrainShop — Support pédagogique DevOps&lt;/footer&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 36 | `  &lt;script src="/app.js"&gt;&lt;/script&gt;` | Charge un fichier JavaScript. |
| 37 | `&lt;/body&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 38 | `&lt;/html&gt;` | Ligne HTML utilisee pour structurer l interface. |
| 39 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `frontend/src/style.css`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `:root {` | Declare des variables CSS globales. |
| 2 | `  --blue: #0db7ed;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 3 | `  --dark: #071827;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 4 | `  --card: #102a3f;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 5 | `  --text: #edf7ff;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 6 | `  --muted: #a9c2d6;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 7 | `  --green: #38c172;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 8 | `}` | Ligne CSS liee au style visuel. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 10 | `* { box-sizing: border-box; }` | Commentaire CSS ou JavaScript. |
| 11 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 12 | `body {` | Debut d une regle CSS ciblant des elements. |
| 13 | `  margin: 0;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 14 | `  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 15 | `  background: linear-gradient(135deg, var(--dark), #02070d);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 16 | `  color: var(--text);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 17 | `}` | Ligne CSS liee au style visuel. |
| 18 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 19 | `.hero {` | Debut d une regle CSS ciblant des elements. |
| 20 | `  padding: 56px 32px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 21 | `  background: linear-gradient(90deg, #075985, var(--blue));` | Propriete CSS qui definit l apparence ou la mise en page. |
| 22 | `}` | Ligne CSS liee au style visuel. |
| 23 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 24 | `.hero h1 {` | Ligne CSS liee au style visuel. |
| 25 | `  font-size: 48px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 26 | `  margin: 8px 0;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 27 | `}` | Ligne CSS liee au style visuel. |
| 28 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 29 | `.badge {` | Debut d une regle CSS ciblant des elements. |
| 30 | `  display: inline-block;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 31 | `  padding: 6px 12px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 32 | `  border: 1px solid rgba(255,255,255,.4);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 33 | `  border-radius: 999px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 34 | `}` | Ligne CSS liee au style visuel. |
| 35 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 36 | `main {` | Debut d une regle CSS ciblant des elements. |
| 37 | `  max-width: 1100px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 38 | `  margin: 0 auto;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 39 | `  padding: 32px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 40 | `}` | Ligne CSS liee au style visuel. |
| 41 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 42 | `button {` | Debut d une regle CSS ciblant des elements. |
| 43 | `  background: var(--blue);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 44 | `  color: white;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 45 | `  border: none;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 46 | `  padding: 11px 16px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 47 | `  border-radius: 10px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 48 | `  cursor: pointer;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 49 | `  font-weight: 700;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 50 | `}` | Ligne CSS liee au style visuel. |
| 51 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 52 | `.grid {` | Debut d une regle CSS ciblant des elements. |
| 53 | `  display: grid;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 54 | `  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));` | Propriete CSS qui definit l apparence ou la mise en page. |
| 55 | `  gap: 18px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 56 | `}` | Ligne CSS liee au style visuel. |
| 57 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 58 | `.product,` | Ligne CSS liee au style visuel. |
| 59 | `.card {` | Debut d une regle CSS ciblant des elements. |
| 60 | `  background: var(--card);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 61 | `  border: 1px solid rgba(255,255,255,.12);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 62 | `  border-radius: 16px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 63 | `  padding: 18px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 64 | `  box-shadow: 0 14px 35px rgba(0,0,0,.18);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 65 | `  margin-bottom: 24px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 66 | `}` | Ligne CSS liee au style visuel. |
| 67 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 68 | `.product h3 { color: var(--blue); }` | Propriete CSS qui definit l apparence ou la mise en page. |
| 69 | `.price { color: var(--green); font-weight: 800; }` | Debut d une regle CSS ciblant des elements. |
| 70 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 71 | `pre {` | Debut d une regle CSS ciblant des elements. |
| 72 | `  background: #03101b;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 73 | `  padding: 14px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 74 | `  border-radius: 10px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 75 | `  overflow: auto;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 76 | `  color: var(--muted);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 77 | `}` | Ligne CSS liee au style visuel. |
| 78 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 79 | `footer {` | Debut d une regle CSS ciblant des elements. |
| 80 | `  padding: 24px;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 81 | `  text-align: center;` | Propriete CSS qui definit l apparence ou la mise en page. |
| 82 | `  color: var(--muted);` | Propriete CSS qui definit l apparence ou la mise en page. |
| 83 | `}` | Ligne CSS liee au style visuel. |
| 84 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `monitoring/prometheus.yml`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `global:` | Ligne de configuration YAML. |
| 2 | `  scrape_interval: 15s` | Ligne de configuration YAML. |
| 3 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 4 | `scrape_configs:` | Ligne de configuration YAML. |
| 5 | `  - job_name: "trainshop-api"` | Ligne de configuration YAML. |
| 6 | `    metrics_path: /metrics` | Ligne de configuration YAML. |
| 7 | `    static_configs:` | Ligne de configuration YAML. |
| 8 | `      - targets: ["api:3000"]` | Ligne de configuration YAML. |
| 9 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 10 | `  - job_name: "prometheus"` | Ligne de configuration YAML. |
| 11 | `    static_configs:` | Ligne de configuration YAML. |
| 12 | `      - targets: ["prometheus:9090"]` | Ligne de configuration YAML. |
| 13 | `` | Ligne vide utilisee pour separer visuellement les blocs. |

### `nginx/default.conf`

| Ligne | Code | Commentaire |
|---:|---|---|
| 1 | `server {` | Declare un bloc serveur Nginx ou une cible reseau. |
| 2 | `    listen 80;` | Declare le port ecoute par Nginx. |
| 3 | `    server_name _;` | Declare un bloc serveur Nginx ou une cible reseau. |
| 4 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 5 | `    location /api/ {` | Declare une regle de routage Nginx. |
| 6 | `        proxy_pass http://api:3000/;` | Transmet les requetes vers un autre service. |
| 7 | `        proxy_http_version 1.1;` | Ligne de configuration serveur. |
| 8 | `        proxy_set_header Host $host;` | Ligne de configuration serveur. |
| 9 | `        proxy_set_header X-Real-IP $remote_addr;` | Ligne de configuration serveur. |
| 10 | `        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;` | Ligne de configuration serveur. |
| 11 | `        proxy_set_header X-Forwarded-Proto $scheme;` | Ligne de configuration serveur. |
| 12 | `    }` | Ligne de configuration serveur. |
| 13 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
| 14 | `    location / {` | Declare une regle de routage Nginx. |
| 15 | `        proxy_pass http://frontend:80;` | Transmet les requetes vers un autre service. |
| 16 | `        proxy_http_version 1.1;` | Ligne de configuration serveur. |
| 17 | `        proxy_set_header Host $host;` | Ligne de configuration serveur. |
| 18 | `    }` | Ligne de configuration serveur. |
| 19 | `}` | Ligne de configuration serveur. |
| 20 | `` | Ligne vide utilisee pour separer visuellement les blocs. |
