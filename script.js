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
      "images/Honda City-01.jpeg",
      "images/Honda City-04.jpeg",
      "images/Honda City-07.jpeg"
    ],
    "views360": [
      "images/Honda City-01.jpeg",
      "images/Honda City-02.jpeg",
      "images/Honda City-03.jpeg",
      "images/Honda City-04.jpeg",
      "images/Honda City-05.jpeg",
      "images/Honda City-06.jpeg",
      "images/Honda City-07.jpeg",
      "images/Honda City-08.jpeg",
      "images/Honda City-09.jpeg",
      "images/Honda City-10.jpeg",
      "images/Honda City-11.jpeg",
      "images/Honda City-12.jpeg",
      "images/Honda City-13.jpeg",
      "images/Honda City-14.jpeg"
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
      "images/fortuner-01.jpg",
      "images/fortuner-03.jpeg",
      "images/fortuner-08.jpeg"
    ],
    "views360": [
      "images/fortuner-01.jpg",
      "images/fortuner-02.jpeg",
      "images/fortuner-03.jpeg",
      "images/fortuner-04.jpeg",
      "images/fortuner-05.jpeg",
      "images/fortuner-06.jpeg",
      "images/fortuner-07.jpeg",
      "images/fortuner-08.jpeg",
      "images/fortuner-09.jpeg",
      "images/fortuner-10.jpeg",
      "images/fortuner-11.jpeg",
      "images/fortuner-12.jpeg",
      "images/fortuner-13.jpeg",
      "images/fortuner-14.jpeg",
      "images/fortuner-15.jpeg"
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
      "images/creta-01.jpeg",
      "images/creta-05.jpeg",
      "images/creta-08.jpeg"
    ],
    "views360": [
      "images/creta-01.jpeg",
      "images/creta-02.jpeg",
      "images/creta-03.jpeg",
      "images/creta-04.jpeg",
      "images/creta-05.jpeg",
      "images/creta-06.jpeg",
      "images/creta-07.jpeg",
      "images/creta-08.jpeg",
      "images/creta-09.jpeg",
      "images/creta-10.jpeg",
      "images/creta-11.jpeg",
      "images/creta-12.jpeg",
      "images/creta-13.jpeg",
      "images/creta-14.jpeg",
      "images/creta-15.jpeg",
      "images/creta-16.jpeg",
      "images/creta-17.jpeg"
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
      "images/swift-01.jpg",
      "images/swift-04.jpeg",
      "images/swift-07.jpeg"
    ],
    "views360": [
      "images/swift-01.jpg",
      "images/swift-02.jpeg",
      "images/swift-03.jpeg",
      "images/swift-04.jpeg",
      "images/swift-05.jpeg",
      "images/swift-06.jpeg",
      "images/swift-07.jpeg",
      "images/swift-08.jpeg",
      "images/swift-09.jpeg",
      "images/swift-10.jpeg",
      "images/swift-11.jpeg",
      "images/swift-12.jpeg",
      "images/swift-13.jpeg",
      "images/swift-14.jpeg",
      "images/swift-15.jpeg",
      "images/swift-16.jpeg",
      "images/swift-17.jpeg",
      "images/swift-18.jpeg"
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
      "images/bmw-01.jpeg",
      "images/bmw-05.jpeg",
      "images/bmw-07.jpeg"
    ],   
    "views360": [
      "images/bmw-01.jpeg",
      "images/bmw-02.jpeg",
      "images/bmw-03.jpeg",
      "images/bmw-04.jpeg",
      "images/bmw-05.jpeg",
      "images/bmw-06.jpeg",
      "images/bmw-07.jpeg",
      "images/bmw-08.jpeg",
      "images/bmw-09.jpeg",
      "images/bmw-10.jpeg",
      "images/bmw-11.jpeg",
      "images/bmw-12.jpeg",
      "images/bmw-13.jpeg",
      "images/bmw-14.jpeg",
      "images/bmw-15.jpeg"
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
      "images/nexon-01.jpg",
      "images/nexon-05.jpeg",
      "images/nexon-09.jpeg"
    ],
    "views360": [
      "images/nexon-01.jpg",
      "images/nexon-02.jpeg",
      "images/nexon-03.jpeg",
      "images/nexon-04.jpeg",
      "images/nexon-05.jpeg",
      "images/nexon-06.jpeg",
      "images/nexon-07.jpeg",
      "images/nexon-08.jpeg",
      "images/nexon-09.jpeg",
      "images/nexon-10.jpeg",
      "images/nexon-11.jpeg",
      "images/nexon-12.jpeg",
      "images/nexon-13.jpeg",
      "images/nexon-14.jpeg",
      "images/nexon-15.jpeg",
      "images/nexon-16.jpeg",
      "images/nexon-17.jpeg",
      "images/nexon-18.jpeg"
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
let activeImg;
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

/* ── DOUBLE-BUFFER STATE ── */
let imgA, imgB, activeLayer = 'A';

/* ── INIT ── */
function init() {
  // Reuse existing <img id="view360-img"> as layer A
  imgA = document.getElementById('view360-img');
  imgA.id = 'view360-imgA';
  imgA.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity 0.2s ease;opacity:1;pointer-events:none;';

  // Create hidden layer B
  imgB = document.createElement('img');
  imgB.id  = 'view360-imgB';
  imgB.alt = '360 view';
  imgB.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:opacity 0.2s ease;opacity:0;pointer-events:none;';
  canvas.appendChild(imgB);

  // Keep drag-hint on top
  if (dragHint) { dragHint.style.zIndex = '10'; canvas.appendChild(dragHint); }

  console.log(`✅ ${vehicleData.length} vehicles ready · smooth 360° active`);
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

  document.getElementById('img-badge').textContent = `${v.company} · ${v.model}`;

  // ── GALLERY: stack all images in main-image-wrap, show/hide by index ──
  // This works on file:// because images are in the DOM from the start,
  // not dynamically assigned via src after page load.
  const mainWrap = mainImg.parentElement;

  // Remove any previously stacked gallery imgs (keep the badge overlay)
  mainWrap.querySelectorAll('.gallery-slide').forEach(el => el.remove());

  // Hide the original static <img> — we'll use our own stacked imgs
  mainImg.style.display = 'none';

  let activeGalleryIndex = 0;

  const gallerySlides = imgs.map((src, i) => {
    const slide = document.createElement('img');
    slide.src       = src;
    slide.alt       = `${v.company} ${v.model} view ${i + 1}`;
    slide.className = 'gallery-slide';
    slide.style.cssText = `
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: ${i === 0 ? '1' : '0'};
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    mainWrap.appendChild(slide);
    return slide;
  });

  function switchGallery(index) {
    gallerySlides[activeGalleryIndex].style.opacity = '0';
    gallerySlides[index].style.opacity = '1';
    activeGalleryIndex = index;
  }

  // Build thumbnail strip
  thumbStrip.innerHTML = '';
  imgs.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `View ${i + 1}`;
    if (i === 0) thumb.classList.add('active');
    thumb.addEventListener('click', () => {
      switchGallery(i);
      thumbStrip.querySelectorAll('img').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
    thumbStrip.appendChild(thumb);
  });

  // ── 360°: inject ALL frame <img> tags into canvas DOM ──
  // Removes reliance on new Image() preloading which fails on file://
  currentFrames = v.views360 && v.views360.length ? v.views360 : imgs;
  currentFrame  = 0;
  activeLayer   = 'A';

  // Remove old frame imgs (keep imgA, imgB, dragHint)
  canvas.querySelectorAll('.frame-slide').forEach(el => el.remove());

  // Inject every frame as a hidden <img> so browser loads them from DOM
  const frameSlides = currentFrames.map((src, i) => {
    const fi = document.createElement('img');
    fi.src       = src;
    fi.alt       = `360 frame ${i + 1}`;
    fi.className = 'frame-slide';
    fi.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:0;pointer-events:none;display:block;';
    canvas.insertBefore(fi, imgA); // insert behind the crossfade layers
    return fi;
  });

  // Override updateFrame to use frameSlides instead of setting src on imgA/imgB
  window._frameSlides = frameSlides;

  // Reset double-buffer layers (make transparent — frameSlides do the display)
  imgA.style.opacity = '0';
  imgB.style.opacity = '0';
  imgA.src = '';
  imgB.src = '';

  updateFrame(0, true);
}

/* ── 360 VIEWER — DOM-stack approach (works on file://) ── */
function updateFrame(index, instant = false) {
  if (!currentFrames.length) return;
  index = ((index % currentFrames.length) + currentFrames.length) % currentFrames.length;

  const slides = window._frameSlides;
  if (!slides || !slides.length) return;

  const prev = currentFrame;
  currentFrame = index;

  if (instant) {
    slides.forEach((s, i) => { s.style.transition = 'none'; s.style.opacity = i === index ? '1' : '0'; });
  } else {
    slides[prev].style.transition = 'opacity 0.18s ease';
    slides[prev].style.opacity    = '0';
    slides[index].style.transition = 'opacity 0.18s ease';
    slides[index].style.opacity    = '1';
  }

  // Progress bar
  rotationFill.style.width = ((index / currentFrames.length) * 100) + '%';

  // Frame counter
  if (frameCounter) {
    const spans = frameCounter.querySelectorAll('span');
    if (spans[0]) spans[0].textContent = `Frame ${index + 1} / ${currentFrames.length}`;
  }
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
  autoInterval = setInterval(nextFrame, 150);
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
  if (Math.abs(diff) > 8) {
    canvas.addEventListener('mousemove', e => {
  if (!isDragging) return;

  const diff = e.clientX - startX;
  const framesToMove = Math.floor(diff / 5); // sensitivity

  if (framesToMove !== 0) {
    updateFrame(currentFrame + framesToMove);
    startX = e.clientX;
  }
});
  
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
