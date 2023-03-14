import React, {useMemo, useState} from 'react';
import './styles/App.css'
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";
import {ToolBar} from "./features/toolBar/ToolBar";

export type PostType = {
    id: string,
    title: string,
    description: string
}

export function App() {
    const [posts, setPosts] = useState<PostType[]>([
        {id: v1(), title: 'JavaScript', description: 'learn JS'},
        {id: v1(), title: 'Java', description: 'learn Java'},
        {id: v1(), title: 'MSSQL', description: 'learn MSSQL'},
        {id: v1(), title: 'pyton', description: ' pyton'},
    ])

const [filter, setFilter] = useState({sortBy:'', search:''})

    const sortedPosts = useMemo(() => {
        if (filter.sortBy) {
            return [...posts].sort((a, b) => a[filter.sortBy as keyof PostType].localeCompare(b[filter.sortBy as keyof PostType]))
        }
        return posts
    }, [filter.sortBy, posts])

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.search.toLowerCase()))
    },[sortedPosts, filter.search])
    const addNewPost = (post: { title: string, description: string }) => {
        setPosts([{id: v1(), ...post}, ...posts])
    }
    const removePost = (id: string) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div className="App">
            <CreateNewPostForm addNewPost={addNewPost}/>
            <ToolBar filter={filter} setFilter={setFilter} />
            <PostsList posts={sortedAndFilteredPosts}
                       title={'Programming'}
                       removePost={removePost}/>
        </div>
    );
}

