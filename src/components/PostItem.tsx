import React from 'react';
import {CustomButton} from "./UI/button/CustomButton";
import {PostType} from "../dll/postsAPI";

export type PostItemPropsType = {
   post: PostType
    removePost:(id:number)=>void
}
export const PostItem = ({post, ...props}: PostItemPropsType) => {
    const removePostHandler = () => {
        props.removePost(post.id)
    }
    return (
        <div className="post">
            <div className="post_content">
                <strong>{post.title}</strong>
                <div>{post.body}
                </div>
            </div>
            <div className="post_button">
                <CustomButton onClick={removePostHandler}>Delete</CustomButton>
            </div>
        </div>
    );
};

