import React from "react";
import s from "../css/modules/header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__body}>
                <div className={s.header__row}>
                    <div className={s.header__logo}>
                        <a href="#"><img src="https://cdn.icon-icons.com/icons2/3660/PNG/512/programming_tecnology_react_logo_native_icon_228491.png" alt=""/></a>
                    </div>
                    <nav className={`${s.header__menu} ${s.menu}`}>
                        <ul className={s.menu__list}>
                            <a href="#"><li className={s.menu__link}>Profile</li></a>
                            <a href="#"><li className={s.menu__link}>Box</li></a>
                            <a href="#"><li className={s.menu__link}>Check</li></a>
                            <a href="#"><li className={s.menu__link}>Contact</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;