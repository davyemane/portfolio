# Davy EMANE BILE - Portfolio

Portfolio personnel développé avec React.js présentant mes compétences, projets et expériences en tant que Software Developer & Digital Systems Engineer.

## 🚀 Technologies

- React 18
- React Icons
- CSS3 (Custom styling)
- Responsive Design

## 📦 Installation

```bash
# Cloner le repository
git clone <your-repo-url>

# Naviguer dans le dossier
cd portfolio

# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Builder pour la production
npm run build
```

## 📂 Structure du Projet

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation
│   │   ├── Hero.jsx         # Section d'accueil
│   │   ├── About.jsx        # À propos
│   │   ├── Skills.jsx       # Compétences techniques
│   │   ├── Projects.jsx     # Projets réalisés
│   │   └── Contact.jsx      # Informations de contact
│   ├── data/
│   │   └── data.js          # Données du CV
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation smooth scroll
- ✅ Sections: Home, About, Skills, Projects, Contact
- ✅ Téléchargement du CV
- ✅ Liens vers réseaux sociaux
- ✅ Modern UI/UX

## 🎨 Personnalisation

Pour personnaliser le portfolio :

1. **Modifier les données** : Éditer `src/data/data.js`
2. **Changer les couleurs** : Modifier les variables CSS dans `src/App.css` (section `:root`)
3. **Ajouter des projets** : Ajouter des entrées dans `projects` array dans `data.js`
4. **CV** : Placer votre CV PDF dans `public/` et mettre à jour le lien dans `data.js`

## 📱 Responsive

Le portfolio est entièrement responsive :
- Mobile : < 480px
- Tablette : 480px - 768px
- Desktop : > 768px

## 🌐 Déploiement

### Netlify
```bash
npm run build
# Déployer le dossier build/ sur Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configurer GitHub Pages pour servir depuis /build
```

## 📄 License

Ce projet est open source et disponible sous la licence MIT.

## 👤 Auteur

**EMANE BILE Felicien Davy**
- Email: davemane1@gmail.com
- GitHub: [@davyemane](https://github.com/davyemane)
- LinkedIn: [@davyemane](https://linkedin.com/in/davyemane)
