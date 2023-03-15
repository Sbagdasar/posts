import React from 'react';
import Title from "antd/lib/typography/Title";
import {PostItem} from "./PostItem";
import {PostType} from "../App";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import s from './PostsList.module.css'

type PostsListPropsType = {
    posts: PostType[]
    title: string
    removePost: (id: string) => void
}
export const PostsList = ({posts, ...props}: PostsListPropsType) => {
    return (
        <div className={s.postsListContainer}>
            {
                posts.length ? <Title style={{textAlign: 'center'}}>{props.title}</Title>
                    : <Title level={2} style={{textAlign: 'center'}}>No posts</Title>
            }
            <TransitionGroup>
            {
                posts.map(post => {
                    return (
                        <CSSTransition  key={post.id} timeout={500} classNames="postItem">
                            <PostItem post={post} removePost={props.removePost}/>
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>
        </div>
    );
};

