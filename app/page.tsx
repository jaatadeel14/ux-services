import Card from "@/components/Card";
import ContactUs from "@/components/ContactUs";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import NumberInfo from "@/components/NumberInfo";
import { Pi, UsersRound, Wand } from "lucide-react";
import Image from "next/image";
import Right from '@/components/Right'
export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className=" lg:w-[45%]">
            <Description />
          </div>
          <div className="w-full lg:w-[55%] grid gap-5 grid-cols-1 md:grid-col-2 lg:grid-cols-3">
            <NumberInfo value={17} description="Years" />
            <NumberInfo value={400} description="Projects" />
            <NumberInfo value={300} description="Trainings" />
            <NumberInfo value={4} description="Books" />
            <NumberInfo value={20} description="Countries" />
            <NumberInfo value={30} description="Events" />

          </div>
        </div>
        <div className="my-32 flex gap-10 justify-center items-center">
          <Logo />
          <Logo />
        </div>

        <div className="my-20 flex flex-col">
          <Image src="/banner.png" width={1657} height={629} alt="Banner Image" />
          <p className="text-right text-orange-600 text-md md:text-md lg:text-2xl m-10 hover:underline hover:underline-offset-4 cursor-pointer">Explore UXistanbul</p>
        </div>

        <h2 className="text-2xl font-bold">what we are doing</h2>

        <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center md:justify-evenly ">
          <div className="py-12 px-8 flex flex-col gap-y-8 border border-gray-300 rounded-xl items-center justify-center w-80 hover:bg-orange-600 hover:text-white hover:cursor-pointer">
            <p className="!text-start w-full">
              <Wand size={40} color="orange" />
            </p>
            <h2 className="text-start w-full text-2xl font-medium">Services</h2>
            <p className="text-start font-light">
              The Experience Design ecosystem is super-wide. We know most of it, but we only offer what we’re best at.
            </p>
          </div>

          <div className="py-12 px-8 flex flex-col gap-y-8 border border-gray-300 rounded-xl items-center justify-center w-80 hover:bg-blue-600 hover:text-white hover:cursor-pointer">
            <p className="!text-start w-full">
              <Pi size={40} color="blue" />
            </p>
            <h2 className="text-start w-full text-2xl font-medium">Trainings</h2>
            <p className="text-start font-light">
              Our techniques, methods and methodologies… We have put the essence of our knowledge gained from hundreds of projects into trainings.
            </p>
          </div>

          <div className="py-12 px-8 flex flex-col gap-y-8 border border-gray-300 rounded-xl items-center justify-center w-80 hover:bg-green-600 hover:text-white hover:cursor-pointer">
            <p className="!text-start w-full">
              <UsersRound size={40} color="green" />
            </p>
            <h2 className="text-start w-full text-2xl font-medium">Community</h2>
            <p className="text-start font-light">
              Knowledge is for sharing. We produce plenty of resources and organize events regularly. You are invited.
            </p>
          </div>

        </div>

        <h2 className="text-2xl font-light-500 text-center">Some of our stakeholders that we have worked with recently:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-12 my-20 justify-items-center">
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </div>

        <ContactUs />
      </div>
      <Footer />
      <div>
        <Right/>
      </div>

    </main>
  );
}
