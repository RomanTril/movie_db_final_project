import {IMovie} from "@/interface/IMovie";


export interface IDate {
    maximum: string;
    minimum: string;
}


export interface IResponse {
    dates: IDate;
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}