import Head from "next/head";
import LogoGithub from "../components/svg/logo-github";
import LogoLinkedin from "../components/svg/logo-linkedin";
import LogoYoutube from "../components/svg/logo-youtube";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Allan Sanchez</title>
        <meta
          name="description"
          content="Portfolio by Allan Sanchez, Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <nav className="flex justify-between my-5">
          <h2 className="font-bold text-2xl">Allan Sanchez</h2>
          <ul className="flex">
            <li className=" font-medium mx-5 text-yellow-300">
              <a href="#">Home</a>
            </li>
            <li className="font-medium mx-5">
              <a href="#">About</a>
            </li>
            <li className="font-medium mx-5">
              <a href="#">Project</a>
            </li>
            <li className="font-medium mx-5">
              <a href="#">Contact</a>
            </li>
          </ul> 
        </nav>
      <main className="grid grid-cols-2">
      <div className="">
        <div className="pt-20">
          <h4 className="text-xl">Hey!</h4>
          <h1 className="w-3/4 text-5xl">I&apos;m Allan Sanchez web Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut placeat blanditiis natus quam nobis magnam, doloribus cupiditate. Quaerat, dolore.</p>
          <div className="py-10 flex">
            <p>Contact with me.</p>
            <LogoGithub className="w-10 fill-current"/> 
            <LogoLinkedin className="w-10 fill-current"/>
            <LogoYoutube className="w-10 fill-current"/>
            

          </div>

        </div>
      </div>
      <div className="bg-red-200 h-full">image</div>
      </main>
    </div>
  );
}

