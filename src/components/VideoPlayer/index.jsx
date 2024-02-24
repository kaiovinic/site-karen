/* eslint-disable no-undef */
import video from "/public/video02.mp4";

const VideoPlayer = () => {
  return (
    <div className="w-full flex justify-center max-lg:mt-20">
      <video width="340" controls className="shadow-2xl shadow-[#ffffff91]">
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoPlayer;
