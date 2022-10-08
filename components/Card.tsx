import Image from "next/image"

import { Character } from "@/pages/api/character/[id]"

export default function Card({ character }: { character: Character }) {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-solid border-sky-700 bg-gray-300">
      <div className="absolute -left-3 -top-2 z-10 -rotate-12 text-3xl font-extrabold uppercase text-red-600">
        {character.status === "Alive" && "Wanted"}
        {character.status === "Dead" && "Deceased"}
        {character.status === "unknown" && "Unknown"}
      </div>
      <div className="relative h-40 w-40">
        <Image
          layout="fill"
          src={character.image}
          alt={character.name}
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="whitespace-wrap flex w-40 flex-col text-center text-xl">
        <span className="font-bold">{character.name}</span>
        <span>
          is <span className="font-bold">{character.status}</span>!
        </span>
      </div>
    </div>
  )
}
