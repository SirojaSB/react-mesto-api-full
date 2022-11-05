import React from 'react';
import logo from "../images/logo.svg";
import {Link, Route, Routes} from "react-router-dom";

const Header = ({onLogout, email}) => {

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Место"/>
            <div className="header__auth-info">
                {email && <p className="header__email">{email}</p>}
                <Routes>
                    <Route path="/" element={<Link to="/sign-in" className="header__logout" onClick={onLogout}>Выйти</Link>}/>
                    <Route path="/sign-up" element={<Link to="/sign-in" className="header__auth">Войти</Link>}/>
                    <Route path="/sign-in" element={<Link to="/sign-up" className="header__auth">Регистрация</Link>}/>
                </Routes>
            </div>
        </header>
    )
}

export default Header