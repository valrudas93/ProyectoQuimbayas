/* ============================================
   CARTOGRAFÍA SONORA ANCESTRAL QUIMBAYA
   script.js
   Aves: Xeno-canto / contributor XMFDPACYJN
   ============================================ */

const AVES = [
  {
    id: 1,
    nombre: "Eufonia Ventrinaranja",
    nombreCientifico: "Euphonia xanthogaster",
    region: "Andes Centrales",
    zona: "cloud",
    lat: 4.533,
    lng: -75.682,
    emoji: "🐦",
    ecologia: "Pequeña ave frugívora de bosques montanos húmedos entre 900 y 2.200 m.s.n.m. El macho luce plumaje azul-negro brillante con vientre naranja intenso. Se alimenta principalmente de muérdagos y frutos pequeños, siendo dispersora clave de semillas en el bosque andino del Eje Cafetero.",
    cultural: "El naranja encendido de su vientre era asociado al fuego interior, a la energía vital que anima los seres. En la cosmovisión Quimbaya, las aves de colores vivos eran portadoras de mensajes entre el mundo visible y el espiritual.",
    audioSrc: "assets/audio/eufonia-ventrinaranja.mp3",
    fuenteAudio: "Xeno-canto XC525722"
  },
  {
    id: 2,
    nombre: "Busardo Caminero",
    nombreCientifico: "Rupornis magnirostris",
    region: "Valle del Cauca",
    zona: "valle",
    lat: 3.751,
    lng: -76.524,
    emoji: "🦅",
    ecologia: "Rapaz de tamaño mediano, una de las más comunes en Colombia. Habita bordes de bosque, potreros arbolados y zonas abiertas desde el nivel del mar hasta 2.500 m.s.n.m. Su canto agudo y repetitivo es uno de los sonidos más reconocibles del paisaje rural colombiano.",
    cultural: "Las rapaces ocupaban el estrato más alto de la jerarquía simbólica animal Quimbaya. El busardo, ave de presa que domina el espacio aéreo del valle, era imagen del cacique: aquel que vigila el territorio y decide.",
    audioSrc: "assets/audio/busardo-caminero.mp3",
    fuenteAudio: "Xeno-canto XC117739"
  },
  {
    id: 3,
    nombre: "Tinamú Chico",
    nombreCientifico: "Crypturellus soui",
    region: "Serranía de los Churumbelos",
    zona: "cloud",
    lat: 1.482,
    lng: -76.012,
    emoji: "🐦",
    ecologia: "Ave terrestre de selvas húmedas y bosques secundarios entre 0 y 1.500 m.s.n.m. De hábitos discretos y canto melancólico y penetrante. Anida en el suelo entre hojarasca densa. Su voz —una flauta grave que parece venir de ninguna parte— marca el amanecer en los bosques del piedemonte.",
    cultural: "El canto del tinamú, escuchado pero nunca visto, lo convertía en voz del bosque mismo. Era señal de que el monte estaba vivo y vigilante. Los chamanes interpretaban su llamado como augurio de lluvia o de presencia ancestral.",
    audioSrc: "assets/audio/tinamu-chico.mp3",
    fuenteAudio: "Xeno-canto XC117737"
  },
  {
    id: 4,
    nombre: "Ojo de Fuego Occidental",
    nombreCientifico: "Pyriglena maura",
    region: "Pacífico Colombiano",
    zona: "coast",
    lat: 4.018,
    lng: -77.112,
    emoji: "🔥",
    ecologia: "Ave insectívora de sotobosque en selvas húmedas del Pacífico. El macho es negro con un llamativo iris rojo encendido. Habita entre 0 y 1.000 m.s.n.m. en bosques continuos y bien conservados. Su presencia indica alta calidad del ecosistema forestal.",
    cultural: "Su nombre lo dice todo: ojo de fuego. En la iconografía precolombina del Pacífico y los Andes occidentales, los ojos eran portales. Un ave cuya mirada arde era considerada ser de doble naturaleza: habitante simultáneo del mundo visible y del invisible.",
    audioSrc: "assets/audio/ojo-de-fuego.mp3",
    fuenteAudio: "Xeno-canto XC529370"
  },
  {
    id: 5,
    nombre: "Quetzal Cabecidorado",
    nombreCientifico: "Pharomachrus auriceps",
    region: "Cordillera Occidental",
    zona: "cloud",
    lat: 5.014,
    lng: -76.248,
    emoji: "✨",
    ecologia: "Una de las aves más majestuosas de los Andes colombianos. Habita bosques nublados entre 1.500 y 2.800 m.s.n.m. La cabeza dorada del macho iridiscente al sol es inconfundible. Se alimenta de aguacatillos y frutos del bosque, siendo dispersor esencial de árboles de dosel.",
    cultural: "El quetzal era en toda Mesoamérica y los Andes el ave del poder supremo. Sus plumas doradas eran equiparadas al oro: materia sagrada que captura la luz solar. Para los Quimbaya, verlo era señal de que los ancestros aprobaban.",
    audioSrc: "assets/audio/quetzal-cabecidorado.mp3",
    fuenteAudio: "Xeno-canto XC525731"
  },
  {
    id: 6,
    nombre: "Pijuí de Azara",
    nombreCientifico: "Synallaxis azarae",
    region: "Páramos del Cauca",
    zona: "cloud",
    lat: 2.218,
    lng: -76.551,
    emoji: "🐦",
    ecologia: "Pequeña ave de matorrales y bordes de bosque entre 1.500 y 3.500 m.s.n.m., llegando hasta el subpáramo. De plumaje café-rojizo discreto, pero con un canto insistente y fuerte que delata su presencia. Construye nidos elaborados con entradas tubulares.",
    cultural: "El pijuí, constructor incansable de nidos complejos, era símbolo de trabajo, tejido y arquitectura. En las tradiciones andinas, las aves que construyen son mediadoras del orden: quienes dan forma al caos del monte.",
    audioSrc: "assets/audio/pijui-azara.mp3",
    fuenteAudio: "Xeno-canto XC529426"
  },
  {
    id: 7,
    nombre: "Cerquero Coronicastaño",
    nombreCientifico: "Arremon brunneinucha",
    region: "Eje Cafetero",
    zona: "cloud",
    lat: 4.8,
    lng: -75.9,
    emoji: "🐦",
    ecologia: "Ave de sotobosque en bosques montanos entre 1.200 y 2.800 m.s.n.m. Castaño con corona rojiza y pecho blanco con collar negro. Forrajea entre la hojarasca del suelo. Su canto es una serie de notas cristalinas descendentes, frecuente al amanecer en el Eje Cafetero.",
    cultural: "Su corona castaña y su pecho blanco remiten a la dualidad tierra-cielo. Ave del umbral: vive entre el suelo (mundo de los muertos) y el sotobosque (mundo de los vivos), siempre en la frontera entre dos planos.",
    audioSrc: "assets/audio/cerquero-coronicastano.mp3",
    fuenteAudio: "Xeno-canto XC525716"
  },
  {
    id: 8,
    nombre: "Tucán Pechiblanco",
    nombreCientifico: "Ramphastos tucanus cuvieri",
    region: "Amazonia Colombiana",
    zona: "river",
    lat: -1.018,
    lng: -73.811,
    emoji: "🦜",
    ecologia: "El tucán más grande de Colombia. Habita selvas húmedas tropicales de la Amazonia entre 0 y 800 m.s.n.m. Su pico bicolor —negro y amarillo— es uno de los más reconocibles del Neotrópico. Voz grave y resonante que viaja lejos en el dosel amazónico.",
    cultural: "El tucán era figura de dualidad: su pico concentraba dos colores opuestos, símbolo de la unión de contrarios. En tradiciones chamánicas amazónicas, su imagen aparece en objetos rituales como vehículo de visión y mediación.",
    audioSrc: "assets/audio/tucan-pechiblanco.mp3",
    fuenteAudio: "Xeno-canto XC117331"
  },
  {
    id: 9,
    nombre: "Pava del Cauca",
    nombreCientifico: "Penelope perspicax",
    region: "Valle del Cauca",
    zona: "valle",
    lat: 3.863,
    lng: -76.338,
    emoji: "🦃",
    ecologia: "Ave endémica de Colombia, catalogada como Vulnerable. Habita bosques húmedos y premontanos del Valle del Cauca y Eje Cafetero entre 900 y 2.000 m.s.n.m. Su presencia indica bosques en buen estado. La fragmentación del hábitat ha reducido drásticamente sus poblaciones.",
    cultural: "Ave endémica del territorio Quimbaya. Su canto, uno de los primeros del amanecer, marcaba el inicio del tiempo activo. Era símbolo de pertenencia al territorio: solo quien conoce el bosque escucha a la pava.",
    audioSrc: "assets/audio/pava-del-cauca.mp3",
    fuenteAudio: "Xeno-canto XC117733"
  },
  {
    id: 10,
    nombre: "Tucanete Culirrojo",
    nombreCientifico: "Aulacorhynchus haematopygus",
    region: "Cordillera Central",
    zona: "cloud",
    lat: 5.5,
    lng: -75.4,
    emoji: "🦜",
    ecologia: "Tucanete verde con cola rojiza de bosques montanos entre 1.000 y 2.400 m.s.n.m. Se desplaza en grupos familiares ruidosos. Anida en huecos de árboles. Dispersor importante de semillas de frutos pequeños en el bosque andino del norte del Eje Cafetero.",
    cultural: "El verde de su plumaje lo conectaba con la selva viva, con la fertilidad y el crecimiento. El rojo de su cola era la marca del fuego contenido: la energía que sostiene la vida desde adentro.",
    audioSrc: "assets/audio/tucanete-culirrojo.mp3",
    fuenteAudio: "Xeno-canto XC117681"
  },
  {
    id: 11,
    nombre: "Tangara Flamígera",
    nombreCientifico: "Ramphocelus flammigerus",
    region: "Pacífico y Andes Occidentales",
    zona: "coast",
    lat: 3.5,
    lng: -76.8,
    emoji: "🔴",
    ecologia: "Una de las aves más llamativas de Colombia. El macho es negro con pecho y rabadilla naranja-rojo llameante. Habita bordes de bosque húmedo y jardines entre 0 y 1.800 m.s.n.m. en el Pacífico y vertiente occidental andina. Muy común en el Valle del Cauca.",
    cultural: "Flamígera: que lleva llamas. Su plumaje era la imagen del sol descendido a la tierra. En la iconografía Quimbaya, el fuego y el sol son el mismo principio: el origen de todo lo que vive y se transforma.",
    audioSrc: "assets/audio/tangara-flamigera.mp3",
    fuenteAudio: "Xeno-canto XC525740"
  }
];

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initMap();
  initWaveform();
  initVisualizer();
});

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ============================================
// ANIMACIONES AL SCROLL
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.cultura-card').forEach(el => observer.observe(el));
}

// ============================================
// MAPA LEAFLET
// ============================================
function initMap() {
  const map = L.map('map', {
    center: [3.5, -74.5],
    zoom: 5.5,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const zoneColors = {
    cloud: { border: '#64a0c8', bg: 'rgba(100,160,200,0.2)' },
    river: { border: '#3c8c5a', bg: 'rgba(60,140,90,0.2)'  },
    coast: { border: '#c89640', bg: 'rgba(200,150,60,0.2)' },
    valle: { border: '#c89640', bg: 'rgba(200,150,60,0.2)' },
    llanos:{ border: '#b48c3c', bg: 'rgba(180,140,60,0.2)' },
    sierra:{ border: '#a064a0', bg: 'rgba(160,100,160,0.2)'}
  };

  AVES.forEach(ave => {
    const color = zoneColors[ave.zona] || zoneColors.cloud;
    const iconHtml = `<div class="bird-marker" style="border-color:${color.border}; background:${color.bg};" title="${ave.nombre}">${ave.emoji}</div>`;
    const icon = L.divIcon({ html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });
    const marker = L.marker([ave.lat, ave.lng], { icon }).addTo(map);
    marker.on('click', () => {
      document.querySelectorAll('.bird-marker').forEach(el => el.classList.remove('active'));
      setTimeout(() => {
        const el = marker.getElement()?.querySelector('.bird-marker');
        if (el) el.classList.add('active');
      }, 50);
      openAvePanel(ave);
    });
  });

  document.getElementById('avePanelClose').addEventListener('click', () => {
    closeAvePanel();
    document.querySelectorAll('.bird-marker').forEach(el => el.classList.remove('active'));
  });
}

function openAvePanel(ave) {
  const panel = document.getElementById('avePanel');
  panel.classList.add('has-bird');

  document.getElementById('avePanelRegion').textContent = ave.region;
  document.getElementById('avePanelName').textContent = ave.nombre;
  document.getElementById('avePanelCoords').textContent =
    `${ave.lat.toFixed(4)}° N, ${ave.lng.toFixed(4)}° W  ·  ${ave.nombreCientifico}`;
  document.getElementById('avePanelEcologia').textContent = ave.ecologia;

  document.getElementById('avePanelCultural').style.display = 'block';
  document.getElementById('avePanelCulturalText').textContent = ave.cultural;

  const audioWrap = document.getElementById('aveAudioWrap');
  const audio = document.getElementById('birdAudio');
  const placeholder = document.getElementById('audioPlaceholderNote');
  audioWrap.style.display = 'block';

  resetAudio();

  if (ave.audioSrc) {
    audio.src = ave.audioSrc;
    placeholder.style.display = 'none';
  } else {
    audio.src = '';
    placeholder.style.display = 'block';
  }

  animateWaveformIdle();
}

function closeAvePanel() {
  document.getElementById('avePanel').classList.remove('has-bird');
  resetAudio();
}

// ============================================
// WAVEFORM
// ============================================
let waveformInterval = null;

function initWaveform() {
  const wf = document.getElementById('audioWaveform');
  if (!wf) return;
  for (let i = 0; i < 24; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    bar.style.height = `${Math.random() * 60 + 10}%`;
    wf.appendChild(bar);
  }
}

function animateWaveformIdle() {
  clearInterval(waveformInterval);
  const bars = document.querySelectorAll('.waveform-bar');
  if (!bars.length) return;
  waveformInterval = setInterval(() => {
    bars.forEach(bar => { bar.style.height = `${Math.random() * 70 + 10}%`; });
  }, 220);
}

function stopWaveformAnim() {
  clearInterval(waveformInterval);
  document.querySelectorAll('.waveform-bar').forEach(bar => { bar.style.height = '20%'; });
}

// ============================================
// REPRODUCTOR DE AVE
// ============================================
function toggleAudio() {
  const audio = document.getElementById('birdAudio');
  const iconPlay  = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');
  if (!audio.src || audio.src === window.location.href) return;
  if (audio.paused) {
    audio.play().catch(() => {});
    iconPlay.style.display  = 'none';
    iconPause.style.display = 'block';
    animateWaveformActive();
  } else {
    audio.pause();
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
    animateWaveformIdle();
  }
}

function animateWaveformActive() {
  clearInterval(waveformInterval);
  const bars = document.querySelectorAll('.waveform-bar');
  let frame = 0;
  waveformInterval = setInterval(() => {
    frame++;
    bars.forEach((bar, i) => {
      const wave = Math.sin((frame * 0.15) + (i * 0.4)) * 30 + 40;
      bar.style.height = `${wave + Math.random() * 20}%`;
      bar.classList.toggle('active', i < (frame % bars.length));
    });
  }, 80);
}

function resetAudio() {
  const audio = document.getElementById('birdAudio');
  if (audio) { audio.pause(); audio.currentTime = 0; }
  const iconPlay  = document.getElementById('iconPlay');
  const iconPause = document.getElementById('iconPause');
  if (iconPlay)  iconPlay.style.display  = 'block';
  if (iconPause) iconPause.style.display = 'none';
  stopWaveformAnim();
  animateWaveformIdle();
}

// ============================================
// VISUALIZADOR CANVAS — Sección Sonido
// ============================================
let vizPhase = 0;

function initVisualizer() {
  const canvas = document.getElementById('visualizerCanvas');
  if (!canvas) return;
  drawVisualizerIdle(canvas);
}

function drawVisualizerIdle(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height, bars = 80;
  function frame() {
    vizPhase += 0.025;
    ctx.clearRect(0, 0, W, H);
    const gradient = ctx.createLinearGradient(0, 0, W, 0);
    gradient.addColorStop(0,   'rgba(201,169,110,0.05)');
    gradient.addColorStop(0.5, 'rgba(201,169,110,0.3)');
    gradient.addColorStop(1,   'rgba(201,169,110,0.05)');
    ctx.fillStyle = gradient;
    const barW = W / bars;
    for (let i = 0; i < bars; i++) {
      const h = Math.abs(
        Math.sin(vizPhase + i * 0.2) * 20 +
        Math.sin(vizPhase * 1.5 + i * 0.35) * 12 +
        Math.sin(vizPhase * 0.7 + i * 0.12) * 8
      ) + 4;
      ctx.globalAlpha = 0.15 + Math.abs(Math.sin(vizPhase + i * 0.15)) * 0.6;
      ctx.fillRect(i * barW + 1, H/2 - h/2, barW - 2, h);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  frame();
}

// ============================================
// REPRODUCTOR PRINCIPAL
// ============================================
let mainPlaying = false;

function toggleMain() {
  const audio = document.getElementById('mainAudio');
  const iconPlay  = document.getElementById('mainIconPlay');
  const iconPause = document.getElementById('mainIconPause');
  if (audio.paused) {
    audio.play().catch(() => {});
    iconPlay.style.display  = 'none';
    iconPause.style.display = 'block';
    mainPlaying = true;
  } else {
    audio.pause();
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
    mainPlaying = false;
  }
}

function seekMain(secs) {
  const audio = document.getElementById('mainAudio');
  if (!audio.duration) return;
  audio.currentTime = Math.max(0, audio.currentTime + secs);
}

function seekByClick(e) {
  const audio = document.getElementById('mainAudio');
  if (!audio.duration) return;
  const bar  = e.currentTarget.querySelector('.progress-bar-bg');
  const rect = bar.getBoundingClientRect();
  audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
}

function formatTime(s) {
  if (isNaN(s) || !isFinite(s)) return '—';
  const m = Math.floor(s / 60);
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('mainAudio');
  if (!audio) return;
  audio.addEventListener('timeupdate', () => {
    document.getElementById('mainTimeCurrent').textContent = formatTime(audio.currentTime);
    if (audio.duration) {
      document.getElementById('mainProgressFill').style.width =
        `${(audio.currentTime / audio.duration) * 100}%`;
    }
  });
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('mainTimeTotal').textContent = formatTime(audio.duration);
  });
  audio.addEventListener('ended', () => {
    document.getElementById('mainIconPlay').style.display  = 'block';
    document.getElementById('mainIconPause').style.display = 'none';
    mainPlaying = false;
  });
});
