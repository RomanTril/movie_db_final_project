"use server";

import {apiKey, baseUrl} from "@/constanta/urls";


export async function fetchMovieByGenre(id: string, page = 1) {
    const res = await fetch(
        `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${page}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}


export async function getAllMovieGenres() {
    const res = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}


