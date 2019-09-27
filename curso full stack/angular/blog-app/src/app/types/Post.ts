import { Author } from './Author';

export class Post {
    id?:string
    title?:string
    text?:string
    author?:Author
    likes?:number
}