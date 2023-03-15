import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";
import {ToolBar} from "./features/toolBar/ToolBar";
import {CustomModal} from "./components/UI/customModal/CustomModal";
import {usePosts} from "./hooks/usePosts";
import {postsAPI, PostType} from "./dll/postsAPI";
import Spin from "antd/lib/spin";

export type SortType = 'title' | 'body'

export function App() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [filter, setFilter] = useState({sortBy: '', search: ''})

    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy as SortType, filter.search)

    useEffect(() => {
        setIsLoading(true)
        postsAPI.getPosts()
            .then((res) => {
                setPosts(res.data)
                setIsLoading(false)
            })
    }, [])

    const addNewPost = (post: { title: string, body: string }) => {
        let id = Number(new Date())
        setPosts([{id: id, ...post}, ...posts])
        setShowModal(false)
    }
    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id))

    }
    const showModalHandler = (isShow: boolean) => {
        setShowModal(isShow)
    }

    return (
        <div className="App">
            <ToolBar filter={filter} setFilter={setFilter}/>
            <CustomModal title={'Add new post'} isShow={showModal} showModalHandler={showModalHandler}>
                <CreateNewPostForm addNewPost={addNewPost}/>
            </CustomModal>
            {
                isLoading ? <Spin tip="Loading..." size="large" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap:'10px'
                    }}/>
                    : <PostsList posts={sortedAndFilteredPosts}
                                 title={'Programming'}
                                 removePost={removePost}/>
            }

        </div>
    );
}

