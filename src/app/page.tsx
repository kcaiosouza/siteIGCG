'use client'

import Link from "next/link";
import { ReadingBible } from "@/components/readingBible";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  function pushRouter(path:string){
    route.push(path);
  }

  return (
    <main className="flex flex-col justify-between w-full">
      <header className="flex flex-col justify-between w-full h-screen bg-[url('/img/irmaoOrandoNaMensagemBlur.jpg')] bg-cover backdrop-blur	">
        <nav className="flex w-full justify-between px-14 pt-6">
          <div>
            {/* LOGO NOVA AQUI (EM DESENVOLVIMENTO) */}
            <h3 className="w-[122px] font-bold text-[#002E18] text-[25px]">IGCG</h3>
          </div>
          <div className="flex gap-12">
            <Link href='/'>Início</Link>
            <Link href='/'>Hinario</Link>
            <Link href='/webradio'>Rádio</Link>
            <Link href='https://www.igcgmusic.com.br/'>IGCGMusic</Link>
          </div>
          <div>
            <div className="bg-[#B3DCBE] border-[#00A859] border-[3px] px-3 py-1" onClick={() => {pushRouter('/login')}}>Portal IGCG</div>
          </div>
        </nav>

        <div className="flex flex-col items-center">
          <h1 className="text-[45px] font-extrabold text-[#002E18]">Igreja em Campina Grande</h1>
          <span className="italic font-light">O Testemunho da Unidade do Corpo de Cristo nesta Cidade.</span>
        </div>

        <div className="pb-[32px]">
          <ReadingBible/>
        </div>
      </header>

      <div className="flex flex-col w-full py-14 px-32 items-center justify-between relative">
        <div className="flex relative items-center pb-10">
          <h2 className="text-[25px] font-bold">Sobre Nós</h2>
          <span className="absolute left-0 bottom-10 opacity-30 font-extrabold text-[39px]">SOBRE</span>
        </div>
        <div className="mb-10">
          <p className="font-light">De acordo com a Bíblia no Novo Testamento a igreja é o resultado do desfrute de Cristo pelos cristãos isto é, filhos de Deus. Possui tanto o aspecto universal, abrangendo todas as épocas, desde a primeira vinda do Senhor Jesus Cristo até a Sua segunda vinda, como possui também o aspecto local...</p>
        </div>

        <div>
          <div className="bg-[#B3DCBE] rounded-xl font-light px-4 py-3 cursor-pointer hover:bg-[#00A859] transition">Continuar Lendo...</div>
        </div>
        {/* <div/> -> Referente ao fade em duas camadas  (POSITION ABSOLUTE) */}
      </div>
    </main>


  )
}
