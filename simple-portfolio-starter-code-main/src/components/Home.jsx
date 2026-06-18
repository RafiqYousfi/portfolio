import React from "react";
import image from "../../public/image.jpg";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={image}
          alt=""
          className="w-[250px] sm:w-[300px] rounded-full"
        />

        <div className="space-y-1 sm:space-y-3 ">
          <h1 className="text-teal-600 text-4xl font-semibold bg-clip-text md:text-5xl lg:text-6xl">
            Rafiq Yousfi
          </h1>
          <h3 className="text-teal-600 text-xl font-semibold bg-clip-text md:text-2xl lg:text-3xl">
            Web Developer
          </h3>
          <p className="max-w-[500px] text-sm text-gray-500">
            I am a web developer with two years of experience in front-end
            development and website design. I am good at both creative and
            technical work, which helps me build websites that look great and
            work well. I enjoy working in a team and always pay close attention
            to detail to make sure the end result is of high quality. I am eager
            to keep learning and growing as a developer and always give my best
            in every project I work on.
          </p>
        </div>

        <div className="flex gap-3">
          <BiLogoGithub
            className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2
        text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 
        md:h-12 md:w-12"
          />

          <BiLogoLinkedin
            className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2
        text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 
        md:h-12 md:w-12"
          />

          <BiLogoInstagram
            className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2
        text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 
        md:h-12 md:w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
