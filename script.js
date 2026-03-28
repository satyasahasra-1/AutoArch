/**
 * AutoArch — script.js
 * Vehicle data + search + clean 360° crossfade viewer
 */

/* ── VEHICLE DATA ── */
let vehicleData = [
  {
    "company": "Honda", "model": "City", "year": "2024",
    "price": "₹12,89,000", "engine": "1498 cc", "mileage": "17.4 km/l",
    "fuel": "Petrol", "transmission": "Manual", "power": "121 bhp",
    "torque": "145 Nm", "seating": "5", "body": "Sedan",
    "topspeed": "200 km/h", "acceleration": "9.8 sec", "tank": "40 Litres",
    "weight": "1095 kg", "length": "4549 mm", "boot": "506 Litres",
    "cooling": "Liquid Cooled", "warranty": "3 Years / 1,00,000 km",
    "ncap": 4,
    "description": "The Honda City is a refined compact sedan blending sporty styling with practical features. Known for its peppy engine and premium cabin experience.",
    "features": ["Sunroof","Apple CarPlay","Android Auto","LED Headlights","Cruise Control","Rear Camera","Climate Control","Push Start","Wireless Charging","Ventilated Seats"],
    "safety": ["6 Airbags","ABS + EBD","Lane Watch Camera","Vehicle Stability Assist","Hill Start Assist"],
    "images": [
      "https://imagecdnsa.zigwheels.ae/large/gallery/exterior/14/131/honda-city-front-angle-low-view-538576.jpg?tr=w-500,h-333",
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/134287/city-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/134287/city-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "views360": [
      "https://images.autox.com/uploads/2023/03/Honda-City-Facelift-Launch-500x261.jpg",
      "https://imgd.aeplcdn.com/642x361/n/cw/ec/143725/honda-city-front-view3.jpeg?isig=0&wm=4",
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/167995/honda-city-left-front-three-quarter1.jpeg?isig=0",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-rear-view.jpeg?isig=0&q=80",
      "https://cdn1.smartprix.com/rx-iHUXmbPKg-w420-h420/honda-city-sv-2024.webp"
    ]
  },
  {
    "company": "Toyota", "model": "Fortuner", "year": "2024",
    "price": "₹33,43,000", "engine": "2755 cc", "mileage": "12.6 km/l",
    "fuel": "Diesel", "transmission": "Automatic", "power": "201 bhp",
    "torque": "500 Nm", "seating": "7", "body": "SUV",
    "topspeed": "175 km/h", "acceleration": "11.2 sec", "tank": "80 Litres",
    "weight": "2130 kg", "length": "4795 mm", "boot": "220 Litres",
    "cooling": "Liquid Cooled", "warranty": "3 Years / 1,00,000 km",
    "ncap": 5,
    "description": "The Toyota Fortuner is a legendary full-size SUV commanding presence on any terrain. Its powerful diesel engine and robust build make it the go-to for adventure seekers.",
    "features": ["4x4 Drive","Panoramic Sunroof","9-inch Touchscreen","360° Camera","Wireless Charging","Ventilated Seats","Ambient Lighting","Power Tailgate","Heads-Up Display","8 Airbags"],
    "safety": ["8 Airbags","ABS + EBD","Vehicle Stability Control","Hill Descent Control","Trailer Sway Control"],
    "images": [
      "https://spn-sta.spinny.com/blog/20221202123514/Toyota-Fortuner-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6",
      "https://media.zigcdn.com/media/model/2025/Jun/model-extimg-1146308685_600x400.jpg",
      "https://cms-assets.autoscout24.com/uaddx06iwzdz/4CaY003mpVj2XrKYqJXqIj/b7ae7a2d8427d3a6fb3c2b49267cccc2/toyota-fortuner-back.jpeg?w=1100"
    ],
    "views360": [
      "https://spn-sta.spinny.com/blog/20221202123514/Toyota-Fortuner-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6",
      "https://imgcdn.oto.com/large/gallery/exterior/38/894/toyota-fortuner-full-front-view-816269.jpg",
      "https://imgcdn.oto.com/large/gallery/exterior/38/894/toyota-fortuner-full-rear-view-370057.jpg",
      "https://cms-assets.autoscout24.com/uaddx06iwzdz/4CaY003mpVj2XrKYqJXqIj/b7ae7a2d8427d3a6fb3c2b49267cccc2/toyota-fortuner-back.jpeg?w=1100",
      "https://imgcdn.oto.com/large/gallery/exterior/38/894/toyota-fortuner-side-view-283280.jpg",
      "https://imgcdn.oto.com/large/gallery/roadtest/38/894/toyota-fortuner-front-side-view-996822.jpg"
    ]
  },
  {
    "company": "Hyundai", "model": "Creta", "year": "2024",
    "price": "₹11,21,000", "engine": "1497 cc", "mileage": "16.8 km/l",
    "fuel": "Petrol", "transmission": "Manual", "power": "113 bhp",
    "torque": "144 Nm", "seating": "5", "body": "SUV",
    "topspeed": "180 km/h", "acceleration": "10.5 sec", "tank": "50 Litres",
    "weight": "1275 kg", "length": "4330 mm", "boot": "433 Litres",
    "cooling": "Liquid Cooled", "warranty": "3 Years / Unlimited km",
    "ncap": 5,
    "description": "The Hyundai Creta is India's best-selling compact SUV. With bold styling, a feature-rich cabin, and smooth performance, it sets the benchmark in its segment.",
    "features": ["Panoramic Sunroof","ADAS Suite","Bose Sound System","Dual Zone Climate","Wireless Charging","360° Camera","LED Headlights","Connected Car Tech","Drive Modes","Air Purifier"],
    "safety": ["6 Airbags","ABS + EBD","Electronic Stability Control","Forward Collision Warning","Lane Keep Assist"],
    "images": [
      "https://images.hindustantimes.com/auto/img/2024/07/26/600x338/Creta_3_1705469941498_1721984409750.jpg",
      "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-n-line/Interior/pc/front.jpg",
      "https://jsvhyundai.com/public/assets/admin/images/gallery/Hyundai%20Creta%20Price.jpg"
    ],
    "views360": [
      "https://images.hindustantimes.com/auto/img/2024/07/26/600x338/Creta_3_1705469941498_1721984409750.jpg",
      "https://cdn-s3.autocarindia.com/hyundai/creta/500_4246.JPG?w=640",
      "https://jsvhyundai.com/public/assets/admin/images/gallery/Hyundai%20Creta%20Price.jpg",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-rear-view.jpeg?isig=0&q=80",
      "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-n-line/Interior/pc/front.jpg"
    ]
  },
  {
    "company": "Maruti", "model": "Swift", "year": "2024",
    "price": "₹6,49,000", "engine": "1197 cc", "mileage": "24.8 km/l",
    "fuel": "Petrol", "transmission": "Manual", "power": "81.8 bhp",
    "torque": "112 Nm", "seating": "5", "body": "Hatchback",
    "topspeed": "165 km/h", "acceleration": "11.8 sec", "tank": "37 Litres",
    "weight": "890 kg", "length": "3860 mm", "boot": "268 Litres",
    "cooling": "Liquid Cooled", "warranty": "2 Years / 40,000 km",
    "ncap": 3,
    "description": "The Maruti Swift is India's iconic hatchback loved for its sporty design and exceptional fuel efficiency. A perfect city companion with a punchy feel.",
    "features": ["SmartPlay Pro+","Apple CarPlay","Android Auto","LED Headlights","Keyless Entry","Push Start","Rear Camera","Auto AC","Drive Modes","Height Adj. Seatbelt"],
    "safety": ["2 Airbags","ABS + EBD","Electronic Brake Force","Rear Parking Sensors","Speed Alert System"],
    "images": [
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/159099/swift-exterior-left-front-three-quarter-26.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "views360": [
      "https://images.drivespark.com/ph-big/2024/05/2024-maruti-suzuki-swift-review_171583785860.jpg",
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/159099/swift-exterior-front-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/159099/swift-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ]
  },
  {
    "company": "BMW", "model": "3 Series", "year": "2024",
    "price": "₹57,90,000", "engine": "1998 cc", "mileage": "14.1 km/l",
    "fuel": "Petrol", "transmission": "Automatic", "power": "255 bhp",
    "torque": "400 Nm", "seating": "5", "body": "Sedan",
    "topspeed": "250 km/h", "acceleration": "5.8 sec", "tank": "59 Litres",
    "weight": "1535 kg", "length": "4709 mm", "boot": "480 Litres",
    "cooling": "Liquid Cooled", "warranty": "3 Years / Unlimited km",
    "ncap": 5,
    "description": "The BMW 3 Series is the benchmark for sports sedans. Combining athletic performance with everyday luxury, it delivers a driving experience unlike any other.",
    "features": ["iDrive 8 System","Harman Kardon Sound","Heated Seats","Panoramic Sunroof","Wireless Charging","Head-Up Display","Driving Assistant Pro","Parking Assistant","Live Cockpit Pro","M Sport Package"],
    "safety": ["8 Airbags","ABS + DSC","Active Cruise Control","Lane Departure Warning","Collision Warning + Braking"],
    "images": [
      "https://mediapool.bmwgroup.com/cache/P9/202405/P90549624/P90549624-the-new-bmw-330i-sedan-exterior--interior-05-2024-600px.jpg",
      "https://news-site-za.s3.af-south-1.amazonaws.com/images/2024/05/2024-3er-1.jpg",
      "https://assets.meinauto.de/image/upload/v1716974134/website/pics/landingpages/news/2024-05/P90549622_highRes_the-new-bmw-330i-sed.jpg"
    ],
    "views360": [
      "https://mediapool.bmwgroup.com/cache/P9/202405/P90549624/P90549624-the-new-bmw-330i-sedan-exterior--interior-05-2024-600px.jpg",
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/198567/3-series-exterior-front-view.jpeg?isig=0&q=80",
      "https://www.netcarshow.com/BMW-3-Series_Sedan-2025-Rear_Three-Quarter.b4a8dfb8.jpg",
      "https://news-site-za.s3.af-south-1.amazonaws.com/images/2024/05/2024-3er-1.jpg"
    ]
  },
  {
    "company": "Tata", "model": "Nexon", "year": "2024",
    "price": "₹8,10,000", "engine": "1199 cc", "mileage": "17.0 km/l",
    "fuel": "Petrol", "transmission": "Manual", "power": "118.3 bhp",
    "torque": "170 Nm", "seating": "5", "body": "SUV",
    "topspeed": "170 km/h", "acceleration": "10.8 sec", "tank": "44 Litres",
    "weight": "1277 kg", "length": "3993 mm", "boot": "350 Litres",
    "cooling": "Liquid Cooled", "warranty": "3 Years / 1,25,000 km",
    "ncap": 5,
    "description": "The Tata Nexon is the safest car in its class with 5-star Global NCAP rating. Bold exterior design and a turbocharged engine make it a thrilling everyday SUV.",
    "features": ["10.25\" Touchscreen","JBL Sound System","Sunroof","ADAS","Wireless Charging","360° Camera","Air Purifier","Ventilated Seats","Connected Car","Ira Voice Assistant"],
    "safety": ["6 Airbags","ABS + EBD","Electronic Stability Program","Hill Hold Control","Front Fog Lamps"],
    "images": [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/176745/tata-nexon-right-front-three-quarter0.jpeg?isig=0&q=80",
      "https://cdn-s3.autocarindia.com/Tata/nexon/_BE07493.JPG?w=640&q=75",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "views360": [
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/176745/tata-nexon-right-front-three-quarter0.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/nexon-exterior-right-side-view.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-left-rear-three-quarter.jpeg?isig=0&q=80",
      "https://cdn-s3.autocarindia.com/Tata/nexon/_BE07493.JPG?w=640&q=75"
    ]
  }
];

/* ── STATE ── */
let currentVehicle = null;
let currentFrame   = 0;
let isDragging     = false;
let startX         = 0;
let autoRotate     = false;
let autoInterval   = null;
let activeImg, nextImg;
let currentFrames  = [];

/* ── DOM ── */
const companyInput   = document.getElementById('company-input');
const modelInput     = document.getElementById('model-input');
const searchBtn      = document.getElementById('search-btn');
const vehicleDetails = document.getElementById('vehicle-details');
const notFound       = document.getElementById('not-found');
const loadingOverlay = document.getElementById('loading-overlay');
const mainImg        = document.getElementById('main-vehicle-img');
const thumbStrip     = document.getElementById('thumb-strip');
const canvas         = document.getElementById('view360-canvas');
const rotationFill   = document.getElementById('rotation-fill');
const frameCounter   = document.getElementById('frame-counter');
const dragHint       = document.getElementById('drag-hint');
const autoRotateBtn  = document.getElementById('auto-rotate-btn');
const keyboardHint   = document.getElementById('keyboard-hint');

/* ── INIT ── */
function init() {
  activeImg = document.getElementById('view360-img');
  nextImg   = document.getElementById('view360-img-b');
  console.log(`✅ ${vehicleData.length} vehicles ready`);
}

/* ── SEARCH ── */
function handleSearch() {
  const company = companyInput.value.trim().toLowerCase();
  const model   = modelInput.value.trim().toLowerCase();

  if (!company && !model) {
    companyInput.focus();
    companyInput.style.borderColor = 'var(--red)';
    setTimeout(() => companyInput.style.borderColor = '', 1500);
    return;
  }

  loadingOverlay.classList.add('visible');

  setTimeout(() => {
    loadingOverlay.classList.remove('visible');

    const found = vehicleData.find(v => {
      const matchCompany = company ? v.company.toLowerCase().includes(company) : true;
      const matchModel   = model   ? v.model.toLowerCase().includes(model)     : true;
      return matchCompany && matchModel;
    });

    vehicleDetails.classList.remove('visible');
    notFound.classList.remove('visible');

    if (found) {
      currentVehicle = found;
      renderVehicle(found);
      vehicleDetails.classList.add('visible');
      vehicleDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
      keyboardHint.classList.add('visible');
      setTimeout(() => keyboardHint.classList.remove('visible'), 5000);
    } else {
      notFound.classList.add('visible');
      notFound.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 600);
}

/* ── RENDER VEHICLE ── */
function renderVehicle(v) {
  stopAutoRotate();

  document.getElementById('v-company').textContent      = v.company;
  document.getElementById('v-model').textContent        = v.model;
  document.getElementById('v-year').textContent         = v.year ? `Model Year ${v.year}` : '';
  document.getElementById('v-price').textContent        = v.price;
  document.getElementById('v-engine').textContent       = v.engine;
  document.getElementById('v-mileage').textContent      = v.mileage;
  document.getElementById('v-fuel').textContent         = v.fuel;
  document.getElementById('v-transmission').textContent = v.transmission;
  document.getElementById('v-power').textContent        = v.power || '—';
  document.getElementById('v-torque').textContent       = v.torque || '—';
  document.getElementById('v-seating').textContent      = v.seating || '5';
  document.getElementById('v-body').textContent         = v.body || '—';
  document.getElementById('v-topspeed').textContent     = v.topspeed || '—';
  document.getElementById('v-acceleration').textContent = v.acceleration || '—';
  document.getElementById('v-tank').textContent         = v.tank || '—';
  document.getElementById('v-weight').textContent       = v.weight || '—';
  document.getElementById('v-length').textContent       = v.length || '—';
  document.getElementById('v-boot').textContent         = v.boot || '—';
  document.getElementById('v-cooling').textContent      = v.cooling || '—';
  document.getElementById('v-warranty').textContent     = v.warranty || '—';
  document.getElementById('v-desc').textContent         = v.description || '';

  // Tags
  const tagsEl = document.getElementById('v-tags');
  tagsEl.innerHTML = '';
  [v.fuel, v.transmission, v.body].forEach((t, i) => {
    if (!t) return;
    const tag = document.createElement('span');
    tag.className = `tag ${i === 0 ? 'green' : 'yellow'}`;
    tag.textContent = t;
    tagsEl.appendChild(tag);
  });

  // Features
  const featuresEl = document.getElementById('v-features');
  featuresEl.innerHTML = '';
  (v.features || []).forEach(f => {
    featuresEl.innerHTML += `<div class="feature-item"><div class="feature-dot"></div>${f}</div>`;
  });

  // Safety
  const safetyEl = document.getElementById('v-safety');
  safetyEl.innerHTML = '';
  (v.safety || []).forEach(s => {
    safetyEl.innerHTML += `<div class="feature-item"><div class="feature-dot green"></div>${s}</div>`;
  });

  // NCAP stars
  const starsEl  = document.getElementById('v-stars');
  const ratingEl = document.getElementById('v-rating');
  const ncap = v.ncap || 0;
  starsEl.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsEl.innerHTML += `<span class="star ${i <= ncap ? 'filled' : ''}">★</span>`;
  }
  ratingEl.textContent = `${ncap}/5`;

  // Gallery images
  const imgs = v.images && v.images.length
    ? v.images
    : ['https://via.placeholder.com/800x450/1e1e26/4a4855?text=No+Image'];

  mainImg.src = imgs[0];
  mainImg.alt = `${v.company} ${v.model}`;
  document.getElementById('img-badge').textContent = `${v.company} · ${v.model}`;

  thumbStrip.innerHTML = '';
  imgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `View ${i + 1}`;
    if (i === 0) img.classList.add('active');
    img.addEventListener('click', () => {
      mainImg.style.opacity = '0';
      setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 200);
      thumbStrip.querySelectorAll('img').forEach(t => t.classList.remove('active'));
      img.classList.add('active');
    });
    thumbStrip.appendChild(img);
  });

  // Setup 360 frames
  currentFrames = v.views360 && v.views360.length ? v.views360 : imgs;
  currentFrame  = 0;

  // Reset layers
  activeImg = document.getElementById('view360-img');
  nextImg   = document.getElementById('view360-img-b');
  activeImg.classList.add('active');
  nextImg.classList.remove('active');
  nextImg.src = '';

  // Preload all frames in background
  currentFrames.forEach(src => { const p = new Image(); p.src = src; });

  updateFrame(0);
}

/* ── 360 VIEWER ── */
function updateFrame(index) {
  if (!currentFrames.length) return;
  index = ((index % currentFrames.length) + currentFrames.length) % currentFrames.length;
  currentFrame = index;

  nextImg.src = currentFrames[index];

  const doSwap = () => {
    nextImg.classList.add('active');
    activeImg.classList.remove('active');
    const tmp = activeImg;
    activeImg = nextImg;
    nextImg   = tmp;
  };

  if (nextImg.complete && nextImg.naturalWidth > 0) {
    doSwap();
  } else {
    nextImg.onload = doSwap;
  }

  // Progress bar
  rotationFill.style.width = ((index / currentFrames.length) * 100) + '%';

  // Counter
  const span = frameCounter ? frameCounter.querySelector('span') : null;
  if (span) span.textContent = `Frame ${index + 1} / ${currentFrames.length}`;
}

function nextFrame() {
  updateFrame(currentFrame + 1);
  if (dragHint) dragHint.style.opacity = '0';
}

function prevFrame() {
  updateFrame(currentFrame - 1);
  if (dragHint) dragHint.style.opacity = '0';
}

/* ── AUTO ROTATE ── */
function startAutoRotate() {
  if (autoInterval) return;
  autoRotate = true;
  autoRotateBtn.classList.add('active');
  autoRotateBtn.querySelector('span').textContent = 'STOP';
  autoInterval = setInterval(nextFrame, 120);
}

function stopAutoRotate() {
  if (!autoInterval) return;
  clearInterval(autoInterval);
  autoInterval = null;
  autoRotate   = false;
  if (autoRotateBtn) {
    autoRotateBtn.classList.remove('active');
    autoRotateBtn.querySelector('span').textContent = 'AUTO';
  }
}

function toggleAutoRotate() {
  if (autoRotate) stopAutoRotate(); else startAutoRotate();
}

/* ── DRAG (mouse) ── */
canvas.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.clientX;
  stopAutoRotate();
});
window.addEventListener('mouseup', () => { isDragging = false; });
canvas.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const diff = e.clientX - startX;
  if (Math.abs(diff) > 18) {
    diff > 0 ? nextFrame() : prevFrame();
    startX = e.clientX;
  }
});

/* ── DRAG (touch) ── */
canvas.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].clientX;
  stopAutoRotate();
}, { passive: true });
canvas.addEventListener('touchend', () => { isDragging = false; });
canvas.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const diff = e.touches[0].clientX - startX;
  if (Math.abs(diff) > 18) {
    diff > 0 ? nextFrame() : prevFrame();
    startX = e.touches[0].clientX;
  }
}, { passive: true });

/* ── KEYBOARD ── */
document.addEventListener('keydown', e => {
  if (!currentVehicle) return;
  if (e.key === 'ArrowRight') nextFrame();
  if (e.key === 'ArrowLeft')  prevFrame();
  if (e.key === ' ') { e.preventDefault(); toggleAutoRotate(); }
});

/* ── SUGGESTION CHIPS ── */
document.querySelectorAll('.suggestion-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const parts = chip.dataset.query.split(' ');
    companyInput.value = parts[0] || '';
    modelInput.value   = parts.slice(1).join(' ') || '';
    handleSearch();
  });
});

/* ── WIRE UP BUTTONS ── */
searchBtn.addEventListener('click', handleSearch);
[companyInput, modelInput].forEach(input => {
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
});
document.getElementById('btn-prev').addEventListener('click', prevFrame);
document.getElementById('btn-next').addEventListener('click', nextFrame);
autoRotateBtn.addEventListener('click', toggleAutoRotate);

/* ── START ── */
init();
