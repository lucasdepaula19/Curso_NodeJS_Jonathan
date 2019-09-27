import { Movie } from '.';

export class MovieDetail extends Movie {
    Released?: string
    Director?: string
    Language?: string
    Awards?: string
    Ratings?: {
        Source?: string
        Value?:string
    }
}