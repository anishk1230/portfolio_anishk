// ===== TYPING ANIMATION =====

const words = [
"Computer Science Engineer",
"Machine Learning Engineer",
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typing(){

const text = words[wordIndex];

if(!deleting){

document.getElementById("typing").textContent =
text.substring(0,letterIndex++);

if(letterIndex > text.length){
deleting = true;
setTimeout(typing,1200);
return;
}

}

else{

document.getElementById("typing").textContent =
text.substring(0,letterIndex--);

if(letterIndex === 0){
deleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

}

}

setTimeout(typing,80);

}

typing();


// ===== PARTICLES BACKGROUND =====

particlesJS("particles-js",{
"particles":{
"number":{"value":80},
"color":{"value":"#38bdf8"},
"shape":{"type":"circle"},
"opacity":{"value":0.5},
"size":{"value":3},
"line_linked":{
"enable":true,
"distance":150,
"color":"#38bdf8",
"opacity":0.4,
"width":1
},
"move":{
"enable":true,
"speed":2
}
},
"interactivity":{
"events":{
"onhover":{
"enable":true,
"mode":"repulse"
}
}
}
});


// ===== SCROLL ANIMATIONS =====

ScrollReveal().reveal('.home-content',{
delay:200,
distance:'50px',
origin:'bottom'
});

ScrollReveal().reveal('.skill-card',{
interval:200,
distance:'40px',
origin:'bottom'
});

ScrollReveal().reveal('.project-card',{
interval:200,
distance:'40px',
origin:'bottom'
});

ScrollReveal().reveal('.timeline-item',{
interval:200,
distance:'40px',
origin:'left'
});


// ===== DARK LIGHT MODE =====

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.innerHTML='<i class="fas fa-sun"></i>';
}
else{
toggle.innerHTML='<i class="fas fa-moon"></i>';
}

});


// ===== 3D TILT PROJECT CARDS =====

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width/2;
const centerY = rect.height/2;

const rotateX = (y-centerY)/10;
const rotateY = (centerX-x)/10;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "rotateX(0) rotateY(0) scale(1)";

});

});


// ===== MOUSE GLOW EFFECT =====

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "400px";
glow.style.height = "400px";
glow.style.borderRadius = "50%";
glow.style.background =
"radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)";
glow.style.pointerEvents = "none";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX - 200 + "px";
glow.style.top = e.clientY - 200 + "px";

});
// ===== MAGNETIC BUTTON EFFECT =====

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mousemove",(e)=>{

const rect = button.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

button.style.transform =
`translate(${x*0.2}px, ${y*0.2}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});