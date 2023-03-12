import React from 'react';
import {PostType} from "../App";
import {Button} from "antd";

export type PostItemPropsType = {
   post: PostType
}
export const PostItem = ({post}: PostItemPropsType) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{post.title}</strong>
                <div>{post.description}
                </div>
            </div>
            <div className="post_button">
                <Button type={'primary'}>Delete</Button>
            </div>
        </div>
    );
};

