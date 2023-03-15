import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: false
})


export const postsAPI = {
    getPosts (){
        return instance.get<PostType[]>('/posts').then(res=> res.data)
    }
}


export type PostType = {
    "userId"?: number,
    "id": number,
    "title": string,
    "body": string
}