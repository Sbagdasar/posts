import React, {useState} from 'react';
import './styles/App.css'
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";
import {CustomSelect} from "./components/UI/select/CustomSelect";

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
    ])
    const [selectedSort, setSelectedSort] = useState('Sort by')
    const addNewPost = (post: { title: string, description: string }) => {
        setPosts([{id: v1(), ...post}, ...posts])
    }
    const removePost = (id: string) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    const sortPosts = (sortBy: 'title'|'description') => {
        setSelectedSort(sortBy)
        setPosts([...posts].sort((a,b)=> a[sortBy].localeCompare(b[sortBy])))
    }
    return (
        <div className="App">
            <CreateNewPostForm addNewPost={addNewPost}/>
            <CustomSelect defaultValue={'Sort by'}
                          options={[
                                { value: 'Sort by', label: 'Sort by', disabled:true },
                                { value: 'title', label: 'title' },
                                { value: 'description', label: 'description' },
                            ]}
                          value={selectedSort}
                          onChange={sortPosts}
            />
            <PostsList posts={posts}
                       title={'Programming'}
                       removePost={removePost}/>
        </div>
    );
}

