const canvas = document.querySelector('.canvas');
const svg = canvas.querySelector('svg');
const beams = canvas.querySelector('.beams');
const flashOverlay = canvas.querySelector('.flash-overlay');
const pokeball = canvas.querySelector('.pokeball');
const ballCircle = pokeball.querySelector('.pokeball-circle');
const pikachu = canvas.querySelector('.pikachu');

TweenMax.set([pokeball, pikachu], {
  visibility: 'visible',
  transformOrigin: '50% 50%' });


const ballWiggle = () => {
  const tl = new TimelineMax({ repeat: 2 });
  tl.to(pokeball, .2, { x: '0%', rotation: 0 });
  tl.to(pokeball, .2, { x: '-7.5%', rotation: -5 });
  tl.to(pokeball, .2, { x: '7.5%', rotation: -2.5 });
  tl.to(pokeball, .2, { x: '-3%', rotation: -5 });
  tl.to(pokeball, .2, { x: '0%', rotation: 0 });
  return tl;
};

const pikaWiggle = () => {
  const tl = new TimelineMax({ repeat: 2 });
  tl.to(pikachu, .2, { x: '0%', rotation: 0 });
  tl.to(pikachu, .2, { x: '-7.5%', rotation: -3 });
  tl.to(pikachu, .2, { x: '7.5%', rotation: 1 });
  tl.to(pikachu, .2, { x: '-3%', rotation: -3 });
  tl.to(pikachu, .2, { x: '0%', rotation: 0 });
  return tl;
};

const pikaFlash = () => {
  const tl = new TimelineMax();
  TweenMax.set(pikachu, { transformOrigin: '40% 100%' });

  // morph body
  tl.staggerTo(pikachu.querySelectorAll('path:not(.pikachu-cheek)'), .5, {
    delay: .5,
    morphSVG: '#pikachu-morph-1__body',
    stroke: '#000',
    strokeWidth: 5,
    ease: Bounce.easeOut },
  0.005);
  tl.staggerTo(pikachu.querySelectorAll('path:not(.pikachu-cheek)'), .2, {
    fill: '#fdd900',
    ease: Bounce.easeIn },
  0.005, '-=0.5');

  // morph cheeks
  tl.to('#pikachu__cheekLeft', .25, {
    morphSVG: '#pikachu-morph-1__cheekLeft',
    stroke: '#000',
    strokeWidth: 5,
    ease: Bounce.easeOut },
  '-=0.3');
  tl.to('#pikachu__cheekRight', .25, {
    morphSVG: '#pikachu-morph-1__cheekRight',
    stroke: '#000',
    strokeWidth: 5,
    ease: Bounce.easeOut },
  '-=0.3');

  // scale
  tl.to(pikachu, .3, { delay: .2, scale: 0.8, ease: Bounce.easeOut }, '-=0.25');

  // morph to ball
  tl.staggerTo(pikachu.querySelectorAll('path'), .5, {
    morphSVG: '#pikachu-morph-2',
    stroke: '#fdd900',
    strokeWidth: 0,
    ease: Bounce.easeOut },
  0.005);
  tl.staggerTo(pikachu.querySelectorAll('path'), .2, {
    fill: '#fdd900',
    ease: Bounce.easeIn },
  0.005, '-=0.5');

  // scale
  tl.to(pikachu, .3, { delay: .2, scale: 0.6, ease: Bounce.easeOut }, '-=0.25');

  return tl;
};

const beamFlash = () => {
  const tl = new TimelineMax();
  tl.to(beams, 2, { autoAlpha: .5 });
  tl.to(flashOverlay, .35, { autoAlpha: 1 });
  tl.to(flashOverlay, .35, { autoAlpha: 0 });
  return tl;
};

const hidePika = () => {
  const tl = new TimelineMax();
  tl.to(pikachu, .35, { autoAlpha: 0 });
  tl.to(beams, .5, { autoAlpha: 0 }, '-=0.25');
  return tl;
};

const pokeCatch = () => {
  const tl = new TimelineMax({ repeat: 2 });
  tl.to(ballCircle, .5, { fill: '#d19fa0' });
  tl.to(ballCircle, .5, { fill: '#fff' }, '+=0.25');
  return tl;
};

const catchSuccess = () => {
  const tl = new TimelineMax();
  tl.to(pokeball, .2, { y: 0 });
  tl.to(pokeball, .2, { y: -30 });
  tl.to(pokeball, .1, { y: 0 });
  tl.to(pokeball, .1, { y: -15 });
  tl.to(pokeball, .2, { y: 0 });
  tl.to(pokeball, .2, { y: 0 });
  return tl;
};

const onTLComplete = () => {
  setTimeout(() => {pokeball.classList.add('pulsing');}, 500);
};

const master = new TimelineMax({
  onComplete: onTLComplete,
  onReverseComplete: onTLComplete });


const createMaster = () => {
  master.seek(0);
  master.pause();
  master.clear();

  master.add('start');
  master.add([ballWiggle, pikaWiggle]);

  master.add('startFlash', 'start+=3');
  master.add(pikaFlash(), 'startFlash');
  master.add(beamFlash(), 'startFlash');
  master.add(hidePika(), '-=0.5');

  master.add('startCatchWiggle');
  master.add([ballWiggle, pokeCatch], '-=0.25');

  master.add('catchSuccess');
  master.add(catchSuccess(), '+=3');
  master.add('end');

  master.play();
};

const createReverse = () => {
  master.seek(0);
  master.pause();
  master.clear();
  master.add(pikaFlash());
  master.reverse(0);
};

let reversed = false;
canvas.addEventListener('click', () => {
  if (pokeball.classList.contains('pulsing')) {
    pokeball.classList.remove('pulsing');
    reversed ? createReverse() : createMaster();
    reversed = !reversed;
  }
});