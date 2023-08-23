import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

import { convertBoolean } from './src/utils/getEnv'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd())

  return {
    // 服务配置
    server: {
      host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: Number(env.VITE_PORT),
      open: convertBoolean(env.VITE_OPEN),
      cors: true,
    },

    resolve: {
      // 路径别名
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    // 插件配置
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],

    css: {},

    esbuild: {
      pure: convertBoolean(env.VITE_DROP_CONSOLE)
        ? ['console.log', 'debugger']
        : [],
    },
    // 打包配置
    build: {
      assetsDir: resolve(__dirname, './public'),
      outDir: 'dist',

      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: 'esbuild',
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },

      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})
