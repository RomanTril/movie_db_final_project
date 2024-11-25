import React from 'react';
import css from './Header.module.css';
import Link from "next/link";
import UserInfo from "@/component/UserInfo/UserInfo";
import SearchMovie from '../SearchMovie/SearchMovie';



const Header = () => {
    return (
        <header className={css.header}>
            <div>
                <Link href="/" className={css.headerLink}>
                    <h1 className={css.headerLogo}>
                        MovieGo
                    </h1>
                </Link>
                <SearchMovie/>
                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;