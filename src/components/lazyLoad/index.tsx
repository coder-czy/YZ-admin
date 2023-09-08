import React, { Suspense } from "react";
import { Spin } from "antd";

/**
 * @description 加载组件前添加loading
 * @param Component 需要渲染的组件
 * @returns
 */
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Component />
		</Suspense>
	);
};

export default lazyLoad;
