"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import { BadgeDollarSign, View, Lightbulb, Plus } from "lucide-react";
import Link from "next/link";


export default function Example() {
    const socials = [
        {
            icon: <View size={20} />,
            href: "https://api.whatsapp.com/send?phone=5551995143460&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Tr%C3%A1fego%20Org%C3%A2nico%20para%20minha%20empresa.",
            label: "R$300,00 / Mês",
            handle: "Plano Low-Cost",
        },
        {
            icon: <BadgeDollarSign size={20} />,
            href: "https://api.whatsapp.com/send?phone=5551995143460&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Tr%C3%A1fego%20Pago%20para%20minha%20empresa.",
            label: "R$600,00 / Mês",
            handle: "Plano Basic",
        },
        {
            icon: <Lightbulb size={20} />,
            href: "https://api.whatsapp.com/send?phone=5551995143460&text=Ol%C3%A1!%20Gostaria%20de%20uma%20consultoria%20de%20marketing%20para%20minha%20empresa.",
            label: "R$1000 / mes",
            handle: "Plano Standard",
        },
		{
            icon: <Plus size={20} />,
            href: "https://api.whatsapp.com/send?phone=5551995143460&text=Ol%C3%A1!%20Gostaria%20de%20uma%20consultoria%20de%20marketing%20para%20minha%20empresa.",
            label: "R$1500,00 / Mês",
            handle: "Plano Premium",
        },
    ];
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-5">
				<div className="grid w-full grid-cols-4 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 text-center relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
        </div>
    );
}
