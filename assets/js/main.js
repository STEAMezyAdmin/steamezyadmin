document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('#primary-navigation');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-open');
    });
  }

  const GALLERY_PHOTOS = [
    { src: 'assets/gallery/photo1.jpg', title: 'Hands-On Science Discovery Lab', desc: 'Young learners conducting safe colour-chemistry and physics experiments.' },
    { src: 'assets/gallery/photo2.jpg', title: 'Robotics & Coding Studio', desc: 'Building and programming autonomous robots in our Afterschool Maker Lab.' },
    { src: 'assets/gallery/photo3.jpg', title: 'Sensory Daycare Suite', desc: 'Warm, tactile light-table and wooden block discovery for infants and toddlers.' },
    { src: 'assets/gallery/photo4.jpg', title: 'Preschool Screen-Free Coding', desc: 'Sequencing floor robots with physical logic tiles in our Pre-K classroom.' },
    { src: 'assets/gallery/photo5.jpg', title: 'Engineering & Bridge Challenges', desc: 'Testing structural stability, pulleys, and gears through collaborative builds.' },
    { src: 'assets/gallery/photo6.jpg', title: 'Creative Arts & Maker Atelier', desc: 'Sculpting, botanical printmaking, and stop-motion animation projects.' },
    { src: 'assets/gallery/photo7.jpg', title: 'Academia STEAM Training Workshop', desc: 'Faculty Development Program (FDP) and college IoT/Robotics bootcamp in action.' },
    { src: 'assets/gallery/photo8.jpg', title: 'Corporate Innovation & Design Thinking', desc: 'Rapid prototyping and team hackathon sessions near Keeranatham SEZ IT Park.' }
  ];

  const mainImg = document.querySelector('#gallery-main-img');
  const mainTitle = document.querySelector('#gallery-main-title');
  const mainDesc = document.querySelector('#gallery-main-desc');
  const mainCounter = document.querySelector('#gallery-counter');
  const rollerTrack = document.querySelector('#gallery-roller-track');
  const prevBtn = document.querySelector('#gallery-prev');
  const nextBtn = document.querySelector('#gallery-next');

  if (mainImg && rollerTrack) {
    let currentIndex = 0;
    GALLERY_PHOTOS.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `gallery-thumb-btn${index === 0 ? ' is-active' : ''}`;
      btn.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
      btn.addEventListener('click', () => showSlide(index));
      rollerTrack.appendChild(btn);
    });

    const thumbButtons = rollerTrack.querySelectorAll('.gallery-thumb-btn');

    function showSlide(index) {
      currentIndex = (index + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
      const item = GALLERY_PHOTOS[currentIndex];
      mainImg.src = item.src;
      if (mainTitle) mainTitle.textContent = item.title;
      if (mainDesc) mainDesc.textContent = item.desc;
      if (mainCounter) mainCounter.textContent = `${currentIndex + 1} / ${GALLERY_PHOTOS.length}`;
      thumbButtons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === currentIndex));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  }

  const waBtn = document.querySelector('#whatsapp-float-btn');
  if (waBtn) {
    const greeting = 'Hi STEAMezy Labs! I would like to enquire about your programs and schedule a visit at your Keeranatham, Coimbatore campus.';
    waBtn.href = `https://wa.me/918870372926?text=${encodeURIComponent(greeting)}`;
  }

  const visitorCountEl = document.querySelector('#visitor-count');
  if (visitorCountEl) {
    let count = parseInt(localStorage.getItem('steamezy_visitors') || '14820', 10) + 1;
    localStorage.setItem('steamezy_visitors', count);
    visitorCountEl.textContent = count.toLocaleString('en-IN');
  }
});