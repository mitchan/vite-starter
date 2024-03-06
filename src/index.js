// import { initializeCounter } from './counter';

// initializeCounter();

import steveImg from './assets/steve-after-a-workshop.jpg?h=400';
// import favicon from './assets/favicon-16x16.png';

const img = document.createElement('img');
img.src = steveImg;

document.getElementById('content').appendChild(img);

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});

console.log(import.meta.env);

// import from json
import { name } from './characters/gandorf.json';

console.log(name);

// import glob
// const entries = Object.entries(import.meta.glob('./logos/**/*.svg'));
// for (const [path, module] of entries) {
//   console.log({
//     path,
//     module: module()
//       .then((module) => module.default)
//       .then(console.log),
//   });
// }

console.log(import.meta.glob('./logos/**/*.svg', { eager: true }));
