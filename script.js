const images = [
  'wifey.jpg','wifey1.jpg','wifey2.jpg','wifey3.jpg',
  'wifey4.jpg','wifey5.jpg','wifey6.jpg','wifey7.jpg',
  'wifey8.jpg','wifey9.jpg','wifey10.jpg','wifey11.jpg'
];

const bg = document.getElementById('bg');
const music = document.getElementById('music');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const startBtn = document.getElementById('startBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

images.forEach((img, i) => {
  const tile = document.createElement('div');
  tile.className = 'bg-tile';
  tile.style.backgroundImage = `url(${img})`;
  tile.style.animationDelay = `${i * 1}s`;
  bg.appendChild(tile);
});

startBtn.addEventListener('click', () => {
  music.play();
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

yesBtn.addEventListener('click', () => {
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
