import React, { useEffect, useRef, useState } from 'react'
import '../../styles/App.css'

import Pagination from 'antd/lib/pagination'
import Spin from 'antd/lib/spin'

import { PostsList } from '../../components/postLists/PostsList'
import { CustomModal } from '../../components/UI/customModal/CustomModal'
import { postsAPI, PostType } from '../../dll/postsAPI'
import { useFetching } from '../../hooks/useFetching'
import { useObserver } from '../../hooks/useObserver'
import { usePosts } from '../../hooks/usePosts'
import { CreateNewPostForm } from '../createNewPost/CreateNewPostForm'
import { ToolBar } from '../toolBar/ToolBar'

export type SortType = 'title' | 'body'
export function Posts() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState({ sortBy: '', search: '' })

  const [totalCount, setTotalCount] = useState(0)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const lastPost = useRef<HTMLDivElement>(null)
  const sortedAndFilteredPosts = usePosts(posts, filter.sortBy as SortType, filter.search)

  const [isLoading, error, isFetching] = useFetching(async () => {
    const response = await postsAPI.getPosts(limit, page)

    setPosts([...posts, ...response.data])
    setTotalCount(response.headers['x-total-count'])
  })

  useObserver(
    lastPost,
    isLoading,
    () => {
      setPage(page + 1)
    },
    page < Math.ceil(totalCount / limit)
  )

  useEffect(() => {
    isFetching()
  }, [page, limit])

  const addNewPost = (post: { title: string; body: string }) => {
    let id = Number(new Date())

    setPosts([{ id: id, ...post }, ...posts])
    setShowModal(false)
  }
  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id))
  }
  const showModalHandler = (isShow: boolean) => {
    setShowModal(isShow)
  }
  const pageChangeHandler = (page: number, pageSize: number) => {
    setLimit(pageSize)
    setPage(page)
  }
  const pageLimitHandler = (current: number, size: number) => {
    setLimit(size)
    setPage(1)
  }

  return (
    <div className="App">
      <ToolBar filter={filter} setFilter={setFilter} />
      <CustomModal title={'Add new post'} isShow={showModal} showModalHandler={showModalHandler}>
        <CreateNewPostForm addNewPost={addNewPost} />
      </CustomModal>
      {error && <h2>{error}</h2>}
      {isLoading && (
        <Spin
          tip="Loading..."
          size="large"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        />
      )}
      {<PostsList posts={sortedAndFilteredPosts} title={'Programming'} removePost={removePost} />}
      <div ref={lastPost}></div>
      <Pagination
        defaultCurrent={1}
        current={page}
        total={totalCount}
        showSizeChanger
        hideOnSinglePage
        onChange={pageChangeHandler}
        onShowSizeChange={pageLimitHandler}
      />
    </div>
  )
}
