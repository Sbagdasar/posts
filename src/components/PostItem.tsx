import React from 'react';
import {PostType} from "../App";
import {CustomButton} from "./UI/button/CustomButton";

export type PostItemPropsType = {
   post: PostType
    removePost:(id:string)=>void
}
export const PostItem = ({post, ...props}: PostItemPropsType) => {
    const removePostHandler = () => {
        props.removePost(post.id)
    }
    return (
        <div className="post">
            <div className="post_content">
                <strong>{post.title}</strong>
                <div>{post.description}
                </div>
            </div>
            <div className="post_button">
                <CustomButton onClick={removePostHandler}>Delete</CustomButton>
            </div>
        </div>
    );
};

