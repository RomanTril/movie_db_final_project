import React from 'react';
import {StarIcon} from "lucide-react";
import css from './StarsRating.module.css';





const StarsRating = () => {
    return (
        <>
            <StarIcon
                size={20}
                className={css.yellow}
                fill="currentColor"
            />
        </>
    );
};

export default StarsRating;