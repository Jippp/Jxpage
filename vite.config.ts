import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/",
    proxy: {
      // 开发环境代理配置
      "/api": {
        target: "http://47.116.21.62:1937",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    // 路径别名配置
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  // 全局常量配置
  define: {
    TOPHEADER_HEIGHT: 60,
    BOTTOMFOTTER_HEIGHT: 20,
  },
  css: {
    preprocessorOptions: {
      // less全局变量，可直接在.less文件中使用
      less: {
        additionalData: '@import "@/assets/styles/variables.less";',
        javascriptEnabled: true,
      },
    },
  },
});
