import "./index.less";

const year = new Date().getFullYear();
function Footer() {
	return <div className="footer-box">{year} © YZ-Admin By Coder Yangzi.</div>;
}

export default Footer;
