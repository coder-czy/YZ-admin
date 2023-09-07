import { useSelector } from "@/store";
import { Navigate } from "react-router-dom";
type props = {
	children: JSX.Element;
};

function AuthRouter({ children }: props) {
	// 如果没有token跳转登录页
	const { token } = useSelector(state => state.global);
	if (!token) return <Navigate to="/login" replace />;

	return children;
}

export default AuthRouter;
