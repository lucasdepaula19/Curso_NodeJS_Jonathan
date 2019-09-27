import { Film } from "./Film";
import { PersistedModel } from "./PersistedModel";

export class Language {
    languageId?:number
    name?:string
    lastUpdate?:Date
    films?:Film[]

    toJSON?: () => Language
}