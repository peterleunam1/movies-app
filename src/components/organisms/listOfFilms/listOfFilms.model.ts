import { Films, ListFilms } from "@/models";

export interface ListOfFilmsInterface {
    type: 'withFilter' | 'withScroll' | 'normal',
    results: Films[],
    gap?:string,

}