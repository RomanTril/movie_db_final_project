import React from 'react';
import Link from "next/link";
import {genres} from "@/constanta/genres";

import css from './GenreCard.module.css';

const GenreCard = () => {
    return (
        <section className={css.genreCardSection}>
            <div className={css.selectGenreWrap}>
                <h2 className={css.selectGenre}>
                    Select Genre
                </h2>

                <div className={css.genreScrollWrap}>
                    <p className={css.genreScroll}>
                        Scroll To Next ⟶
                    </p>
                </div>
            </div>

            <div className={css.genre}>

                {genres.map((genre) => (
                    <Link href={`/genre/${genre.id}`} key={genre.id} prefetch={false}>
                        <div
                            className={css.genreBackground}
                            style={{
                                backgroundColor: genre.color,
                            }}
                        >
                            <p className={css.genreName}>
                                {genre.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};


export default GenreCard;