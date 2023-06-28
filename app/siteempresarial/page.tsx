"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import Link from "next/link";

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <div className="container flex-col flex items-center justify-center min-h-screen px-4 mx-auto">
                <div style={
                    {
                        width: "50em",
                        height: "20em",
                        objectFit: "contain",
                        marginTop: "7em",
                        borderRadius: "1em",
                    }
                }>
                    <iframe src="https://www.metalesquadrias.com.br" style={
                    {
                        width: "60em",
                        height: "30em",
                        margin: "0 auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "1em",
                    }
                }/>
                </div>
                <div className="flex grid flex-wrap gap-8 mb-12 mt-20 sm:mt-20 sm:grid-cols-1 lg:gap-16">
                    <Card>
                        <div className="p-4 relative flex flex-col items-center m:5em"
                            style={
                                {
                                    backgroundColor: "#00000088",
                                    backdropFilter: "blur(12px)"
                                }
                        }>
                            <div className="z-10 flex flex-col spmt-32 ace-arround">
                                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    Quer Ter Um Site de Apresentação?
                                </span>
                                <div className="flex flex-col space-beetween">
                                    <span className="mt-4 mr-10 text-sm text-justify duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        &emsp; Gostaria de aparecer para seus clientes com um site moderno e funcional para mostrar a sua marca
                                        mas não sabe como? Entre em contato conosco e se preocupe só em vender.
                                    </span>
                                    <Link
                                    href="contact"
                                    style={{margin:"0 auto"}}
                                    >
                                    <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-500 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                        Entre em contato
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
