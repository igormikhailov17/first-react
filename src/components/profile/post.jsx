import React from "react";
import s from "../../css/modules/profile/post.module.css";

const Post = () => {
    return (
        <div className={s.post}>
            <h3 className={s.post__title}>
                New post
            </h3>
            <p className={s.post__text}>
                <textarea name="" placeholder="Write me" className={s.post__textarea}></textarea>
            </p>
            <div className={s.post__btn}>
                <button>
                    <span>add post</span>
                </button>
            </div>
        </div>
    )
}

export default Post;