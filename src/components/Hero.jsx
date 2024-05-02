import heroBanner from "../assets/hero-vr.png";
import video1 from "../assets/build.gif";
import video2 from "../assets/build2.gif";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={heroBanner} alt="Banner" className="" />
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          See Beyond the{" "}
          <span className="bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent">
            Horizon:
          </span>{" "}
          Discover the Future with
          <span className="bg-gradient-to-l from-sky-500 to-blue-800 bg-clip-text text-transparent">
            {" "}
            Apple Vision Pro
          </span>
        </h1>
        <p className="mt-10 text-base lg:text-lg text-center text-neutral-500 max-w-4xl tracking-tight lg:tracking-wider">
          At Apple Vision Pro, we envision a world where technology seamlessly
          integrates with human life, we strive to redefine the boundaries of
          possibility, setting new standards for the future of technology.
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className="py-3 px-4 mx-3 border rounded-md">
            Book a demo
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-sky-500 to-sky-800 py-3 px-4 mx-3 rounded-md"
          >
            Buy
          </a>
        </div>
        <div className="flex justify-center mt-10 max-w-screen-md">
          <img
            src={video1}
            alt="Preview1"
            className="rounded-lg w-1/2 border border-white shadow-white mx-5 my-4"
          />
          <img
            src={video2}
            alt="Preview2"
            className="rounded-lg w-1/2 border border-white shadow-white mx-2 my-4"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
