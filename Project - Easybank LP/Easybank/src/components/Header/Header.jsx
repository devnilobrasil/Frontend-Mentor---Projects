import logo from "../../assets/logo.svg";
import './Header.scss';
import Button from '../Button/Button'


function Header() {
    return (
        <header >
            <div className="container header__content">
                <div className="header__content_logo">
                    <img src={logo} alt="Logo Easybank" />
                </div>
                <nav className="header__content_nav">
                    <ul className="header__content_nav_items">
                        <li className="header__content_nav_items_li"><a href="#">Home</a></li>
                        <li className="header__content_nav_items_li"><a href="#">About</a></li>
                        <li className="header__content_nav_items_li">Contact</li>
                        <li className="header__content_nav_items_li">Blog</li>
                        <li className="header__content_nav_items_li">Careers</li>
                    </ul>
                </nav>
                <div>
                    <Button/>
                </div>
            </div>
        </header>
    );
}

export default Header;