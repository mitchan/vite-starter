import { test, expect } from 'vitest';

import renderCharacter from './render-character';

const jsonFiles = import.meta.glob('./**/*.json', { eager: true });
for (const [path, module] of Object.entries(jsonFiles)) {
  test(`renders ${path}`, () => {
    expect(renderCharacter(module)).toMatchSnapshot();
  });
}
