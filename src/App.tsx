import React, {useState} from 'react';
import './styles/App.css'
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";

export type PostType = {
    id: string,
    title: string,
    description: string
}

function App() {
    const [posts, setPosts] = useState<PostType[]>([
        {id: v1(), title: 'JavaScript', description: 'learn JS'},
        {id: v1(), title: 'Java', description: 'learn Java'},
        {id: v1(), title: 'MSSQL', description: 'learn MSSQL'},
    ])

    return (
        <div className="App">
            <CreateNewPostForm/>
            <PostsList posts={posts} title={'Programming'}/>
        </div>
    );
}

export default App;
