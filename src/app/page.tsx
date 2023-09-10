'use client'

import Link from "next/link";
import { ReadingBible } from "@/components/readingBible";
import { useRouter } from "next/navigation";
// @ts-expect-error
import date from "date-and-time";
// @ts-expect-error
import pt from "date-and-time/locale/pt"
date.locale(pt);

const infoReuniao = [
  {
    hora: "DOMINGO ÀS 09:00 HORAS",
    descricao: "Todos os domingos reunimo-nos para partir do pão. É uma grande festa onde são constante o louvor, a adoração e o falar mútuo com muita alegria e satisfação expressado pelos presentes. Cremos que o primeiro dia da semana é o dia do Senhor e o começamos com total consagração a Ele. Nesta reunião, a unidade do Senhor Jesus é o ponto mais forte."
  },
  {
    hora: "SEGUNDA ÀS 20:00 HORAS",
    descricao: "Todas as segundas, reunimos com os irmãos que servem a igreja, onde oramos e em unidade e unanimidade somos direcionados a como avançar no serviço aos santos."
  },
  {
    hora: "TERÇA-FEIRA ÀS 20:00 HORAS",
    descricao: "O significado da oração é falar com Deus. Além da oração individual, reunimo-nos para praticar a oração coletiva todas às terças-feiras Nessa reunião, além de desfrutarmos da presença de Nosso Senhor, entregamos a ele nossas petições sobre quaisquer assuntos, onde todos os pedidos são levados para a ciência de nosso Deus. Apesar de conhecedor de nossas necessidades e de todas as coisas, o Senhor deseja que na reunião de oração, elas possam ser oferecidas a Ele."
  },
  {
    hora: "QUARTA FEIRA ÀS 20:00 HORAS",
    descricao: "Uma vez por semana os grupos familiares de cuidado mútuo, os GFCM como costumamos chamar, composto por no máximo doze pessoas, se reúnem em vários bairros da cidade para juntos desfrutarem da palavra do Senhor Jesus. Por ser um grupo pequeno, a oportunidade de todos participarem é maior do que nas outras reuniões. Assim nessas reuniões temos a oportunidade de compartilhar todas as nossas necessidades pessoais para podermos receber ajuda e encorajamento através de oração ou por aconselhamento dos demais membros do grupo."
  },
  {
    hora: "QUINTA FEIRA ÀS 20:00 HORAS",
    descricao: "Todas as quintas, reunimos com os irmãos responsáveis pelos jovens e adolescentes, para que possa ser feito o alinhamento semanal da reunião."
  },
  {
    hora: "SEXTA FEIRA - NÃO TEMOS REUNIÕES",
    descricao: ""
  },
  {
    hora: "SÁBADO ÀS 19:30 HORAS",
    descricao: "Todos os sábados durante seis meses estudamos um livro da Bíblia, abrangendo toda a Bíblia no estudo. Nesta reunião, após a apresentação da mensagem, a reunião é aberta para a participação de todos os presentes que compartilham um após o outro sobre o assunto da mensagem. Desta forma, todos podem profetizar e edificar os demais com a sua contribuição e porção compartilhada."
  }
]

export default function Home() {
  const route = useRouter();
  const data = new Date();
  const dia = new Date().getDay();

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
          <p className="font-light text-center">De acordo com a Bíblia no Novo Testamento a igreja é o resultado do desfrute de Cristo pelos cristãos isto é, filhos de Deus<br/>Possui tanto o aspecto universal, abrangendo todas as épocas, desde a primeira vinda do Senhor Jesus Cristo até a Sua segunda vinda, como possui também o aspecto local...</p>
        </div>

        <div>
          <div className="bg-[#B3DCBE] rounded-xl font-light px-4 py-3 cursor-pointer hover:bg-[#00A859] transition">Continuar Lendo...</div>
        </div>
        {/* <div/> -> Referente ao fade em duas camadas  (POSITION ABSOLUTE) */}
      </div>

      <div className="w-full h-[380px] bg-[url('/img/_MG_3908.jpg')] bg-cover bg-center"/>

      <div className="flex flex-col w-full py-14 px-32 items-center justify-between relative">
        <div className="flex relative items-center pb-10">
          <h2 className="text-[25px] font-bold">Cremos que...</h2>
          <span className="absolute left-[4px] bottom-10 opacity-30 font-extrabold text-[39px]">CREMOS</span>
        </div>
        <div className="mb-10">
          <p className="font-light text-center">A Bíblia - Cremos que a Bíblia Sagrada é a completa revelação divina, verbalmente inspirada pelo Espírito Santo.<br/><br/>Deus Triuno - Cremos que o nosso Deus é único e triúno – O Pai, O Filho e o Espírito – co-existindo de eternidade a eternidade...</p>
        </div>

        <div>
          <div className="bg-[#B3DCBE] rounded-xl font-light px-4 py-3 cursor-pointer hover:bg-[#00A859] transition">Continuar Lendo...</div>
        </div>
        {/* <div/> -> Referente ao fade em duas camadas  (POSITION ABSOLUTE) */}
      </div>

      <div className="w-full h-[380px] bg-[url('/img/_MG_7670.jpg')] bg-cover bg-center"/>

      <div className="flex flex-col w-full py-14 px-32 items-center justify-between relative">
        <div className="flex relative items-center pb-10">
          <h2 className="text-[25px] font-bold">Nossas Reuniões</h2>
          <span className="absolute left-[9px] bottom-10 opacity-30 font-extrabold text-[39px]">REUNIÕES</span>
        </div>
        <div className="mb-10 flex gap-8">
          <div className="flex flex-col items-center">
            <span className="font-bold text-[20px] uppercase leading-[0px]">{date.format(data, 'ddd')}</span>
            <span className="font-bold text-[45px]">{data.getDate()}</span>
          </div>
          <h2 className="font-bold text-[20px]">{infoReuniao[dia].hora}</h2>
        </div>
        <div className="mb-10">
          <p className="font-light text-center">{infoReuniao[dia]?.descricao}</p>
        </div>

        <div>
          <div className="bg-[#B3DCBE] rounded-xl font-light px-4 py-3 cursor-pointer hover:bg-[#00A859] transition">Todas as Reuniões</div>
        </div>
        {/* <div/> -> Referente ao fade em duas camadas  (POSITION ABSOLUTE) */}
      </div>
    </main>
  )
}
