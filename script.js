let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
  menu.classList.add('active');
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove('active');
})

const heading = document.getElementById('typewriter');
const text = heading.innerText;
heading.innerText = '';

const words = text.split(' '); 
let wordIndex = 0;
let letterIndex = 0;

function animate() {
  if (wordIndex < words.length) {
    const currentWord = words[wordIndex];
    heading.innerText += currentWord[letterIndex];
    letterIndex++;
    if (letterIndex == currentWord.length) {
    heading.innerText += ''; 
      wordIndex++;
      letterIndex = 0;
    }
  } else {
    clearInterval(timer);
  }
}

const timer = setInterval(animate, 100); 


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

