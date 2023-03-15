import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: false
})


export const postsAPI = {
    getPosts (_limit:number = 10, _page:number = 1){
        return instance.get<PostType[]>('/posts', {
            params: {
                _limit,
                _page
            }
        })
    }
}


export type PostType = {
    "userId"?: number,
    "id": number,
    "title": string,
    "body": string
}