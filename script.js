// Pages

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index){
pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");
}

function nextPage(){

if(currentPage < pages.length - 1){
currentPage++;
showPage(currentPage);
}

if(currentPage === pages.length - 1){
startTyping();
}
}

function prevPage(){

if(currentPage > 0){
currentPage--;
showPage(currentPage);
}
}

// Typing Message

const message = `Sach kahu to meri life me bahut log aaye aur gaye,
lekin tumhari jagah koi nahi le sakta 💖

Tum sirf meri best friend nahi ho,
balki meri har smile aur har yaad ka
ek bahut khaas hissa ho 🌸✨

Tumhari khushi dekh kar mujhe bhi khushi milti hai 😊

Kuch log zindagi me itne special ban jaate hain
ki unke bina sab kuch adhura sa lagta hai ❤️

Tum unhi logon me se ek ho 💫

Happy Best Friend Day Innu 💖🌸`;

let typed = false;

function startTyping(){

if(typed) return;
typed = true;

let i = 0;

const target = document.getElementById("typing");

function type(){

if(i < message.length){

target.innerHTML += message.charAt(i);
i++;

setTimeout(type,35);
}
}

type();
}

// Surprise Message

function showSurprise(){

const box = document.getElementById("surprise");

box.style.display = "block";
}

// Stars

const starsContainer = document.getElementById("stars");

for(let i=0;i<120;i++){

const star = document.createElement("div");

star.className = "star";

star.innerHTML = "✨";

star.style.left = Math.random()*100 + "%";
star.style.top = Math.random()*100 + "%";

star.style.animationDelay =
Math.random()*3 + "s";

starsContainer.appendChild(star);
}

// Hearts

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💖";

heart.style.left =
Math.random()*100 + "vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,900);

// Petals

function createPetal(){

const petal = document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌸";

petal.style.left =
Math.random()*100 + "vw";

petal.style.animationDuration =
(6 + Math.random()*5) + "s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},11000);
}

setInterval(createPetal,1200);

// Start First Page

showPage(currentPage);
