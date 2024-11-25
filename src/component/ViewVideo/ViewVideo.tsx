import React, {FC} from 'react';

import css from './ViewVideo.module.css';

interface IViewVideo{
    url:string
}

const ViewVideo:FC<IViewVideo> = ({url}) => {
    return (
        <div className={css.video}>
            <h2 className={css.h2}>Trailer</h2>
            <div className={css.trailer}>
                <iframe
                    className={css.iframe}
                    width="760"
                    title="Trailer"
                    height="615"
                    src={`https://www.youtube-nocookie.com/embed/${url}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default ViewVideo;