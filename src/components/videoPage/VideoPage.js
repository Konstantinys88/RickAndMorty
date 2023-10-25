import './videoPage.scss';

// import { useState } from "react";

import video from '../../resources/s1e1.mp4'

const VideoPage = () => {

    return (

        <div className="videoPage">
            <div className="videoPage__player">

                <video className="videoPage__player" controls >
                    <source src={video} type="video/mp4" />
                </video>

            </div>
        </div>
    )
}

export default VideoPage;