// ==========================================================================
// PIXEL MASCOT LOUNGE ENGINE (ENCHANTED FOREST & SAGE GREEN)
// ==========================================================================

const canvas = document.getElementById('mascot-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// Mascot State
let mascot = {
    x: 200,
    y: 140,
    width: 40,
    height: 40,
    offsetY: 0,
    hearts: []
};


let currentBounceInterval = null;
let currentSpeechTimeout = null;

// Cute Speech Dialogues
const mascotDialogues = [
    "Thinking of you! 🌿",
    "Don't forget to hydrate today! 🍵",
    "You're doing amazing! ✨",
    "Sending warm virtual hugs! 🧸",
    "Always here cheering for you! 🌟",
    "Take a cozy break! ☕",
    "You've got this! 💚",
    "So glad you stopped by! 🍃",
    "I LOVE YOU SO SO MUCH! 💖"
];

// ==========================================================================
// BOTANICAL NATURE BACKGROUND FOR MASCOT LOUNGE
// ==========================================================================

function drawRoomBackground() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Sky / Atmosphere Gradient (Deep Night Forest to Soft Sage Glow)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGrad.addColorStop(0, '#0a1a12');
    skyGrad.addColorStop(0.6, '#132e20');
    skyGrad.addColorStop(1, '#1b3d2b');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Soft Sunlight Rays (Komorebi effect)
    ctx.save();
    ctx.fillStyle = 'rgba(255, 248, 220, 0.04)';
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.lineTo(90, 0);
    ctx.lineTo(160, canvas.height);
    ctx.lineTo(80, canvas.height);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(220, 0);
    ctx.lineTo(300, 0);
    ctx.lineTo(380, canvas.height);
    ctx.lineTo(280, canvas.height);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 3. Grassy Forest Floor
    const grassGrad = ctx.createLinearGradient(0, 130, 0, 220);
    grassGrad.addColorStop(0, '#2e6f40');
    grassGrad.addColorStop(1, '#14361e');
    ctx.fillStyle = grassGrad;
    ctx.beginPath();
    ctx.ellipse(200, 185, 230, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Soft Moss Patch under mascot
    ctx.fillStyle = 'rgba(168, 230, 207, 0.2)';
    ctx.beginPath();
    ctx.ellipse(200, 160, 85, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    // 4. Background Trees / Foliage Silhouettes
    ctx.fillStyle = '#173a25';
    // Left bush
    ctx.beginPath();
    ctx.arc(30, 130, 45, 0, Math.PI * 2);
    ctx.arc(70, 140, 35, 0, Math.PI * 2);
    ctx.fill();
    // Right bush
    ctx.beginPath();
    ctx.arc(370, 130, 50, 0, Math.PI * 2);
    ctx.arc(330, 140, 35, 0, Math.PI * 2);
    ctx.fill();

    // 5. Cute Botanical Details (Little Mushrooms & Plants)
    drawPlant(45, 150);
    drawMushroom(340, 165);
    drawMushroom(355, 172, 0.7);
}

// Helper: Draw Cute Plant Leaves
function drawPlant(x, y) {
    ctx.strokeStyle = '#81c784';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x - 10, y - 15, x - 15, y - 20);
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 10, y - 15, x + 15, y - 22);
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x, y - 18, x, y - 26);
    ctx.stroke();
}

// Helper: Draw Cute Mini Mushrooms
function drawMushroom(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    // Stem
    ctx.fillStyle = '#f5f5dc';
    ctx.beginPath();
    ctx.roundRect(-4, -8, 8, 10, 3);
    ctx.fill();

    // Cap
    ctx.fillStyle = '#e57373';
    ctx.beginPath();
    ctx.arc(0, -8, 9, Math.PI, 0);
    ctx.fill();

    // Dots
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-4, -12, 1.5, 0, Math.PI * 2);
    ctx.arc(3, -11, 1.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

// Draw Lightish Green Mascot (Mint/Sage Dino Plushie)
function drawPixelMascot() {
    if (!ctx) return;

    const x = mascot.x;
    const y = mascot.y + mascot.offsetY;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.beginPath();
    ctx.ellipse(x, mascot.y + 35, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body (Lightish Soft Green - #81c784 / #a8e6cf)
    ctx.fillStyle = '#66bb6a';
    ctx.beginPath();
    ctx.roundRect(x - 18, y - 20, 36, 36, 12);
    ctx.fill();

    // Belly Highlight (Light Mint)
    ctx.fillStyle = '#e8f5e9';
    ctx.beginPath();
    ctx.roundRect(x - 10, y - 5, 20, 18, 8);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#1b4332';
    ctx.beginPath();
    ctx.arc(x - 7, y - 8, 3, 0, Math.PI * 2);
    ctx.arc(x + 7, y - 8, 3, 0, Math.PI * 2);
    ctx.fill();

    // Eye Sparkles
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x - 8, y - 9, 1, 0, Math.PI * 2);
    ctx.arc(x + 6, y - 9, 1, 0, Math.PI * 2);
    ctx.fill();

    // Cheeks (Soft Coral Blush)
    ctx.fillStyle = 'rgba(255, 138, 128, 0.7)';
    ctx.beginPath();
    ctx.arc(x - 12, y - 3, 3, 0, Math.PI * 2);
    ctx.arc(x + 12, y - 3, 3, 0, Math.PI * 2);
    ctx.fill();

    // Little Horns / Spikes (Darker Pastel Green)
    ctx.fillStyle = '#388e3c';
    ctx.beginPath();
    ctx.arc(x - 12, y - 22, 4, 0, Math.PI * 2);
    ctx.arc(x + 12, y - 22, 4, 0, Math.PI * 2);
    ctx.arc(x, y - 24, 5, 0, Math.PI * 2);
    ctx.fill();
}

// Particle Floating Hearts & Sparkles
function drawHearts() {
    if (!ctx) return;

    for (let i = mascot.hearts.length - 1; i >= 0; i--) {
        const h = mascot.hearts[i];
        ctx.fillStyle = `rgba(129, 199, 132, ${h.opacity})`;
        ctx.font = `${h.size}px sans-serif`;
        ctx.fillText(h.symbol, h.x, h.y);

        h.y -= 1.4;
        h.opacity -= 0.02;

        if (h.opacity <= 0) {
            mascot.hearts.splice(i, 1);
        }
    }
}

// Main Animation Loop
let frameCount = 0;
function animateLounge() {
    drawRoomBackground();

    frameCount++;
    // Idle gentle floating motion
    if (!currentBounceInterval) {
        mascot.offsetY = Math.sin(frameCount * 0.06) * 3;
    }

    drawPixelMascot();
    drawHearts();

    requestAnimationFrame(animateLounge);
}

// User Actions - Handled with reset capability for Endless Taps
function triggerMascotAction(action) {
    if (action === 'bounce' || action === 'pat' || action === 'all') {
        // Clear previous bounce if currently jumping to restart smoothly
        if (currentBounceInterval) {
            clearInterval(currentBounceInterval);
        }

        let jumpCount = 0;
        currentBounceInterval = setInterval(() => {
            mascot.offsetY = -Math.abs(Math.sin(jumpCount) * 20);
            jumpCount += 0.35;
            if (jumpCount >= Math.PI) {
                clearInterval(currentBounceInterval);
                currentBounceInterval = null;
                mascot.offsetY = 0;
            }
        }, 20);
    } 

    if (action === 'heart' || action === 'all') {
        const symbols = ['💚', '🌿', '✨', '🍃'];
        for (let i = 0; i < 3; i++) {
            mascot.hearts.push({
                x: mascot.x + (Math.random() * 30 - 15),
                y: mascot.y - 10,
                size: 12 + Math.random() * 8,
                opacity: 1,
                symbol: symbols[Math.floor(Math.random() * symbols.length)]
            });
        }
    }

    if (action === 'talk' || action === 'all') {
        const bubble = document.getElementById('mascot-speech');
        const textElem = document.getElementById('speech-text');

        if (bubble && textElem) {
            if (currentSpeechTimeout) {
                clearTimeout(currentSpeechTimeout);
            }

            const randomMsg = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
            textElem.textContent = randomMsg;
            bubble.classList.remove('hidden');

            currentSpeechTimeout = setTimeout(() => {
                bubble.classList.add('hidden');
                currentSpeechTimeout = null;
            }, 2500);
        }
    }
}

// Click Directly on Canvas Mascot (Endless Loop Tapping)
if (canvas) {
    canvas.addEventListener('click', (e) => {
        triggerMascotAction('all');
    });
}

// Start Lounge Engine on Load
document.addEventListener('DOMContentLoaded', () => {
    if (canvas && ctx) {
        animateLounge();
    }
});