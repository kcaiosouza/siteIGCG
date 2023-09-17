import { PortalButton } from "@/components/portalButton";
import Link from "next/link";

export default function Hinario() {
  return(
    <main>
      <nav className="flex w-full justify-between px-14 pt-6">
          <div>
            {/* LOGO NOVA AQUI (EM DESENVOLVIMENTO) */}
            <h3 className="w-[122px] font-bold text-[#002E18] text-[25px]">IGCG</h3>
          </div>
          <div className="flex items-center gap-12">
            <Link href='/' className="font-extrabold text-[17px] border-b-0 hover:border-b-4 border-[#00A859] duration-100">Início</Link>
            <Link href='/hinario' className="font-extrabold text-[17px] border-b-4 border-[#00A859]">Hinario</Link>
            <Link href='/webradio' className="font-extrabold text-[17px] hover:border-b-4 border-[#00A859] transition-all">Rádio</Link>
            <Link href='https://www.igcgmusic.com.br/' className="font-extrabold text-[17px] hover:border-b-4 border-[#00A859] transition-all">IGCGMusic</Link>
          </div>
          <div>
            <PortalButton/>
          </div>
        </nav>
      
        <div className="flex flex-col w-full mt-8 py-14 px-32 items-center justify-between relative">
          <div className="flex relative items-center pb-10">
            <h2 className="text-[25px] font-bold">Selecione uma Categoria</h2>
            <span className="absolute left-10 bottom-10 opacity-30 font-extrabold text-[39px]">CATEGORIA</span>
          </div>
          <div className="flex flex-row gap-6 mb-10">
            <div className="flex flex-col item-center justify-center w-[210px] h-[210px] text-[#000000b2] hover:text-[#00A859] bg-transparent border-2 border-[#B3DCBE] rounded-lg shadow hover:bg-[#B3DCBE] hover:shadow-lg transition-all cursor-pointer">
              <h1 className="text-[64px] font-bold text-center">H</h1>
              <span className="italic text-center">Hinário</span>
            </div>
            <div className="flex flex-col item-center justify-center w-[210px] h-[210px] text-[#000000b2] hover:text-[#00A859] bg-transparent border-2 border-[#B3DCBE] rounded-lg shadow hover:bg-[#B3DCBE] hover:shadow-lg transition-all cursor-pointer">
              <h1 className="text-[64px] font-bold text-center">C</h1>
              <span className="italic text-center">Cânticos</span>
            </div>
            <div className="flex flex-col item-center justify-center w-[210px] h-[210px] text-[#000000b2] hover:text-[#00A859] bg-transparent border-2 border-[#B3DCBE] rounded-lg shadow hover:bg-[#B3DCBE] hover:shadow-lg transition-all cursor-pointer">
              <h1 className="text-[64px] font-bold text-center">S</h1>
              <span className="italic text-center">Suplemento</span>
            </div>
          </div>
        </div>

    </main>
  )
}