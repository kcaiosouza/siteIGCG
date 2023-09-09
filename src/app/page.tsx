// "use client"
import Link from "next/link";
import axios from "axios";

interface vers {
  data: [];
}

// import { useRouter } from "next/navigation";

export default async function Home() {
  const {data: vers}: vers = await axios.get("https://igcg-next.vercel.app/api/versDia")
  console.log(vers);
  // const router = useRouter();
  return (
    <main className="flex flex-col w-full h-screen">
      <nav className="flex w-full justify-between px-14 pt-6">
        <div>
          {/* LOGO NOVA AQUI (EM DESENVOLVIMENTO) */}
          <img width={50} height={50} src="/vercel.svg" alt="LOGO_IGCG" />
        </div>
        <div className="flex gap-12">
          <Link href='/'>Início</Link>
          <Link href='/'>Hinario</Link>
          <Link href='/webradio'>Rádio</Link>
          <Link href='https://www.igcgmusic.com.br/'>IGCGMusic</Link>
        </div>
        <div>
          {/* <div className="bg-[#B3DCBE] border-[#00A859] border-[3px] px-3 py-1" onClick={() => {console.log("https://igcg-next-kcaiosouza.vercel.app/api/versDia")}}>Portal IGCG</div> */}
        </div>
      </nav>

      <h1>Igreja em Campina Grande</h1>
      <span>O Testemunho da Unidade do Corpo de Cristo nesta Cidade.</span>


    </main>
  )
}
