export interface MetaType {
	keepAlive?: boolean;
	requireAuth?: boolean;
	title?: string;
	key?: string;
}

export interface RouteObject {
	children?: RouteObject[];
	element?: React.ReactNode;
	id?: string;
	meta?: MetaType;
	path?: string;
	isLink?: boolean;
	index?: boolean;
}
