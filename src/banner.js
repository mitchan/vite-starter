import styles from './banner.module.css';

export const addBanner = (text) => {
  const el = document.querySelector('#content');
  if (!el) {
    return;
  }

  el.textContent = text;
  el.classList.add(styles.content);

  import('./banner.module.css').then((styles) => {
    el.classList.add(styles.content);
  });
};
