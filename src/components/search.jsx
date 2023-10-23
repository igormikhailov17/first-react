import React from "react";
import s from "../css/modules/search.module.css";

const Search = () => {
    return (
        <aside className={s.search}>
            <div className={s.search__body}>
                <div className={s.search__title}>Search</div>
                <div className={s.search__input}>
                    <label className={s.search__label}>My text</label>
                    <input className={s.search__line} type="text" placeholder="write something"/>
                </div>
                <button className={s.search__btn}>
                    <span>Click</span>
                </button>
            </div>
        </aside>
    )
}

export default Search;