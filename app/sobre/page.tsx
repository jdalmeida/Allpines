"use client";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <div className="container flex-col flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="mt-12 py-8">
                    <span>
                        <img src="/logo.svg" alt="allpines"
                            style={
                                {
                                    width: '50vw',
                                    margin: 'auto 2em',
                                    objectFit: 'contain'
                                }
                            }/>
                    </span>
                </div>
                <div className="flex grid flex-wrap gap-8 mb-12 mt-20 sm:mt-20 sm:grid-cols-2 lg:gap-16">
                    <Card>
                        <div className="p-4 relative flex flex-col items-center m:5em">
                            <div className="z-10 flex flex-col spmt-32 ace-arround">
                                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    O que é a Allpines?
                                </span>
                                <div className="flex flex-row space-beetween">
                                    <span className="mt-4 text-sm text-justify duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        &emsp; A Allpines é um grupo de empresas formado por quatro jovens empreendedores que buscam integrar diferentes ramos da tecnologia para ajudar
                                                                                a alavancar pequenas e médias empresas. Nós trabalhamos com as mais recentes tecnologias de desenvolvimento de sites, e te ajudamos a criar um 
                                                                                site de vendas online que colocará a sua empresa no mercado do futuro.<br/>
                                        &emsp; Acreditamos que inserir a sua empresa em um novo mercado, não só trará novos clientes e mais lucro, mas também irá preparar
                                                                                a sua empresa para o futuro que está batendo em nossa porta. Entre em contato conosco e faça seu orçamento sem compromisso.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-4 relative flex flex-col items-center m:5em">
                            <div className="z-10 flex flex-col space-arround">
                                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    Nossa história
                                </span>
                                <div className="flex flex-row space-beetween">
                                    <span className="mt-4 text-sm text-justify duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        &emsp; A Allpines surgiu em um sábado a tarde em uma roda de conversa com os quatro criadores da empresa. A partir dali surgiu a idéia de juntar 
                                                                            nossas habilidades e criar empresa que ajudasse pequenas e médias empresas a crescer junto conosco e atingir um mercado muito pouco explorado pelas
                                                                            empresas da nossa região.<br/>
                                        &emsp; O nome Allpines surgiu a partir de uma pinha que foi usada para simbolizar o valor imaterial do grupo, simbolizando algo que o dinheiro não pode comprar.
                                                                            E como um pinheiro não é uma floresta sozinho, nós queremos reunir todos os pinheiros para criar uma floresta de sucesso para as empresas que querem crescer.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
