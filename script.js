let currentIdx = 0;
const screenSequence = [
    'screen-1',
    'screen-photos',
    'screen-2',
    'screen-4',
    'screen-5', // Yeh aapki 3D Book screen hai
    'screen-6',
    'screen-7',
    'screen-8',
    'screen-9'
];

const photoPages = document.querySelectorAll('.album-page');
let currentPhotoIdx = 0;

function nextScreen() {
    const currentId = screenSequence[currentIdx];
    const currentEl = document.getElementById(currentId);
    if (currentEl) currentEl.classList.remove('active');

    currentIdx++;
    
    if (currentIdx < screenSequence.length) {
        const nextId = screenSequence[currentIdx];
        const nextEl = document.getElementById(nextId);
        if (nextEl) nextEl.classList.add('active');

        if (nextId === 'screen-4') startTypingMessage();
        if (nextId === 'screen-5') startBookTypewriter(); // Book khulne par typing shuru
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

// Screen 4 Text
const secretText = `Happy Best Friend Day 💖

Sach kahu to meri life me bahut log aaye aur gaye, lekin tumhari jagah koi nahi le sakta 🥺.

Tum sirf meri best friend nahi ho, balki meri har smile, har ache moment aur har yaad ka ek bahut khaas hissa ho 💞.`;

let isTypingStarted = false;
function startTypingMessage() {
    if (isTypingStarted) return;
    isTypingStarted = true;
    let i = 0;
    const box = document.getElementById('typing-container');
    box.innerHTML = "";
    
    function type() {
        if (i < secretText.length) {
            box.innerHTML += secretText.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

// ==========================================
// NEW: 3D BOOK TYPEWRITER LOGIC (Screen 5)
// ==========================================
const leftPageText = `Main hamesha ye nahi bata pata ki tum mere liye kitni important ho 🥺, lekin itna zaroor jaanta hu ki tumhari khushi dekh kar mujhe bhi khushi milti hai 🌸.\n\nTumhari respect aur value meri life me bahut zyada hai 💞.`;
const rightPageText = `Chahe kitni bhi dooriyan ho ya kitna bhi time beet jaye ⏱️, main hamesha tumhare liye dua karunga ki tum hamesha khush raho 💮.\n\nThank you meri life ka itna beautiful part banne ke liye 🥰.`;

let isBookTypingStarted = false;
function startBookTypewriter() {
    if (isBookTypingStarted) return;
    isBookTypingStarted = true;

    // HTML ke purane static text ko clear kar rahe hain
    const leftPage = document.querySelector('.left-page p');
    const rightPage = document.querySelector('.right-page p');
    leftPage.innerHTML = "";
    rightPage.innerHTML = "";

    let leftTextIdx = 0;
    let rightTextIdx = 0;

    // Pehle left page par type hoga
    function typeLeft() {
        if (leftTextIdx < leftPageText.length) {
            let char = leftPageText.charAt(leftTextIdx);
            leftPage.innerHTML += char === '\n' ? '<br>' : char;
            leftTextIdx++;
            setTimeout(typeLeft, 30);
        } else {
            // Left page poora hone ke baad right page shuru hoga
            setTimeout(typeRight, 500);
        }
    }

    // Phir right page par type hoga
    function typeRight() {
        if (rightTextIdx < rightPageText.length) {
            let char = rightPageText.charAt(rightTextIdx);
            rightPage.innerHTML += char === '\n' ? '<br>' : char;
            rightTextIdx++;
            setTimeout(typeRight, 30);
        }
    }

    typeLeft();
}

// Mouse Trail
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

// Touch Trail
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

// Stars
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

// Falling Petals
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
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'C') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'U') || e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
    }
});
document.addEventListener('visibilitychange', () => {
    const container = document.querySelector('.book-container');
    if (document.hidden) container.style.filter = 'blur(60px)';
    else container.style.filter = 'none';
});
document.addEventListener('copy', (e) => e.preventDefault());
