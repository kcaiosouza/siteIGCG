'use client'
import { useRouter } from "next/navigation";

export async function PortalButton() {
  const route = useRouter();

  function pushRouter(path:string){
    route.push(path);
  }

  return(
    <div className="bg-[#B3DCBE] border-[#00A859] border-[3px] px-3 py-1" onClick={() => {pushRouter('/login')}}>Portal IGCG</div>
  )
}