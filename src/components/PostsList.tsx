import React from 'react';
import Title from "antd/lib/typography/Title";
import {PostItem} from "./PostItem";
import {PostType} from "../App";

type PostsListPropsType = {
    posts: PostType[]
    title: string
    removePost: (id: string) => void

}
export const PostsList = ({posts, ...props}: PostsListPropsType) => {
    return (
        <div>

            {
                posts.length ? <Title style={{textAlign: 'center'}}>{props.title}</Title>
                    : <Title level={2} style={{textAlign: 'center'}}>No posts</Title>
            }
            {
                posts.map(post => {
                    return (
                        <PostItem key={post.id} post={post} removePost={props.removePost}/>
                    )
                })
            }
        </div>
    );
};

