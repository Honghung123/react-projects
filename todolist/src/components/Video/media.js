import { useEffect, useRef } from "react";
import Video from "./video";

function Media() {
    const videoRef = useRef();
    useEffect(() => {
        console.log(videoRef.current);
    })
    const handlePlayMedia = () => {
        console.log(videoRef.current);
        if (videoRef.current.paused || !videoRef.current.hasOwnProperty("paused")) {
            videoRef.current.paused = false;
            videoRef.current.play();
        } else {
            videoRef.current.paused = true;
            videoRef.current.pause();
        }
    } 
    const handlePlayMedias = () => { 
        videoRef.current.play();
    }
    return (
        <>
            <Video ref={videoRef}/>
            <button onClick={handlePlayMedia}>Play/Pause video</button>
            <button onClick={handlePlayMedias}>Play/Pause video</button>
            
        </>
        
    )
}

export default Media;