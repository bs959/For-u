// Screen Flow Logic
function nextScreen(screenNumber) {
  // Purane active screen ko hatao
  document.querySelector('.screen.active-screen').classList.remove('active-screen');
  
  // Agle screen ko target karke active karo
  const nextTarget = document.getElementById(`screen${screenNumber}`);
  nextTarget.classList.add('active-screen');

  // Agar Screen 3 par aaye hain toh typewriter run karo
  if (screenNumber === 3) {
    runTypewriter();
  }
}

// Book Page Switching Logic
function toggleBookView(viewNumber) {
  document.querySelector('.book-view.active-view').classList.remove('active-view');
  document.getElementById(`view${viewNumber}`).classList.add('active-view');
}

// Typewriter Effect for Screen 3
const textMessage = "Tum sirf meri best friend nahi ho, balki meri har smile, har achhe moment aur har yaad ka ek bahut khaas hissa ho 💕🌷. Tumse baat karke din accha lagta hai 😊💫, aur jab baat nahi hoti to kuch na kuch missing sa feel hota hai 🥺🌙. Tumhari care, tumhari baatein aur tumhara saath mere liye bahut precious hai ❤️🤗.";
let index = 0;

function runTypewriter() {
  const container = document.getElementById('typewriterText');
  if (index < textMessage.length) {
    container.innerHTML += textMessage.charAt(index);
    index++;
    setTimeout(runTypewriter, 45); // Typing speed controller
  } else {
    // Type hone ke baad hi Button dikhega
    document.getElementById('typingNextBtn').style.display = 'inline-block';
  }
}

// Falling Particles Background Effect (🌸, 🌹, ✨)
setInterval(() => {
  const container = document.getElementById('petalsContainer');
  const petal = document.createElement('div');
  const pool = ['🌸', '🌹', '✨', '💖', '💫'];
  
  petal.innerText = pool[Math.floor(Math.random() * pool.length)];
  petal.classList.add('petal-item');
  
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 15 + 12 + "px";
  petal.style.animationDuration = Math.random() * 3 + 4 + "s";
  
  container.appendChild(petal);
  
  setTimeout(() => { petal.remove(); }, 7000);
}, 350);

/* =======================================================
   PRIVACY CONTROLLERS (Anti-Screenshot / Anti-Copy Guard)
   ======================================================= */

// 1. Blur Screen when user shifts focus or opens Control Center / Recorder
window.addEventListener('blur', () => {
  document.body.classList.add('blur-protection');
});
window.addEventListener('focus', () => {
  document.body.classList.remove('blur-protection');
});

// 2. Block Inspect tools, PrintScreen & Save Shortcuts
document.addEventListener('keydown', (e) => {
  // Block F12
  if (e.key === 'F12') e.preventDefault();
  
  // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+S, Ctrl+U
  if (e.ctrlKey && (e.shiftKey && (e.key === 'I' || e.key === 'J') || e.key === 's' || e.key === 'u')) {
    e.preventDefault();
  }
  
  // Blur strategy if PrintScreen is clicked (on Desktop)
  if (e.key === 'PrintScreen') {
    document.body.classList.add('blur-protection');
    alert("Screenshots are restricted for privacy! 🔒");
    setTimeout(() => { document.body.classList.remove('blur-protection'); }, 1000);
  }
});
