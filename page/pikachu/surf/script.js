gsap.registerPlugin(EasePack);
let surfingDuration = 1.4;

gsap.to('#sparkles > *', { transformOrigin: '50% 50%', opacity: 0.5, scale: 0.9, ease: '',
  stagger: {
    each: 1.6,
    repeat: -1,
    yoyo: true,
  }
});

// WITH TIMELINE
function intro() {
  gsap.set('#pika',{ opacity: 1 });
  gsap.set('#surf',{ opacity: 1 });
  const tl = gsap.timeline({ defaults: { transformOrigin: '50% 100%' } });
  tl.from('#surf', { duration: 2.6, delay: 0.2, x: -100, y: -980, opacity: 0, rotate: -45, repeat: 0, ease: 'elastic.out(1,0.65)' })
    .to('#frontwaves', { duration: 0.6, y: 30, repeat: 1, yoyo: true, ease: 'ease.in' }, "< 0.5")
    .from('#pika', { duration: 0.8, x:-80, y: -1000, opacity: 0, }, "2")
    .from('#shadow', {duration: 0.8, scale: 0, opacity: 0, }, "<")
    .to('#surf', { duration: 0.36, y: 50, repeat: 1, yoyo: true }, ">- 0.5")
    .to('#pika', { duration: 0.36, y: 50, repeat: 1, yoyo: true }, "<")
    .to('#pika', { duration: 0.36, scaleY: 0.9, repeat: 1, yoyo: true }, "<")
  return tl;
}

function surfing() {
  gsap.set('#pika',{ opacity: 1 });
  gsap.set('#surf',{ opacity: 1 });
  const tl = gsap.timeline({ defaults: { duration: surfingDuration, repeat: -1, yoyo: true, ease: '' } });
  tl.to('#pika', { yPercent: -40 })
    .to('#right-ear', { rotation: -17, transformOrigin: '100% 100%' }, "<")
    .to('#left-ear', { rotation: -15, transformOrigin: '100% 110%' }, "<")
    .to('#tail', { rotation: -40, transformOrigin: '100% 90%' } , "<-0.1")
    .to('#left-arm', { rotation: -20, xPercent: 20, transformOrigin: '120% 100%' }, "<")
    .to('#right-arm', { rotation: 25, xPercent: -10, transformOrigin: '0% 100%' }, "<")
    .to('#left-feet', { rotation: -20, yPercent: 15, transformOrigin: '50% 50%' }, "<- 0.1")
    .to('#right-feet', { rotation: 30, xPercent: 10, transformOrigin: '50% 50%' }, "<- 0.1")
    .to('#face', { yPercent: -7 }, "<")
    .to('#surf', { yPercent: -30 }, "< 0.2")
    .to('#shadow', { scale: 0.6,  opacity: 0.2, xPercent: 5, transformOrigin: '50% 50%' }, "<")
    .to('#frontwaves', { y: +15 }, "<");
  return tl;
}

const main = gsap.timeline();
main.add(intro());
main.add(surfing());

// ScrubGSAPTimeline(main);

// WITHOUT TIMELINE
// gsap.to('#pika', {
//   duration: surfingDuration,
//   yPercent: -25,
//   repeat: -1,
//   yoyo: 'true',
// })
// gsap.to('#right-ear', {
//   duration: surfingDuration,
//   rotation: -17,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '100% 100%',
// })
// gsap.to('#left-ear', {
//   duration: surfingDuration,
//   rotation: -15,
//   repeat: -1,
//   xPercent:-1,
//   yoyo: 'true',
//   transformOrigin: '100% 110%',
// })
// gsap.to('#tail', {
//   duration: surfingDuration,
//   rotation: -50,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '100% 90%',
// })
// gsap.to('#left-arm', {
//   duration: surfingDuration,
//   rotation: -20,
//   xPercent: 20,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '120% 100%',
// })
// gsap.to('#right-arm', {
//   duration: surfingDuration,
//   rotation: 25,
//   xPercent: -10,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '0% 100%',
// })
// gsap.to('#left-feet', {
//   duration: surfingDuration,
//   rotation: -20,
//   yPercent: 15,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '50% 50%',
// })
// gsap.to('#right-feet', {
//   duration: surfingDuration,
//   rotation: 30,
//   yPercent: 10,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '33% 50%',
// })
// gsap.to('#face', {
//   duration: surfingDuration,
//   yPercent: -7,
//   repeat: -1,
//   yoyo: 'true',
// })
// gsap.from('#surf', {
//   duration: surfingDuration,
//   yPercent: -30,
//   repeat: -1,
//   yoyo: 'true',
// })
// gsap.to('#shadow', {
//   duration: surfingDuration,
//   scale: 0.6,
//   xPercent: 5,
//   repeat: -1,
//   yoyo: 'true',
//   transformOrigin: '50% 50%',
// })