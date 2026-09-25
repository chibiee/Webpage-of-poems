// ==========================================================================
// CINEMATIC AUTOMATIC GALLERY CAROUSEL ENGINE (WITH EDGE BLUR & DYNAMIC DOTS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.carousel-card'));
    let autoPlayTimer = null;
    let currentIndex = 0;

    // 1. Dynamic Dots Generation (Strictly 1 Dot per Card)
    if (dotsContainer) {
        dotsContainer.innerHTML = ''; // Clear leftover ghost dots
        cards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                scrollToIndex(idx);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.dot')) : [];

    // 2. Smooth Scroll to Specific Card Index
    function scrollToIndex(index) {
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;

        currentIndex = index;
        const targetCard = cards[currentIndex];
        
        // Calculate exact scroll position considering track center padding
        const trackCenter = track.offsetWidth / 2;
        const cardCenter = targetCard.offsetLeft + (targetCard.offsetWidth / 2);
        const targetScrollLeft = cardCenter - trackCenter;

        track.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });

        updateActiveStates();
    }

    // 3. Update Visual Highlights (Scale & Glow for Center Card + Exact Dot)
    function updateActiveStates() {
        const trackCenter = track.scrollLeft + (track.offsetWidth / 2);
        let closestIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, idx) => {
            const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
            const distance = Math.abs(trackCenter - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
            }
        });

        currentIndex = closestIndex;

        cards.forEach((card, idx) => {
            if (idx === currentIndex) {
                card.classList.add('is-active');
            } else {
                card.classList.remove('is-active');
            }
        });

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // 4. Button Controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            scrollToIndex(currentIndex - 1);
            resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            scrollToIndex(currentIndex + 1);
            resetAutoPlay();
        });
    }

    // 5. Automatic Carousel Timer (3.5s Interval)
    function startAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
            scrollToIndex(currentIndex + 1);
        }, 3500);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pause Auto-play when user hovers over carousel
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);
    track.addEventListener('touchstart', stopAutoPlay);
    track.addEventListener('touchend', startAutoPlay);

    // Track Manual Scroll Events (Touch/Drag Sync)
    track.addEventListener('scroll', () => {
        updateActiveStates();
    });

    // 6. PC Mouse Drag Support
    let isDown = false;
    let startX;
    let scrollLeftPos;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeftPos = track.scrollLeft;
        track.style.scrollBehavior = 'auto';
        stopAutoPlay();
    });

    track.addEventListener('mouseleave', () => { 
        if (isDown) {
            isDown = false;
            track.style.scrollBehavior = 'smooth';
            startAutoPlay();
        }
    });

    track.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            track.style.scrollBehavior = 'smooth';
            resetAutoPlay();
        }
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        track.scrollLeft = scrollLeftPos - walk;
    });

    // Initialize initial state
    setTimeout(() => {
        scrollToIndex(0);
        startAutoPlay();
    }, 100);
});