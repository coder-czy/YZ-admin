/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GLOB_APP_TITLE: string;
	readonly VITE_PORT: number;
	readonly VITE_OPEN: boolean;
	readonly VITE_REPORT: boolean;
	readonly VITE_BUILD_GZIP: boolean;
	readonly VITE_DROP_CONSOLE: boolean;
	readonly VITE_API_URL: boolean;
	readonly VITE_USER_NODE_ENV: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
