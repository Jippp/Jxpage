import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APIURL } = loadEnv(mode, process.cwd());

  return {
    server: {
      open: "/",
      proxy: {
        // 开发环境代理配置
        "/api": {
          target: VITE_APIURL,
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
    plugins: [
      react(),
      // 图片压缩
      ViteImageOptimizer(),
    ],
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
    // 扩展默认的文件类型
    // assetsInclude: [],
    // 打包优化
    build: {
      rollupOptions: {
        output: {
          // 小于该值会合并，单位b 防止有太多的chunk
          experimentalMinChunkSize: 20 * 1024,
          // 代码分割
          manualChunks: {
            "react-ventor": ["react", "react-dom"],
            markdown: ["react-markdown", "vditor", "remark-gfm"],
            highlight: ["highlight.js"],
            "ui-library": ["antd"],
          },
          // 入口文件
          entryFileNames: "[name]-[hash].js",
          // 非入口文件
          chunkFileNames: "chunk/[name]-[hash].js",
          assetFileNames: `assets/[name]_[hash][extname]`,
        },
      },
    },
  };
});
