let currentIdx = 0;
// Ekdam smooth array flow system
const screenSequence = [
    'screen-1',
    'screen-photos',
    'screen-2',
    'screen-4',
    'screen-5',
    'screen-6',
    'screen-7',
    'screen-8',
    'screen-9'
];

const photoPages = document.querySelectorAll('.album-page');
let currentPhotoIdx = 0;

function nextScreen() {
    // Purani screen ko hide karo
    const currentId = screenSequence[currentIdx];
    const currentEl = document.getElementById(currentId);
    if (currentEl) currentEl.classList.remove('active');

    // Agli screen par jao
    currentIdx++;
    
    if (currentIdx < screenSequence.length) {
        const nextId = screenSequence[currentIdx];
        const nextEl = document.getElementById(nextId);
        if (nextEl) nextEl.classList.add('active');

        // Spawners trigger karein
        if (nextId === 'screen-4') startTypingMessage();
        if (nextId === 'screen-7') generateButterflies();
    }
}

function changePhoto(dir) {
    photoPages[currentPhotoIdx].classList.remove('active-photo');
    currentPhotoIdx += dir;

    if (currentPhotoIdx < 0) {
        currentPhotoIdx = 0;
    }
    
    if (currentPhotoIdx >= photoPages.length) {
        currentPhotoIdx = photoPages.length - 1;
        nextScreen(); 
        return;
    }

    photoPages[currentPhotoIdx].classList.add('active-photo');
    
    const nextBtn = document.getElementById('next-photo-btn');
    if (currentPhotoIdx === photoPages.length - 1) {
        nextBtn.innerHTML = "Open Message Letter 💌";
    } else {
        nextBtn.innerHTML = "Next Photo ➡";
    }
}

function openEnvelope() {
    const wrapper = document.querySelector('.envelope-wrapper');
    if(!wrapper.classList.contains('open')) {
        wrapper.classList.add('open');
        setTimeout(() => {
            nextScreen();
        }, 2000);
    }
}

const secretText = `Happy Best Friend Day 💖

Sach kahu to meri life me bahut log aaye aur gaye, lekin tumhari jagah koi nahi le sakta 🥺.

Tum sirf meri best friend nahi ho, balki meri har smile, har ache moment aur har yaad ka ek bahut khaas hissa ho 💞.

Tumse baat karke din accha lagta hai 😊, aur jab baat nahi hoti to kuch na kuch missing sa feel hota hai 🥺.

Tumhari care, tumhari baatein aur tumhara saath mere liye bahut precious hai ❤️.`;

let isTypingStarted = false;
function startTypingMessage() {
    if (isTypingStarted) return;
    isTypingStarted = true;
    
    let i = 0;
    const box = document.getElementById('typing-container');
    box.innerHTML = ""; // Clear content before typing
    
    function type() {
        if (i < secretText.length) {
            box.innerHTML += secretText.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

// Mouse Trail Logic
document.addEventListener('mousemove', (e) => {
    if (screenSequence[currentIdx] === 'screen-6') {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        particle.innerHTML = '💖';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
});

// Mobile Touch Trail Support
document.addEventListener('touchmove', (e) => {
    if (screenSequence[currentIdx] === 'screen-6') {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        particle.innerHTML = '💖';
        particle.style.left = e.touches[0].clientX + 'px';
        particle.style.top = e.touches[0].clientY + 'px';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
});

// Stars Builder
const starsBox = document.getElementById('stars');
for(let s=0; s<80; s++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '✨';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsBox.appendChild(star);
}

// Petals Loop
setInterval(() => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = Math.random() > 0.5 ? '🌸' : '💖';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (12 + Math.random() * 12) + 'px';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(petal);
    
    setTimeout(() => petal.remove(), 10000);
}, 600);

function generateButterflies() {
    const container = document.querySelector('.butterfly-container');
    if(!container) return;
    const insects = ['🦋', '✨', '🌸'];
    for(let b=0; b<15; b++) {
        setTimeout(() => {
            const flyItem = document.createElement('div');
            flyItem.className = 'butterfly-item';
            flyItem.innerHTML = insects[Math.floor(Math.random() * insects.length)];
            flyItem.style.left = (10 + Math.random() * 80) + 'vw';
            flyItem.style.top = (20 + Math.random() * 60) + 'vh';
            container.appendChild(flyItem);
        }, b * 300);
    }
}

// SECURITY FEATURES
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'C') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'PrintScreen'
    ) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('visibilitychange', () => {
    const container = document.querySelector('.book-container');
    if (document.hidden) {
        container.style.filter = 'blur(60px)';
    } else {
        container.style.filter = 'none';
    }
});

document.addEventListener('copy', (e) => e.preventDefault());
