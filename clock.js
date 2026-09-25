// ==========================================================================
// 4. COUNTDOWN ENGINE (HALIFAX TIMEZONE FIXED)
// ==========================================================================

function updateCountdowns() {
    const now = new Date();

    // 1. Kunin ang kasalukuyang petsa sa Halifax TimeZone nang may eksaktong YYYY, MM, DD
    const halifaxParts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Halifax',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).formatToParts(now);

    let hYear = 0, hMonth = 0, hDay = 0;
    halifaxParts.forEach(p => {
        if (p.type === 'year') hYear = parseInt(p.value, 10);
        if (p.type === 'month') hMonth = parseInt(p.value, 10) - 1; // 0-indexed for JS Date
        if (p.type === 'day') hDay = parseInt(p.value, 10);
    });

    // Pure calendar date baseline (Midnight to Midnight)
    const todayHalifax = new Date(hYear, hMonth, hDay);

    function calculateDaysLeft(targetMonth, targetDay) {
        let targetDate = new Date(hYear, targetMonth - 1, targetDay);

        // Kung lumipas na ngayong taon sa Halifax, ituro sa susunod na taon
        if (todayHalifax > targetDate) {
            targetDate.setFullYear(hYear + 1);
        }

        const diffTime = targetDate - todayHalifax;
        return Math.round(diffTime / (1000 * 60 * 60 * 24));
    }

    // Birthday: April 5 | Anniversary: August 22
    const bdayDays = calculateDaysLeft(4, 5);
    const anniDays = calculateDaysLeft(8, 22);

    function formatText(days) {
        if (days === 0) return `Today is the day! ✨`;
        return `${days} day${days > 1 ? 's' : ''} left`;
    }

    const bdayCard = document.getElementById('bdayCountdown');
    const anniCard = document.getElementById('anniCountdown');

    if (bdayCard) bdayCard.textContent = formatText(bdayDays);
    if (anniCard) anniCard.textContent = formatText(anniDays);

    // Update daily poem status preview on the 3rd card
    const dailyStatus = document.getElementById('daily-poem-status');
    if (typeof getHalifaxDailyPoem === 'function') {
        const dailyData = getHalifaxDailyPoem();
        if (dailyStatus && dailyData && dailyData.poem) {
            dailyStatus.textContent = `Today: "${dailyData.poem.title}"`;
        }
    }
}

// ==========================================================================
// 5. POEM LIBRARY ENGINE (WITH DAILY POEM NAV & GENRE FILTERS)
// ==========================================================================

let currentCategory = 'daily';

function getHalifaxDailyPoem() {
    if (typeof poems === 'undefined' || !poems.length) return null;

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Halifax',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        hour12: false
    });

    const parts = formatter.formatToParts(now);
    let year = 0, month = 0, day = 0, hour = 0;

    parts.forEach(p => {
        if (p.type === 'year') year = parseInt(p.value, 10);
        if (p.type === 'month') month = parseInt(p.value, 10) - 1;
        if (p.type === 'day') day = parseInt(p.value, 10);
        if (p.type === 'hour') hour = parseInt(p.value, 10);
    });

    const halifaxDate = new Date(year, month, day);
    if (hour < 8) {
        halifaxDate.setDate(halifaxDate.getDate() - 1);
    }

    const epochDays = Math.floor(halifaxDate.getTime() / (1000 * 60 * 60 * 24));
    const poemIndex = Math.abs(epochDays) % poems.length;

    const displayDate = halifaxDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return {
        poem: poems[poemIndex],
        dateStr: displayDate,
        dayNumber: (poemIndex + 1),
        cycleId: epochDays
    };
}

function renderPoems(itemsToRender) {
    const grid = document.getElementById('poem-grid');
    const poemCountElem = document.getElementById('poem-count');

    if (poemCountElem) {
        poemCountElem.innerText = `${itemsToRender.length} ${itemsToRender.length === 1 ? 'Poem' : 'Poems'}`;
    }

    if (!grid) return;
    grid.innerHTML = '';

    if (itemsToRender.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">No poems found matching your search...</p>`;
        return;
    }

    itemsToRender.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.onclick = () => openPoemModal(poem);

        card.innerHTML = `
            <div>
                <span class="card-category">${poem.category}</span>
                <h3>${poem.title}</h3>
                <p>${poem.content}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category, button) {
    currentCategory = category.toLowerCase();

    document.querySelectorAll('.tag-btn, .filter-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');

    filterPoems();
}

function filterPoems() {
    const searchElem = document.getElementById('poem-search');
    const searchVal = searchElem ? searchElem.value.toLowerCase() : '';

    if (currentCategory === 'daily') {
        const dailyData = getHalifaxDailyPoem();
        if (dailyData) {
            renderPoems([dailyData.poem]);
            const poemCountElem = document.getElementById('poem-count');
            if (poemCountElem) {
                poemCountElem.innerText = `Daily Poem (#${dailyData.dayNumber})`;
            }
        }
        return;
    }

    const filtered = poems.filter(poem => {
        const matchesCategory = (currentCategory === 'all') || (poem.category.toLowerCase() === currentCategory);
        const matchesSearch = poem.title.toLowerCase().includes(searchVal) || poem.content.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    renderPoems(filtered);
}

function openPoemModal(poem) {
    if (!poem) return;
    const catElem = document.getElementById('modal-category');
    const titleElem = document.getElementById('modal-title');
    const textElem = document.getElementById('modal-text');
    const modal = document.getElementById('poem-modal');

    if (catElem) catElem.innerText = poem.category;
    if (titleElem) titleElem.innerText = poem.title;
    if (textElem) textElem.innerText = poem.content;
    if (modal) modal.classList.remove('hidden');
}

function closePoemModal() {
    const modal = document.getElementById('poem-modal');
    if (modal) modal.classList.add('hidden');
}

// ==========================================================================
// 6. DUAL LIVE CLOCK ENGINE (HALIFAX & PHILIPPINES)
// ==========================================================================

function updateLiveClocks() {
    const now = new Date();

    // 1. Halifax Time & Date
    const halifaxTimeOptions = { timeZone: 'America/Halifax', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const halifaxDateOptions = { timeZone: 'America/Halifax', weekday: 'short', month: 'short', day: 'numeric' };

    const halifaxTimeStr = new Intl.DateTimeFormat('en-US', halifaxTimeOptions).format(now);
    const halifaxDateStr = new Intl.DateTimeFormat('en-US', halifaxDateOptions).format(now);

    // 2. PH Time & Date
    const phTimeOptions = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const phDateOptions = { timeZone: 'Asia/Manila', weekday: 'short', month: 'short', day: 'numeric' };

    const phTimeStr = new Intl.DateTimeFormat('en-US', phTimeOptions).format(now);
    const phDateStr = new Intl.DateTimeFormat('en-US', phDateOptions).format(now);

    // Update Elements
    const hTimeElem = document.getElementById('halifax-time');
    const hDateElem = document.getElementById('halifax-date');
    const pTimeElem = document.getElementById('ph-time');
    const pDateElem = document.getElementById('ph-date');

    if (hTimeElem) hTimeElem.textContent = halifaxTimeStr;
    if (hDateElem) hDateElem.textContent = halifaxDateStr;
    if (pTimeElem) pTimeElem.textContent = phTimeStr;
    if (pDateElem) pDateElem.textContent = phDateStr;
}

// ==========================================================================
// 7. SINGLE INITIALIZATION LISTENER
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Run live clock engine immediately & interval every second
    updateLiveClocks();
    setInterval(updateLiveClocks, 1000);

    // 2. Run countdown update on load & every minute
    updateCountdowns();
    setInterval(updateCountdowns, 60000);

    // 3. Load Daily Poem as default view on site launch
    const defaultTab = document.querySelector('.tag-btn.active') || document.querySelector('.tag-btn');
    filterCategory('daily', defaultTab);

    // 4. Auto pop-up modal for daily poem
    const dailyData = getHalifaxDailyPoem();
    if (dailyData) {
        const todayKey = `daily_poem_seen_cycle_${dailyData.cycleId}`;
        const dailyModal = document.getElementById('poem-modal');

        if (dailyModal && !localStorage.getItem(todayKey)) {
            setTimeout(() => {
                openPoemModal(dailyData.poem);
                localStorage.setItem(todayKey, 'true');
            }, 1200);
        }
    }
});