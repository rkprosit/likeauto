const bikes = [
  {
    name: 'Apache RR 310',
    brand: 'TVS',
    category: 'sport',
    spec: '312cc · 38 PS · 6-speed',
    price: '₹2,62,240*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Apache_RR_310_2024.jpg/960px-Apache_RR_310_2024.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Apache RTR 310',
    brand: 'TVS',
    category: 'sport',
    spec: '312cc · 35.6 PS · Naked',
    price: '₹2,25,240*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_rtr_310.jpg/960px-Apache_rtr_310.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Apache RTR 200 4V',
    brand: 'TVS',
    category: 'sport',
    spec: '197cc · 20.8 PS · 4V',
    price: '₹1,42,000*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/TVS_Apache_RTR_200_4V_Front-Right_Profile.jpg/960px-TVS_Apache_RTR_200_4V_Front-Right_Profile.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Apache RTR 160 4V',
    brand: 'TVS',
    category: 'sport',
    spec: '159.7cc · 17.5 PS · ABS',
    price: '₹1,19,140*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TVS_Apache_RTR_160_4V.jpg/960px-TVS_Apache_RTR_160_4V.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Apache RTR 160',
    brand: 'TVS',
    category: 'sport',
    spec: '159.7cc · 16 PS · Twin Disc',
    price: '₹1,13,140*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TVS_Apache_RTR_160_4V.jpg/960px-TVS_Apache_RTR_160_4V.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Ronin 225',
    brand: 'TVS',
    category: 'commuter',
    spec: '225.9cc · 20.4 PS · Retro Roadster',
    price: '₹1,26,690*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/TVS_Radeon_01.jpg/960px-TVS_Radeon_01.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Raider 125',
    brand: 'TVS',
    category: 'commuter',
    spec: '124.8cc · 11.4 PS · Sporty Commuter',
    price: '₹83,410*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/TVS_Raider.jpg/960px-TVS_Raider.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Radeon',
    brand: 'TVS',
    category: 'commuter',
    spec: '109.7cc · 8.2 PS · 5-speed',
    price: '₹58,450*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/TVS_Radeon_01.jpg/960px-TVS_Radeon_01.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Sport',
    brand: 'TVS',
    category: 'commuter',
    spec: '109.7cc · 8.1 PS · Budget Ride',
    price: '₹58,750*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/TVS_Radeon_01.jpg/960px-TVS_Radeon_01.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Star City Plus',
    brand: 'TVS',
    category: 'commuter',
    spec: '109.7cc · 8.2 PS · City Commuter',
    price: '₹72,200*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/TVS_Radeon_01.jpg/960px-TVS_Radeon_01.jpg',
    emoji: '🏍️',
  },
  {
    name: 'Jupiter 110',
    brand: 'TVS',
    category: 'scooter',
    spec: '110cc · 7.8 PS · 6L Storage',
    price: '₹73,975*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/TVS_Jupiter_Scooter.jpg/960px-TVS_Jupiter_Scooter.jpg',
    emoji: '🛵',
  },
  {
    name: 'Jupiter 125',
    brand: 'TVS',
    category: 'scooter',
    spec: '124.8cc · 8.4 PS · SmartXonnect',
    price: '₹81,110*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/TVS_Jupiter_Scooter.jpg/960px-TVS_Jupiter_Scooter.jpg',
    emoji: '🛵',
  },
  {
    name: 'Ntorq 125',
    brand: 'TVS',
    category: 'scooter',
    spec: '124.8cc · 9.4 PS · Race Edition',
    price: '₹83,350*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TVS_Ntorq_125_blue.jpg/960px-TVS_Ntorq_125_blue.jpg',
    emoji: '🛵',
  },
  {
    name: 'Ntorq 150',
    brand: 'TVS',
    category: 'scooter',
    spec: '149.5cc · 10.2 PS · Big Bore',
    price: '₹1,16,000*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TVS_Ntorq_125_blue.jpg/960px-TVS_Ntorq_125_blue.jpg',
    emoji: '🛵',
  },
  {
    name: 'Scooty Zest 110',
    brand: 'TVS',
    category: 'scooter',
    spec: '109.7cc · 7.4 PS · Youth Scooter',
    price: '₹65,800*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/TVS_Scooty_ES.jpg/960px-TVS_Scooty_ES.jpg',
    emoji: '🛵',
  },
  {
    name: 'iQube',
    brand: 'TVS',
    category: 'electric',
    spec: '2.2 kWh · 75 km Range · Electric',
    price: '₹1,15,822*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Tvs_i_qube.jpg',
    emoji: '⚡',
  },
  {
    name: 'Orbiter',
    brand: 'TVS',
    category: 'electric',
    spec: 'Electric · Connected Scooter',
    price: '₹95,250*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Tvs_i_qube.jpg',
    emoji: '⚡',
  },
  {
    name: 'XL 100',
    brand: 'TVS',
    category: 'scooter',
    spec: '99.7cc · Moped · 1-litre Tank',
    price: '₹43,900*',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/TVS_XL100_motorbike.jpg/960px-TVS_XL100_motorbike.jpg',
    emoji: '🛵',
  },
];

const categoryLabels = {
  sport: 'Sport',
  commuter: 'Commuter',
  scooter: 'Scooter',
  electric: 'Electric',
};

const grid = document.getElementById('bikeGrid');

function bikeImgFallback(img, emoji) {
  const box = img.closest('.bike-image');
  if (!box) return;
  box.classList.add('place');
  box.innerHTML = emoji;
}

function renderBikes(filter) {
  grid.innerHTML = '';
  bikes
    .filter((b) => filter === 'all' || b.category === filter)
    .forEach((b, i) => {
      const card = document.createElement('article');
      card.className = 'bike-card';
      card.style.animationDelay = `${i * 0.07}s`;
      const imageHtml = b.photo
        ? `<img src="${b.photo}" alt="${b.name}" loading="lazy" decoding="async" onerror="bikeImgFallback(this, '${b.emoji}')">`
        : `<div class="bike-image place">${b.emoji}</div>`;
      card.innerHTML = `
        <div class="bike-image">${imageHtml}</div>
        <div class="bike-body">
          <span class="bike-tag">${categoryLabels[b.category]}</span>
          <h3>${b.name}</h3>
          <p class="bike-spec">${b.spec}</p>
          <div class="bike-footer">
            <span class="bike-price">${b.price}</span>
            <a href="#contact" class="bike-link">Book Test Ride</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
}

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderBikes(btn.dataset.filter);
  });
});

grid.addEventListener('pointermove', (e) => {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  const card = e.target.closest('.bike-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `rotateY(${px * 12}deg) rotateX(${-py * 12}deg) translateY(-8px)`;
});

grid.addEventListener('pointerleave', () => {
  grid.querySelectorAll('.bike-card').forEach((c) => {
    c.style.transform = '';
  });
});

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
if (!finePointer.matches) {
  document.documentElement.classList.add('no-tilt');
}

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.email || !data.phone || !data.bike) return;
  statusEl.textContent = `Thanks ${data.name.split(' ')[0]}! Our team will call you within 24 hours to arrange the ${data.bike} test ride.`;
  statusEl.classList.remove('error');
  form.reset();
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

const heroSound = document.getElementById('heroSound');
const heroVideo = document.querySelector('.hero-video video');

function tryHeroPlay() {
  if (!heroVideo) return;
  heroVideo.muted = true;
  const p = heroVideo.play();
  if (p) p.catch(() => {});
}

if (heroVideo) {
  tryHeroPlay();
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((ev) => {
    window.addEventListener(ev, tryHeroPlay, { passive: true });
  });
}

if (heroSound && heroVideo) {
  heroSound.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    heroSound.textContent = heroVideo.muted ? '🔇' : '🔊';
    heroSound.setAttribute('aria-label', heroVideo.muted ? 'Unmute video' : 'Mute video');
    if (!heroVideo.muted) {
      heroVideo.play().catch(() => {});
    }
  });
}

renderBikes('all');
