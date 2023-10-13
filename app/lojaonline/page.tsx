"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import MediaQuery from "react-responsive";

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-[100vh]">
            <Navigation />

            <MediaQuery query="(min-device-width: 768px)">
            <div className="text-zinc-400 relative bg-[url(/lojaonline.png)] bg-center bg-contain bg-right-top bg-no-repeat shadow-xl mt-20">
                    <div className="absolute inset-0 bg-black-75 bg-transparent from-black/95 to-white-25 bg-gradient-to-r bg-gradient-to-l">
                    </div>
                    <div className="relative mx-auto max-w-screen-xl px-4 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 min-[400px]:mt-20">
                        <Card>
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right p-4 rounded-xl bg-gray-900/75 bg-transparent from-gray-900/75 to-white-25 bg-gradient-to-r bg-gradient-to-l">
                                <h1 className="text-3xl font-extrabold sm:text-5xl text-left animtxt">
                                    Quer Ter Uma
                                    <strong className="block font-extrabold text-blue-700">
                                        Loja Online?
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
                                    Gostaria de vender no mercado do futuro com uma loja como essa
                                    mas não sabe como? Entre em contato conosco e se preocupe só em vender.
                                </p>
                                <Link
                                    href="/contact"
                                    style={{ margin: "0 auto" }}
                                >
                                    <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-500 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                        Entre em contato
                                    </button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery query="(max-device-width: 768px)">
                <div className="relative bg-[url(/lojaonline.png)] bg-center bg-contain bg-no-repeat shadow-xl mt-20 w-100 h-[20em]"></div>
                <div className="text-zinc-400 relative mx-auto max-w-screen-xl px-4 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                        <Card>
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right p-4 rounded-xl bg-gray-900/75 bg-transparent from-gray-900/75 to-white-25 bg-gradient-to-r bg-gradient-to-l">
                                <h1 className="text-3xl font-extrabold sm:text-5xl text-left animtxt">
                                    Quer Ter Uma
                                    <strong className="block font-extrabold text-blue-700">
                                        Loja Online?
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
                                    Gostaria de vender no mercado do futuro com uma loja como essa
                                    mas não sabe como? Entre em contato conosco e se preocupe só em vender.
                                </p>
                                <Link
                                    href="/contact"
                                    style={{ margin: "0 auto" }}
                                >
                                    <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-500 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                        Entre em contato
                                    </button>
                                </Link>
                            </div>
                        </Card>
                    </div>
            </MediaQuery>
        </div >
    );
}
