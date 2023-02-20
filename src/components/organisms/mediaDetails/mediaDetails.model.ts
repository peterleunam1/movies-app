import { Details, Flatrate } from "@/models";

export interface MediaDetailsInterface {
    detail: Details 
    providers?: Flatrate[]
    type: "complete" | "short"
}