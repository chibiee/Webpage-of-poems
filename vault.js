// ==========================================================================
// OPEN WHEN... VAULT ENGINE
// ==========================================================================

// 1. EDITABLE MESSAGES (I-edit lang ang text sa loob ng quotes)
const openWhenMessages = {
    miss: "Whenever you miss me, remember that I'm just a message or call away. Just touch your heart, and you'll feel my pressence",
    sleep: "Close your eyes, take a deep breath, and let go of today. Rest your mind, because you deserve peaceful and cozy sleep tonight. Goodnight my love, sleep well",
    badDay: "I'm so sorry today was tough. It's completely okay to feel drained. Take all the time you need, and remember I'm always right here in your corner. Always one call away AND always keep moving forward!",
    motivation: "You are capable of so much more than you give yourself credit for. Take it one tiny step at a time you've got this, always! ANDDD I WILL ALWAYS SUPPORT YOU I LOVE YOU!",
    laugh: "If you wanna laugh, call me, text me, i'll make you happy (just a reminder)",
    loved: "You are deeply appreciated, cherished, and loved for exactly who you are. Never forget how special you truly are to me. And you'll always be loved by me forever, kahit magsawa ka",
    overthinking: "Pause for a second. Inhale gently, exhale slowly. Most of the things you're worrying about won't matter soon. Everything will turn out fine. And if it's about me or someone, tell me we will block them together",
    reminder: "Just a gentle reminder: you are doing great, your feelings are valid, and I am always proud of you! I WILL ALWAYS LOVE YOU AUDREY ZAIRA JULIANO DAYNO"
};

// 2. VAULT INTERACTION LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.envelope-card');
    const modal = document.getElementById('vault-modal');
    const modalTitle = document.getElementById('vault-modal-title');
    const modalText = document.getElementById('vault-modal-text');
    const closeBtnX = document.getElementById('vault-modal-close');
    const closeBtn = document.getElementById('vault-modal-btn-close');
    const counterElement = document.getElementById('vault-counter');

    const openedSet = new Set();

    if (!modal || !cards.length) return;

    // Open Letter Modal
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const letterKey = card.getAttribute('data-letter');
            const titleText = card.querySelector('h4')?.textContent || "Open When...";
            const message = openWhenMessages[letterKey] || "Here is a gentle note for you ♡";

            modalTitle.textContent = titleText;
            modalText.textContent = message;

            // Mark visually as opened & update counter dynamically
            card.classList.add('is-opened');
            openedSet.add(letterKey);
            
            const remaining = cards.length - openedSet.size;
            if (counterElement) {
                counterElement.textContent = remaining > 0 
                    ? `${remaining} letter${remaining > 1 ? 's' : ''} left to explore ♡`
                    : "You've read all the letters ♡";
            }

            // Display Modal smoothly
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    // Close Modal Logic
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    if (closeBtnX) closeBtnX.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key (Accessibility)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});