/**
 * @description 防抖函数
 * @param fn 需要防抖方法
 * @param delay 时间
 */
export function debounce(fn: Function, delay: number) {
	let timer: NodeJS.Timeout;
	return function (this: any, ...args: any[]) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}
