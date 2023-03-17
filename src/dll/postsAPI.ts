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
    },
    getItemPost(id:number){
        return instance.get<PostType>(`posts/${id}`)
    },
    getComments(id:number, comments:string){
        return instance.get<CommentType[]>(`posts/${id}/${comments}`)
    }
}


export type PostType = {
    "userId"?: number,
    "id": number,
    "title": string,
    "body": string
}
export type CommentType ={
    "postId": number,
    "id": number,
    "name": string
    "email": string
    "body": string
}