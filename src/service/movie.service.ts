"use server";

import {apiKey, baseUrl, token} from "@/constanta/urls";
import {IResponse} from "@/interface/ISearch";



export async function getAllMovies (page: number = 1): Promise<IResponse> {
    const res = await fetch(`${baseUrl}/discover/movie?page=${page}`, {
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
   return  res.json()

}


export async function fetchPopular() {
    const res = await fetch(
        `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function fetchTopRated() {
    const res = await fetch(
        `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function fetchUpcoming() {
    const res = await fetch(
        `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function fetchMovieById(id: string) {
    const res = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function fetchRecomendations(id: string) {
    const res = await fetch(
        `${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export async function getVideo(id:string){
    const res=await fetch(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}&&language=en-US`)
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}