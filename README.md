# Cartografía Sonora Ancestral Quimbaya

Proyecto de investigación artística y sonora inspirado en la cultura Quimbaya.
Grabaciones de aves: Xeno-canto / contributor XMFDPACYJN

## Estructura

```
quimbaya-sonora/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       ├── img/
│       │   └── pieza-quimbaya.jpg
│       └── audio/
│           ├── composicion-principal.mp3   ← composición creada a partir de las aves
│           ├── eufonia-ventrinaranja.mp3   ← XC525722
│           ├── busardo-caminero.mp3        ← XC117739
│           ├── tinamu-chico.mp3            ← XC117737
│           ├── ojo-de-fuego.mp3            ← XC529370
│           ├── quetzal-cabecidorado.mp3    ← XC525731
│           ├── pijui-azara.mp3             ← XC529426
│           ├── cerquero-coronicastano.mp3  ← XC525716
│           ├── tucan-pechiblanco.mp3       ← XC117331
│           ├── pava-del-cauca.mp3          ← XC117733
│           ├── tucanete-culirrojo.mp3      ← XC117681
│           └── tangara-flamigera.mp3       ← XC525740
├── vercel.json
├── package.json
└── README.md
```

## Fuentes de audio

Todas las grabaciones de aves provienen de Xeno-canto:
https://xeno-canto.org/contributor/XMFDPACYJN

## Despliegue en Vercel

### Opción 1 — GitHub (recomendado)
1. Sube el proyecto a GitHub
2. Ve a vercel.com → Add New → Project
3. Importa el repositorio → Deploy

### Opción 2 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opción 3 — Drag & Drop
1. Ve a vercel.com/new
2. Arrastra la carpeta completa del proyecto
3. Deploy

## Prueba local
```bash
npm run dev
# Abre http://localhost:3000
```
