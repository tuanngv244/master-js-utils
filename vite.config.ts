import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MasterJsUtils",
      fileName: (format) => `master-js-utils.${format === 'es' ? 'mjs' : 'js'}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: (id) => {
        // Externalize all React, React-DOM, and GSAP imports
        return ['react', 'react-dom', 'react/jsx-runtime', 'gsap'].some(pkg => 
          id === pkg || id.startsWith(pkg + '/')
        );
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "React",
          gsap: "gsap",
        },
      },
    },
  },
});
