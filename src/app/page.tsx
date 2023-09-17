import Link from "next/link";
import { ReadingBible } from "@/components/readingBible";
import date from "date-and-time";
// @ts-expect-error
import pt from "date-and-time/locale/pt"
import { PortalButton } from "@/components/portalButton";
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
  const data = new Date();
  const dia = new Date().getDay();

  return (
    <main className="flex flex-col justify-between w-full">
      <header className="flex flex-col justify-between w-full h-screen bg-[url('/img/irmaoOrandoNaMensagemBlur.jpg')] bg-cover backdrop-blur	">
        <nav className="flex w-full justify-between px-14 pt-6">
          <div>
            {/* LOGO NOVA AQUI (EM DESENVOLVIMENTO) */}
            <h3 className="w-[122px] font-bold text-[#002E18] text-[25px]">IGCG</h3>
          </div>
          <div className="flex items-center gap-12">
            <Link href='/' className="font-extrabold text-[17px] border-b-4 border-[#00A859]">Início</Link>
            <Link href='/hinario' className="font-extrabold text-[17px] border-b-0 hover:border-b-4 border-[#00A859] duration-100">Hinario</Link>
            <Link href='/webradio' className="font-extrabold text-[17px] hover:border-b-4 border-[#00A859] transition-all">Rádio</Link>
            <Link href='https://www.igcgmusic.com.br/' className="font-extrabold text-[17px] hover:border-b-4 border-[#00A859] transition-all">IGCGMusic</Link>
          </div>
          <div>
            <PortalButton/>
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
        <div className="absolute h-20 bg-no-repeat bottom-[-71px] w-full bg-[url('/img/lineOpacity.png')]"/>
      </div>

      <div className="w-full h-[380px] bg-[url('/img/_MG_3908.jpg')] bg-cover bg-center"/>

      <div className="flex flex-col w-full py-14 px-32 items-center justify-between relative">
      <div className="absolute h-20 bg-no-repeat top-[-71px] rotate-180 w-full bg-[url('/img/lineOpacity.png')]"/>
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
        <div className="absolute h-20 bg-no-repeat bottom-[-71px] w-full bg-[url('/img/lineOpacity.png')]"/>
      </div>

      <div className="w-full h-[380px] bg-[url('/img/_MG_7670.jpg')] bg-cover bg-center"/>

      <div className="flex flex-col w-full py-14 px-32 items-center justify-between relative">
      <div className="absolute h-20 bg-no-repeat top-[-71px] rotate-180 w-full bg-[url('/img/lineOpacity.png')]"/>
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
      </div>

      <div className="h-[4px] bg-[#00A859] w-full"/>
      <footer className="bg-[#B3DCBE] w-full pt-8">
        <div className="flex w-full items-center justify-around mb-5">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[23px]">Redes Sociais</h2>
            <Link href="https://www.facebook.com/IgrejaCG" target="_blank"><p>Facebook</p></Link>
            <Link href="https://www.instagram.com/igrejacg" target="_blank"><p>Instagram</p></Link>
            <Link href="https://www.twitter.com/IgrejaCG" target="_blank"><p>Twitter</p></Link>
            <Link href="https://www.tiktok.com/@IgrejaCG" target="_blank"><p>TikTok</p></Link>
            <Link href="https://www.youtube.com/IgrejaCG" target="_blank"><p>Youtube</p></Link>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[23px]">Contato</h2>
            <address>igrejacg@gmail.com</address>
            <Link href="https://api.whatsapp.com/send?phone=5583986612596" target="_blank">Whatsapp</Link>
          </div>
        </div>
        <div className="px-[100px]">
          <p className="text-[13px] mb-3 text-center">Chegando-vos para ele, a pedra que vive, rejeitada, sim, pelos homens, mas para com Deus eleita e preciosa, também vós mesmos, como pedras que vivem, sois edificados casa espiritual para serdes sacerdócio santo, a fim de oferecerdes sacrifícios espirituais agradáveis a Deus por intermédio de Jesus Cristo. I Pe. 2:4-5</p>
          <p className="text-center">Copyright 2008 - {data.getFullYear()} © Igreja em Campina Grande. Todos os Direito Reservados.</p>
        </div>
      </footer>
    </main>
  )
}
