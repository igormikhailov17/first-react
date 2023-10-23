import React from "react";
import s from "../../css/modules/profile/profile.module.css";
import Tesla from "../../img/Tesla.png";
import Post from "./post";


const Profile = () => {
    return (
        <section className={s.profile}>
            <div className={s.profile__body}>
                <div className={s.profile__img}>
                    <img src={Tesla} alt="" />
                </div>
                <Post/>
            </div>
        </section>
    )
}

export default Profile; 