function ShowAlert({ text }: { text: string }) {
  return (
    <div className="max-w-2xl m-auto mt-20 p-2 py-4 text-center text-lg font-bold rounded-md bg-gradient-to-bl from-[#222] via-[#151515] to-[#111] border-2 border-black">{text}</div>
  )
}

export default ShowAlert