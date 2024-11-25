import React from 'react';
import {fetchMovieByGenre} from "@/service/genre.service";
import {genres} from "@/constanta/genres";
import {IMovie} from "@/interface/IMovie";


import css from './page.module.css';
import MoviePoster from "@/component/MoviePoster/MoviePoster";


type Props = {
    params: {
        genreId: string;
    };
};

const Page = async ({params}:Props) => {

    const genreId = params.genreId;
    const movies = await fetchMovieByGenre(genreId);




    return (
        <div className={css.genrePageWrap}>
            <h2 className={css.genrePageName}>

                {genres.find((genre) => genre.id === JSON.parse(genreId))?.name} Movies


            </h2>

            <div className={css.genrePageMovies}>


                {movies &&
                    movies.results.map((movie: IMovie) => (
                        <MoviePoster key={movie.id}
                                   movie={movie}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Page;