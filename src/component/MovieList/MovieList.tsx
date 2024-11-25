import React from 'react';
import {fetchPopular, fetchTopRated, fetchUpcoming} from "@/service/movie.service";
import MovieCard from "@/component/MovieCard/MovieCard";
import css from './MovieList.module.css';
import GenreCard from "@/component/GenreCard/GenreCard";


const MovieList = async () => {

    const popularMovies = await fetchPopular();
    const topRatedMovies = await fetchTopRated();
    const upcomingMovies = await fetchUpcoming();


    return (
        <div className={css.moviesList}>
            <GenreCard/>
            <MovieCard title="Popular Now" data={popularMovies.results}/>
            <MovieCard title="Top Rating" data={topRatedMovies.results}/>
            <MovieCard title="Coming Soon" data={upcomingMovies.results}/>
        </div>
    );
};

export default MovieList;