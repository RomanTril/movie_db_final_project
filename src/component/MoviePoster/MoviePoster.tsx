import React, {FC} from 'react';
import {IMovie} from "@/interface/IMovie";
import Link from "next/link";
import Image from "next/image";
import css from './MoviePoster.module.css';
import GenreBadge from "@/component/GenreBadge/GenreBadge";



export interface IPosterPreviewProps {
   movie:IMovie
}


const MoviePoster:FC<IPosterPreviewProps> = ({movie}) => {
    return (

        <Link href={`/movie/${movie.id}`}>
            <div className={css.moviePosterWrap}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={400}
                    height={500}
                    className={css.moviePosterImage}
                />
                    <div className={css.moviePosterCard}/>

                <div className={css.moviePosterBlock}>


                    <GenreBadge genresIds={movie.genre_ids}/>

                </div>

                <div className={css.PosterInfo}>
                    <h3 className={css.moviePosterTitle}>{movie.title}</h3>

                    <p className={css.moviePosterRealiseDate}>{movie.release_date.split("-")[0]}</p>
                    </div>
            </div>
        </Link>
    );
}


export default MoviePoster;