import React from "react";
import s from "../../css/modules/profile/post.module.css";

const Post = () => {

    let posts = [
        {id: 1, message: "Hello! What's up man?", likesCount: 12},
        {id: 2, message: "Don't missing me", likesCount: 6},        
        {id: 3, message: "I'm going to the beach", likesCount: 34},
        {id: 4, message: "Hello, I'm at home", likesCount: 58},
        {id: 5, message: "Recca's amaing", likesCount: 8},
    ]

    let postEl = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}></Post>)


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
            <div className={s.post__posts}>
                {postEl}
            </div>
        </div>
    )
}

export default Post;