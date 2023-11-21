import { ProxyOptions } from "vite";

type proxyItem = [string, string];
type proxyList = proxyItem[];
type targetProxy = Record<string, ProxyOptions>;

/**
 * @description 用于解析 .env.development 代理配置
 * @param proxy 代理数组
 */
export const createProxy = (proxy: proxyList = []) => {
	let result: targetProxy = {};
	for (const [prefix, target] of proxy) {
		const httpsRE = /^https:\/\//;
		const isHttps = httpsRE.test(target);
		result[prefix] = {
			changeOrigin: true,
			ws: true,
			rewrite: path => path.replace(new RegExp(`^${prefix}`), "/"),
			...(isHttps ? { secure: false } : {})
		};
	}
	return result;
};

/**
 * @description 将vite字符串类型的全局变量格式化为对应的类型
 * @param envConf vite全局变量
 * @returns 格式化后的vite对象
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, "\n");
		realName = realName === "true" ? true : realName === "false" ? false : realName;
		if (envName === "VITE_PORT") realName = Number(realName);
		if (envName === "VITE_PROXY") {
			try {
				realName = JSON.parse(realName);
			} catch (error) {
				console.error(error);
			}
		}
		ret[envName] = realName;
	}
	return ret;
}
