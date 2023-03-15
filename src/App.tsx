import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {PostsList} from "./components/PostsList";
import {CreateNewPostForm} from "./features/createNewPost/CreateNewPostForm";
import {ToolBar} from "./features/toolBar/ToolBar";
import {CustomModal} from "./components/UI/customModal/CustomModal";
import {usePosts} from "./hooks/usePosts";
import {postsAPI, PostType} from "./dll/postsAPI";
import Spin from "antd/lib/spin";
import {useFetching} from "./hooks/useFetching";
import {getPagesCount} from "./utils/getPagesCount";
import Pagination from "antd/lib/pagination";

export type SortType = 'title' | 'body'

export function App() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [showModal, setShowModal] = useState(false)
    const [filter, setFilter] = useState({sortBy: '', search: ''})

    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy as SortType, filter.search)

    const [isLoading, error, isFetching] = useFetching(async () => {
        const response = await postsAPI.getPosts(limit, page)
        setPosts(response.data)
        // let pageCount = getPagesCount(response.headers['x-total-count'], limit)
        setTotalCount(response.headers['x-total-count'])
    })

    useEffect(() => {
        isFetching()
    }, [page, limit])

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
            {error && <h2>{error}</h2>}
            {
                isLoading ? <Spin tip="Loading..." size="large" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px'
                    }}/>
                    : <PostsList posts={sortedAndFilteredPosts}
                                 title={'Programming'}
                                 removePost={removePost}/>
            }

            <Pagination defaultCurrent={1}
                        current={page}
                        total={totalCount}
                        showSizeChanger
                        hideOnSinglePage
                        onChange={(page, pageSize)=> {
                            setLimit(pageSize)
                                setPage(page)
                        }
                        }
                        onShowSizeChange={(current, size) => {
                            setLimit(size)
                            setPage(1)
                        }}/>
        </div>
    );
}

