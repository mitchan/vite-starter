// import { initializeCounter } from './counter';

// initializeCounter();

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
