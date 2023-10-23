import React from "react";
import s from "../css/modules/aside.module.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={s.aside__body}>
                <nav className={s.aside__sidebar}>
                    <ul className={s.aside__list}>
                        <li className={s.aside__link}>
                            <NavLink to="./message" className={(navData) => navData.isActive ? `${s.active}` : "" }>Message</NavLink>
                        </li>
                        <li className={s.aside__link}>
                            <NavLink to="./search" className={(navData) => navData.isActive ? `${s.active}` : "" }>Search</NavLink>
                        </li>
                        <li className={s.aside__link}>
                            <NavLink to="./profile" className={(navData) => navData.isActive ? `${s.active}` : "" }>Profile</NavLink>
                        </li>
                        <li className={s.aside__link}>
                            <NavLink to="./about" className={(navData) => navData.isActive ? `${s.active}` : "" }>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Aside; 