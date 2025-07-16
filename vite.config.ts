import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MasterJsUtils",
      fileName: "master-js-utils",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "gsap"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          gsap: "gsap",
        },
      },
    },
  },
});
