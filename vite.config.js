import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
// imagetools

export default defineConfig({
  plugins: [imagetools()],
});
