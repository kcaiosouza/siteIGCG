export async function ReadingBible() {
  const response = await fetch("https://igcg-next.vercel.app/api/versDia", {
    next: {
      revalidate: 60 * 60 * 6 // 6 hours
    }
  })

  const versiculos = await response.json();

  return(
    <div className="flex flex-col items-center justify-center">
      <h4 className="font-extrabold text-[21px]">Leitura Bíblica</h4>
      <span className="whitespace-break-spaces text-center italic font-light">{versiculos.versc[`${versiculos.date}`]}</span>
    </div>
  )
}