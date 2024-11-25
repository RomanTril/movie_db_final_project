import React, {FC} from 'react';
import css from './GenreBadge.module.css';
import {IGenresService} from "@/interface/IGenre";
import {getAllMovieGenres} from "@/service/genre.service";


export interface IBadgePros {
    genresIds: number[],
}

const GenreBadge:FC<IBadgePros> = async ({genresIds}) => {

        const {genres}:IGenresService=await getAllMovieGenres()


    const filtered = genres.filter(genre=>

        genresIds.includes(genre.id)

    )


    return (
        <div className={css.badge}>
            {filtered.map(genre => <div key={genre.id}
                                        className={css.info}>{genre.name}</div>)}
        </div>
    );
};

export default GenreBadge;