import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig,loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

// export default defineConfig({
//   plugins: [remix(), tsconfigPaths()],
// });
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.CLIENT_ID': JSON.stringify(env.CLIENT_ID)
    },
    plugins: [remix(), tsconfigPaths()],
  }
})