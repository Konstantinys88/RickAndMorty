import './videoPage.scss';
import ReactPlayer from "react-player";

const VideoPage = () => {

    return (

        <div className="videoPage">
            <div className="videoPage__player">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=3Vx0hrEOmY0'
                    playing={true}
                    controls={true}
                />
            </div>
        </div>


    )
}

export default VideoPage;