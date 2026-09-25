// Function 1: Pag-click sa Initial Envelope Modal (Open)
//INTRO
//===============================================================
function startCinematicExperience() {
    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.style.display = 'none';
    }

    const cinematicIntro = document.getElementById('cinematic-intro');
    if (cinematicIntro) {
        cinematicIntro.classList.remove('hidden');
    }

    // Play Audio with Safety Handling
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.volume = 0.6;
        audio.play().catch(err => console.log("Audio playback blocked by browser:", err));
    }
}

// Function 2: Pag-click sa "Enter Your Sanctuary" o "Skip Intro"
function dismissIntro() {
    const intro = document.getElementById('cinematic-intro');
    
    if (intro) {
        // Step 1: I-fade out ang Creamy Overlay
        intro.classList.add('fade-out');

        // Step 2: I-trigger ang paglabas ng Cards sa Main Page!
        // Ito ang dahilan kung bakit ayaw lumabas ng cards kanina
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 300); // 300ms transition lag para napakasmooth ng pasok habang nagfi-fade out overlay

        // Step 3: Alisin ang overlay sa background pagkatapos ng fade animation
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1800);
    }
}


