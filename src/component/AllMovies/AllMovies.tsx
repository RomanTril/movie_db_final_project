import {IMovie} from "@/interface/IMovie";
import {FC} from "react";
import css from './AllMovies.module.css';

import Link from "next/link";
import MoviePoster from "@/component/MoviePoster/MoviePoster";
import Pagination from "@/component/Pagination/Pagination";

type MoviesProps = {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
    query?: string;

}

const AllMovies:FC<MoviesProps> = async ({ movies, currentPage, totalPages, query}) => {

    return (
        <div>
            <h2 className={css.allMovieTitle}>All Movies</h2>
            <div className={css.movies}>
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/${movie.id}`} className={css.card}>
                        <MoviePoster movie={movie}/>
                    </Link>
                ))}
            </div>
            <div>
                <Pagination currentPage={currentPage} totalPages={totalPages} query={query}/>
            </div>

        </div>
    );
};

export default AllMovies;