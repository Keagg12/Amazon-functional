import React from 'react';
import amazonLogo from '../../assets/images/amazon_logo.png';
import { useApp } from '../../contexts/AppContext';
const FOOTER_COLUMNS = [
  { title: 'Get to Know Us', links: ['About Us', 'Careers', 'Press Releases', 'Amazon Science'] },
  { title: 'Connect with Us', links: ['Facebook', 'Twitter', 'Instagram'] },
  { title: 'Make Money with Us', links: ['Sell on Amazon', 'Sell under Amazon Accelerator', 'Protect & Build Your Brand', 'Amazon Global Selling'] },
  { title: 'Let Us Help You', links: ['COVID-19, and Amazon', 'Your Account', 'Returns Centre', 'Help'] },
];
function Footer() {
  const { goHome } = useApp();
  return (<footer className="site-footer"><div className="footer-panel1"><button type="button" className="footer-top-btn" onClick={goHome}>Back to top</button></div><div className="footer-panel2">{FOOTER_COLUMNS.map((c) => (<div key={c.title} className="footer-column"><h4>{c.title}</h4>{c.links.map((l) => <a key={l} href="#">{l}</a>)}</div>))}</div><div className="footer-panel3"><div className="footer-logo"><img src={amazonLogo} alt="Amazon" /></div></div><div className="footer-panel4"><p>&copy; 2024 Amazon Clone | Terms of Use | Privacy Notice | Interest-Based Ads</p></div></footer>);
}
export default Footer;