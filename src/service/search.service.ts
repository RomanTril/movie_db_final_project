import {baseUrl, token} from "@/constanta/urls";
import {IResponse} from "@/interface/ISearch";


    export async function searchResult(query: string, page: number = 1) :Promise<IResponse>{
    const res = await fetch(`${baseUrl}/search/movie?query=${query}&page=${page}`,

        { headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${token}`
            }}
    );
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
     return res.json();

}

