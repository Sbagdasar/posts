import React from 'react';
import Title from "antd/lib/typography/Title";
import {PostItem} from "./PostItem";
import {PostType} from "../App";

type PostsListPropsType = {
    posts:PostType[]
}
export const PostsList = ({posts}:PostsListPropsType) => {
    return (
        <div>
            <Title style={{textAlign:'center'}}>Posts list</Title>
            {
                posts.map(post => {
                    return (
                        <PostItem key={post.id} post={post}/>
                    )
                })
            }
        </div>
    );
};

