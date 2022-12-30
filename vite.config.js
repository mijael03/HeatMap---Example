import { defineConfig } from "vite";
import dsv from '@rollup/plugin-dsv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dsv(),
  ],
  server: {
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
});
