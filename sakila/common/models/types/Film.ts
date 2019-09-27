import { Language } from "./Language";
import { PersistedModel } from "./PersistedModel";

export class Film extends PersistedModel<Film> {
    filmId?:number
    title?:string
    replacementCost?:number
    rating?:string
    language_id?:number
    language?:Language
}