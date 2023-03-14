import React, {useMemo, useState} from 'react';
import './styles/App.css'
import {v1} from "uuid";
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";
import {CustomSelect} from "./components/UI/select/CustomSelect";
import {CustomInput} from "./components/UI/input/CustomInput";

export type PostType = {
    id: string,
    title: string,
    description: string
}

export function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [posts, setPosts] = useState<PostType[]>([
        {id: v1(), title: 'JavaScript', description: 'learn JS'},
        {id: v1(), title: 'Java', description: 'learn Java'},
        {id: v1(), title: 'MSSQL', description: 'learn MSSQL'},
        {id: v1(), title: 'pyton', description: ' pyton'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    console.log(searchQuery)

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort as keyof PostType].localeCompare(b[selectedSort as keyof PostType]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[sortedPosts, searchQuery])
    const addNewPost = (post: { title: string, description: string }) => {
        setPosts([{id: v1(), ...post}, ...posts])
    }
    const removePost = (id: string) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    const sortPosts = (sortBy: 'title' | 'description') => {
        setSelectedSort(sortBy)
    }
    const setSearchValue = (value: string) => {
        setSearchQuery(value)
    }
    return (
        <div className="App">
            <CreateNewPostForm addNewPost={addNewPost}/>
            <CustomInput placeholder={'Search'} value={searchQuery} onChange={setSearchValue}/>
            <CustomSelect defaultValue={'Sort by'}
                          options={[
                              {value: 'Sort by', label: 'Sort by', disabled: true},
                              {value: 'title', label: 'title'},
                              {value: 'description', label: 'description'},
                          ]}
                          value={selectedSort || 'Sort by'}
                          onChange={sortPosts}
            />
            <PostsList posts={sortedAndFilteredPosts}
                       title={'Programming'}
                       removePost={removePost}/>
        </div>
    );
}

