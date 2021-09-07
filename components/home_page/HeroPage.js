import React from "react";
// icons
import LogoGithub from "../svg/logo-github";
import LogoLinkedin from "../svg/logo-linkedin";
import LogoYoutube from "../svg/logo-youtube";
import Line from "../svg/line";
import Email from "../svg/email";
import Download from "../svg/download";
import BulletPoints from "../svg/bulletPoints";

export default function HeroPage() {
  return (
    <div id="heroPage" className="lg:grid lg:grid-cols-2 gap-y-40 pt-16">
      <div className="pt-14">
        <h4 className="text-2xl">Hey!</h4>
        <h1 className="w-11/12 text-3xl sm:text-5xl font-bold my-5">
          I&apos;m <span className="text-yellow-600 my-5">Allan Sanchez </span>
          Full-Stack Developer
        </h1>
        <div className="pb-5 flex justify-center">
          <Line />
        </div>
        <p>
          I am a self-taught young man from Guatemala. I have solid knowledge in
          various technologies such as VUE.JS, REACT, JAVASCRIPT, PHP, FLUTTER.
          To know more about me, go to me
          <span className="text-yellow-600 my-5"> GITHUB </span>
        </p>
        {/* social media */}
        <div className="py-10 flex items-center">
          <p>Contact with me.</p>

          <div className="mx-5 flex w-52 justify-between">
            <LogoGithub className="w-10 fill-current text-grey-200" />
            <LogoLinkedin className="w-10 fill-current text-grey-200" />
            <LogoYoutube className="w-10 fill-current text-gray-200" />
          </div>
        </div>
        {/* buttons */}
        <div className="flex">
          <div className="bg-yellow-600 w-40 flex justify-center items-center text-white font-normal  py-4 text-xl rounded-xl">
            <Email className="hidden sm:block w-5 md:w-7  fill-current" />
            <a href="#" className="sm:ml-3">
              Mail Me
            </a>
          </div>
          <div className="bg-transparent border-2 border-yellow-400 w-52 flex justify-center items-center text-white font-normal  py-4 ml-10 text-xl rounded-xl">
            <Download className="hidden sm:block w-5 md:w-7  fill-current" />
            <a href="#" className="sm:ml-3">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden  h-96 lg:h-full mt-24 lg:mt-0">
        <div className="z-0 absolute top-1/2 -ml-10  -mt-36 lg:-mt-48 bg-transparent border-2 border-gray-100 w-72 h-72 lg:w-96 lg:h-96 rounded-full"></div>
        <div className="z-20 absolute bottom-8 lg:bottom-12 bg-yellow-300 w-72 h-72 lg:w-96 lg:h-96 rounded-full"></div>
        <BulletPoints className="z-10 absolute bottom-0 right-1/2  w-56" />
        {/* sm:left-10 md:left-28 lg:left-10 */}
      </div>
    </div>
  );
}
