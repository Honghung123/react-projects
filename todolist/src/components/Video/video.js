import { useRef, forwardRef, useImperativeHandle } from "react";
import video from "./video.mp4"

function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
      play() {
        console.log("Play video");
        videoRef.current.play();
      },
      pause() {
        console.log("Pause video");
        videoRef.current.pause();
      },
    }));
    return (
      <>
        <video src={video} width={200} height={300} ref={videoRef} />
      </>
    );
}

export default forwardRef(Video);