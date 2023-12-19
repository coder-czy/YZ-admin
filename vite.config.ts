import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";

import { createProxy, wrapperEnv } from "./src/utils/getEnv";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	const ViteEnv = wrapperEnv(env);

	return {
		// 服务配置
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: Number(env.VITE_PORT),
			open: ViteEnv.VITE_OPEN,
			cors: true,
			proxy: createProxy(ViteEnv.VITE_PROXY)
		},

		resolve: {
			// 路径别名
			alias: {
				"@": resolve(__dirname, "./src")
			},
			extensions: [".mjs", ".js", ".ts", ".tsx", ".json"]
		},
		// 插件配置
		plugins: [
			react(),
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/svg")],
				symbolId: "icon-[dir]-[name]"
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * gzip compress
			ViteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				})
		],

		css: {},

		esbuild: {
			pure: ViteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		// 打包配置
		base: "./",
		build: {
			assetsDir: resolve(__dirname, "./public"),
			outDir: "dist",

			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			minify: "esbuild",
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			sourcemap: false,
			// 禁用 gzip 压缩大小报告，可略微减少打包时间
			reportCompressedSize: false,
			// 规定触发警告的 chunk 大小
			chunkSizeWarningLimit: 2000,
			rollupOptions: {
				output: {
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
