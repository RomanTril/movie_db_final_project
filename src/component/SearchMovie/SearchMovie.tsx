import React from 'react';
import css from './SearchMovie.module.css';

const SearchMovie = () => {
    return (
        <div className={css.searchWrap}>
            <form action={'/search'} className={css.form}>
                <input className={css.input} type="search" placeholder={'Enter movie name'} name={'query'}/>
                <button className={css.button} type={'submit'}>Search</button>
            </form>
        </div>
    );
};

export default SearchMovie;