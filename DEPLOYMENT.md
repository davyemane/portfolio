# Guide de Déploiement sur VPS avec Docker et Nginx

## Prérequis sur le VPS

- Docker et Docker Compose installés
- Nginx installé
- Un nom de domaine pointant vers votre VPS
- Accès SSH au VPS

## Étape 1: Transférer le projet sur le VPS

```bash
# Sur votre machine locale
rsync -avz --exclude 'node_modules' --exclude '.git' \
  /home/davy/davy-emane-portfolio/ user@votre-vps:/home/user/portfolio/
```

Ou utilisez git pour cloner le projet directement sur le VPS.

## Étape 2: Construire et démarrer le container Docker

```bash
# Se connecter au VPS
ssh user@votre-vps

# Aller dans le dossier du projet
cd /home/user/portfolio

# Construire et démarrer le container
docker compose up -d --build

# Vérifier que le container tourne
docker ps
docker logs davyemane-portfolio
```

## Étape 3: Configurer Nginx sur le VPS

### 3.1 Copier le fichier de configuration

```bash
# Copier la configuration nginx
sudo cp nginx-vps.conf /etc/nginx/sites-available/portfolio

# Éditer le fichier pour remplacer "votre-domaine.com" par votre vrai domaine
sudo nano /etc/nginx/sites-available/portfolio
# Remplacez toutes les occurrences de "votre-domaine.com" par votre domaine réel
```

### 3.2 Activer le site

```bash
# Créer le lien symbolique
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Tester la configuration nginx
sudo nginx -t

# Si le test est OK, recharger nginx
sudo systemctl reload nginx
```

## Étape 4: Configurer SSL avec Let's Encrypt (Recommandé)

```bash
# Installer certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtenir le certificat SSL (remplacez votre-domaine.com)
sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com

# Certbot va automatiquement configurer nginx pour HTTPS
# Vous pouvez aussi décommenter la section HTTPS dans nginx-vps.conf
```

## Étape 5: Vérifier le déploiement

Ouvrez votre navigateur et accédez à:
- http://votre-domaine.com (sera redirigé vers HTTPS si SSL est configuré)
- https://votre-domaine.com

## Commandes utiles

### Gestion du container Docker

```bash
# Voir les logs
docker logs davyemane-portfolio

# Logs en temps réel
docker logs -f davyemane-portfolio

# Redémarrer le container
docker compose restart

# Arrêter le container
docker compose down

# Reconstruire après des changements
docker compose up -d --build --force-recreate
```

### Gestion de Nginx

```bash
# Tester la configuration
sudo nginx -t

# Recharger nginx
sudo systemctl reload nginx

# Redémarrer nginx
sudo systemctl restart nginx

# Voir les logs nginx
sudo tail -f /var/log/nginx/portfolio-access.log
sudo tail -f /var/log/nginx/portfolio-error.log
```

### Mises à jour

```bash
# 1. Pull les derniers changements (si vous utilisez git)
git pull origin main

# 2. Reconstruire et redémarrer le container
docker compose up -d --build --force-recreate

# 3. Nettoyer les anciennes images (optionnel)
docker image prune -f
```

## Renouvellement automatique du certificat SSL

Certbot configure automatiquement un cron job pour renouveler le certificat.
Vous pouvez vérifier avec:

```bash
# Vérifier le timer de renouvellement
sudo systemctl status certbot.timer

# Tester le renouvellement (dry-run)
sudo certbot renew --dry-run
```

## Sécurité

- Le container est exposé uniquement sur localhost (127.0.0.1:3000)
- Nginx sur le VPS fait le reverse proxy et gère SSL
- Les limites de ressources sont configurées dans docker-compose.yml
- Les logs sont automatiquement rotationnés

## Monitoring

### Vérifier l'état du container

```bash
# Healthcheck du container
docker inspect davyemane-portfolio | grep -A 10 Health

# Utilisation des ressources
docker stats davyemane-portfolio
```

## Troubleshooting

### Le site n'est pas accessible

1. Vérifier que le container tourne: `docker ps`
2. Vérifier les logs: `docker logs davyemane-portfolio`
3. Vérifier que nginx écoute: `sudo netstat -tlnp | grep nginx`
4. Vérifier la configuration nginx: `sudo nginx -t`

### Erreur 502 Bad Gateway

1. Vérifier que le container écoute sur le port 3000: `curl http://localhost:3000`
2. Vérifier les logs nginx: `sudo tail -f /var/log/nginx/portfolio-error.log`

### Problème de certificat SSL

```bash
# Renouveler manuellement
sudo certbot renew

# Voir les certificats installés
sudo certbot certificates
```

## Architecture

```
Internet
   ↓
Nginx (VPS - Port 80/443)
   ↓ [Reverse Proxy]
Docker Container (127.0.0.1:3000)
   ↓
Nginx (Container - Port 80)
   ↓
React App (Build statique)
```
