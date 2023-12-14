/* eslint-disable no-undef */
import video from "/public/video01.mp4";

const VideoPlayer = () => {
  return (
    <div className="w-full flex justify-center">
      <video width="340" controls>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoPlayer;
