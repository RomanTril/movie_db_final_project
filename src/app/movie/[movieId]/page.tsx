import React, {FC} from 'react';
import {IMovie} from "@/interface/IMovie";
import {fetchMovieById, fetchRecomendations, getVideo} from "@/service/movie.service";
import MovieCard from "@/component/MovieCard/MovieCard";
import css from './page.module.css';
import ViewVideo from "@/component/ViewVideo/ViewVideo";
import Image from "next/image";
import StarsRating from "@/component/Icons/StarsRating/StarsRating";
import Calendar from "@/component/Icons/Calendar/Calendar";


type Props = {
    params: {
        movieId: string;
    };
};

const MoviePage:FC<Props> = async ({params}) => {
    const movieId = params.movieId;


    const movie: IMovie = await fetchMovieById(movieId);
    const recommendations = await fetchRecomendations(movieId);
    const video=await getVideo(movieId)

    return (
        <main className={css.moviePageMain}>
            <div
                className={css.moviePageBackground}
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className={css.moviePageWrapImage}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className={css.moviePageImage}
                    />
                    <div className={css.moviePageTitleWrap}>
                        <h1 className={css.moviePageTitle}>
                            {movie.title}
                        </h1>
                        <div className={css.moviePageWrapDate}>
                            <span className={css.moviePageDate}>
                                <Calendar/>
                                {movie.release_date.split("-")[0]}
                            </span>
                            <div className={css.moviePageRatingWrap}>
                            <StarsRating/>
                                <span className={css.moviePageVote}>

                                {movie.vote_average.toFixed(1)}

                                </span>
                            </div>
                        </div>

                        <p className={css.moviePageOverview}>{movie.overview}</p>
                    </div>
                </div>

            </div>

            {video?.results.length ? <ViewVideo url={video.results[0].key}/> : null}

            <div className={css.moviePageRecommendation}>

                <MovieCard title="Similar Titles" data={recommendations.results}/>

            </div>
        </main>
    );
};

export default MoviePage;