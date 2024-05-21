import { Metadata } from "next";
import dynamic from "next/dynamic";
import Img from "next/image";
import Navbar from "../components/Navbar";

// Components
const Footer = dynamic(() => import("../components/Footer"));

export const metadata: Metadata = {
  title: "Vortres | Home",
  description: "Vortres is a Minecraft server with fun and uniqe gamemode.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex items-center justify-center">
       <Img
        src="/heroBG.png"
        alt="Hero Image"
        fill={true}
        loading="eager"
        className="z-0"
       />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Hello there!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            HorizonBot by Vortres Development
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
