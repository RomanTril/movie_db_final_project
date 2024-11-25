import React from 'react';
import {searchResult} from "@/service/search.service";
import AllMovies from "@/component/AllMovies/AllMovies";


type SearchParams = Promise<{[key: string]: string}>

const SearchPage = async(props: {searchParams: SearchParams}) => {

    const searchParams =  await props.searchParams;

    const queryNameMovie = (searchParams.query || '')


    const currentPage = parseInt(searchParams.page || "1", 10);

    const {results, total_pages} = await searchResult(queryNameMovie, currentPage)


    return (
        <div>
            <AllMovies movies={results} currentPage={currentPage} totalPages={total_pages} query={queryNameMovie}/>
        </div>
    );
};

export default SearchPage;