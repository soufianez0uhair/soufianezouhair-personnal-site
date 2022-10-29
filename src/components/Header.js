import {AiFillHome} from 'react-icons/ai';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link"><AiFillHome className="icon icon--home" /></Link>
            <Link to="/about" className="header__link">About</Link>
            <Link to="/projects" className="header__link">Projects</Link>
            <Link to="/contact" className="header__link">Contact</Link>
        </header>
    )
}

export default Header;