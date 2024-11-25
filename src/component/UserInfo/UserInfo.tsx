import React from 'react';

import css from './UserInfo.module.css';

const UserInfo = () => {
    const avatarImg = 'https://shop.mrbean.com/cdn/shop/t/13/assets/bean--choose-bean-righy.jpg?v=113716400840217422041649345670';

    return (
        <div
            className={css.mini_profile}>
            <img
                src={avatarImg} alt={'name'}/>
            <h1>User:Mr.Bean </h1>
        </div>
    );
};

export default UserInfo;