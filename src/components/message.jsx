import React from "react";
import s from "../css/modules/message.module.css";
import { NavLink } from "react-router-dom";

const Person = (props) => {

    let path = "/message__person/" + props.id;

    return (
        <p className={s.message__person + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </p>
    )
}

const Comment = (props) => {
    return (
        <p className={s.message__text}>{props.text}</p>
    )
}

const Message = () => {

    let persons = [
        {id: 1, name: "Jack"},
        {id: 2, name: "David"},
        {id: 3, name: "Monica"},
        {id: 4, name: "Frank"},
        {id: 5, name: "Jessey"},
        {id: 6, name: "Suise"},
    ]

    let comments = [
        {id: 1, comment: "What are you doing?"},
        {id: 1, comment: "Hi!"},
        {id: 1, comment: "What's up"},
        {id: 1, comment: "Don't worry about it"},
    ]

    let personEl = persons.map( p => <Person name={p.name} id={p.id}/>)
    let commentEl = comments.map( c => <Comment comment={c.comment}/>)

    return (
        <div className={`${s.mainpage__message} ${s.message}`}>
            <div className={s.message__body}>
                <div className={s.message__people}>
                    {personEl}
                </div>
                <div className={s.message__comment}>
                    {commentEl}
                </div>
            </div>
        </div>
    )
}

export default Message;