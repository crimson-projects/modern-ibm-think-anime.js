var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

function setDash(el) {
  if (el.nodeName === 'path') {
    el.style.dashArray = anime.setDashoffset(el);
    return [anime.setDashoffset(el) - 1, 0];
  }
  
  return 0;
}

var animations = [
  { name: '.t1', x: 195.47816, y: 152.84847, stroke: '#dd5d20' },
  { name: '.t2', x: 254.09133, y: 152.65768, stroke: '#0b9444' },
  { name: '.h1', x: 387.71374, y: 152.65768, stroke: '#1f91ac' },
  { name: '.h2', x: 383.47816, y: 210.44844, stroke: '#df871b' },
  { name: '.h3', x: 510.41374, y: 152.65768, stroke: '#1f91ac' },
  { name: '.h4', x: 507, y: 152.36218, fill: '#df871b' },
  { name: '.i1', x: 192.47816, y: 348.64847, stroke: '#dd5d20' },
  { name: '.i2', x: 188.47816, y: 463.85818, stroke: '#dd5d20' },
  { name: '.i3', x: 258.09133, y: 348.56614, stroke: '#1f91ac' },
  { name: '.i4', x: 254, y: 348.36218, fill: '#ffffff' },
  { name: '.n1', x: 387.71374, y: 348.36614, stroke: '#da3931' },
  { name: '.n2', x: 499.004, y: 348.36614, stroke: '#da3931' },
  { name: '.n3', x: 395.7, y: 348.46218, stroke: '#0b9444' },
  { name: '.n4', x: 391.70001, y: 348.66217, fill: '#da3931' },
  { name: '.n5', x: 503, y: 463.16217, fill: '#da3931' },
  { name: '.k1', x: 188.32637, y: 544.48746, stroke: '#da3931' },
  { name: '.k2', x: 200.31263, y: 659.5965, stroke: '#1f91ac' },
  { name: '.k3', x: 196.31264, y: 659.39655, fill: '#da3931' },
  { name: '.k4', x: 252.924, y: 599.49118, stroke: '#df871b' }
];

animations.forEach(function(animation, index) {
  if (animation.stroke) {
    timeline
    .add({
      targets: animation.name,
      stroke: {
        value: ['#000', animation.stroke],
        duration: 500,
        delay: 1000 + index * 30,
        easing: 'easeInOutQuad'
      },
      offset: 0
    });
  }
  if (animation.fill) {
    timeline
    .add({
      targets: animation.name,
      fill: {
        value: ['#000', animation.fill],
        duration: 500,
        delay: 1000 + index * 30,
        easing: 'easeInOutQuad'
      },
      offset: 0
    });
  }
  timeline
  .add({
    targets: animation.name,
    translateX: {
      value: [100 * (index % 4) - animation.x + 100, -100],
      duration: 500,
      delay: 1000 + index * 30,
      easing: 'easeInOutQuad'
    },
    translateY: {
      value: [100 * Math.floor(index / 4) - animation.y + 100, -100],
      duration: 500,
      delay: 1000 + index * 30,
      easing: 'easeInOutQuad'
    },
    offset: 0
  });
  timeline
  .add({
    targets: animation.name,
    strokeDashoffset: {
      value: setDash,
      duration: 800,
      delay: 1200 + index * 30,
      easing: 'easeInOutQuad'
    },
    offset: 0
  });
});

timeline
.add({
  targets: '.t1',
  opacity: 1,
  duration: 1000,
  delay: 4000,
  offset: 0
});
