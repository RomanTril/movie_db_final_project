import React, {FC} from 'react';
import {IMovie} from "@/interface/IMovie";
import css from './MovieCard.module.css';
import Link from "next/link";
import Image from "next/image";
import GenreBadge from "@/component/GenreBadge/GenreBadge";

type Props={
    data?:IMovie[]
    title:string
}

const MovieCard:FC<Props> = ({data,title}) => {
    return (
        <section className={css.movieCardSection}>
            <div className={css.movieCardTitleWrap}>
                <h2 className={css.movieCardTitle}>
                    {title}
                </h2>
                <div className={css.movieCardScrollWrap}>
                    <p className={css.movieCardScroll}>
                        Scroll To Next ⟶
                    </p>
                </div>

            </div>
            <div className={css.movieCard}>
                {data &&
                    data.map((movie) => (
                        <Link href={`/movie/${movie.id}`} key={movie.id}>
                            <div className={css.imageWrap}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                width={300}
                                height={400}
                                className={css.movieCardImage}
                            />
                                <div className={css.card__content__banges}>
                                    <GenreBadge genresIds={movie.genre_ids}/>
                                </div>
                            </div>
                            <div className={css.card__content}>
                                <div className={css.card__content__contrast}>
                                </div>
                                <div className={css.card__content__info}>
                                    <h2 className={css.h2}>{movie.title}</h2>
                                    <p className={css.p}>Release data:{movie.release_date}</p>
                                    <p className={css.p}>Rating: {movie.vote_average}</p>
                                </div>

                            </div>

                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default MovieCard;