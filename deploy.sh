#!/bin/bash

# Script de déploiement automatique
# Usage: ./deploy.sh

set -e  # Arrêter en cas d'erreur

echo "==================================="
echo "Déploiement du Portfolio Davy Emane"
echo "==================================="

# Couleurs pour l'affichage
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    error "Docker n'est pas installé. Veuillez l'installer d'abord."
fi

# Vérifier que Docker Compose est installé (V2)
if ! docker compose version &> /dev/null; then
    error "Docker Compose V2 n'est pas installé. Veuillez l'installer d'abord."
fi

# 1. Arrêter et supprimer l'ancien container (si existe)
info "Arrêt des containers existants..."
docker compose down 2>/dev/null || true

# 2. Nettoyer les anciennes images (optionnel)
read -p "Voulez-vous nettoyer les anciennes images Docker? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    info "Nettoyage des anciennes images..."
    docker image prune -f
fi

# 3. Construire l'image
info "Construction de l'image Docker..."
docker compose build --no-cache

# 4. Démarrer le container
info "Démarrage du container..."
docker compose up -d

# 5. Attendre que le container soit prêt
info "Vérification de l'état du container..."
sleep 5

# 6. Vérifier que le container tourne
if [ "$(docker ps -q -f name=davyemane-portfolio)" ]; then
    info "Container démarré avec succès!"

    # Afficher les logs
    echo ""
    info "Derniers logs du container:"
    docker logs --tail 20 davyemane-portfolio

    echo ""
    info "Container en cours d'exécution sur http://localhost:3000"

    # Test de santé
    echo ""
    info "Test de connectivité..."
    if curl -s http://localhost:3000 > /dev/null; then
        info "✓ Le site est accessible!"
    else
        warn "✗ Le site ne répond pas encore. Vérifiez les logs."
    fi

else
    error "Le container n'a pas démarré correctement. Vérifiez les logs avec: docker logs davyemane-portfolio"
fi

echo ""
info "==================================="
info "Déploiement terminé!"
info "==================================="
echo ""
echo "Commandes utiles:"
echo "  - Voir les logs:          docker logs -f davyemane-portfolio"
echo "  - Arrêter le container:   docker compose down"
echo "  - Redémarrer:             docker compose restart"
echo "  - Voir l'état:            docker ps"
echo ""
