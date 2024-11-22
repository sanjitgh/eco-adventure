import { GiMountainCave } from "react-icons/gi";

const ToTheMoment = () => {
  return (
    <div className="container mx-auto px-3 md:py-10 py-0">
      <div className="flex items-center gap-2 font-bold md:text-5xl text-2xl text-cyan-950" data-aos="fade-up" data-aos-delay="100">
        ECO-ADVENTURE
        <GiMountainCave className="text-blue-500 md:block hidden" /> TO THE
        MOUNTAINS
      </div>
      <p className="text-cyan-950 font-medium md:font-bold my-2 text-base md:text-lg" data-aos="fade-up" data-aos-delay="200">Explore scenic mountains, enjoy eco-friendly adventures.</p>
      <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
        <video
          className="rounded-xl"
          muted
          controls
          src="/video.mp4"
        ></video>
      </div>
    </div>
  );
};

export default ToTheMoment;
