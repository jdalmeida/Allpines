import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    {
        name: "Soluções",
        href: "/solucoes"
    }, {
        name: "Contato",
        href: "/contact"
    }, {
        name: "Sobre",
        href: "/sobre"
    }
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-16 animate-fade-in">
                <div className="inline-flex rounded-md shadow-sm flex items-center justify-center gap-4">
                    {
                    navigation.map((item) => (
                        <Link key={
                                item.href
                            }
                            href={
                                item.href
                            }
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-500 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">


                                {
                                item.name
                            } </button>
                        </Link>

                    ))
                } </div>
            </nav>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}/>
            <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                <img src="/logo.svg" alt="allpines"
                    style={
                        {width: '60vw'}
                    }/>
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Preparado para dar o play nos negócios?
                </h2>
            </div>
        </div>
    );
}
