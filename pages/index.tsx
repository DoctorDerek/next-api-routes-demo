import { useEffect, useState } from "react"

import Card from "@/components/Card"
import { Character } from "@/pages/api/character/[id]"

export default function CharacterById({ character }: { character: Character }) {
  const [minCharacterId, setMinCharacterId] = useState(1)
  const [maxCharacterId, setMaxCharacterId] = useState(10)
  const [characters, setCharacters] = useState<Character[]>([])
  useEffect(() => {
    // First, we create an array with the numbers from min ... max:
    const characterNumbersToDisplay = [
      ...Array(maxCharacterId - minCharacterId + 1).keys(),
    ].map((index) => index + minCharacterId)
    // Then, we fetch the data using an array of promises:
    const promises = characterNumbersToDisplay.map((id) => {
      return fetch(`/api/character/${id}`)
        .then((response) => response.json())
        .then((result) => result as Character)
    })
    // Once all the promises resolve, we update our local component state:
    Promise.all(promises).then((newCharacters) => setCharacters(newCharacters))
  }, [maxCharacterId, minCharacterId])

  return (
    <>
      <div className="flex w-full flex-wrap space-y-2 px-2 pb-8 text-xl font-bold sm:flex-nowrap sm:justify-evenly sm:space-y-0">
        <label className="flex w-full justify-between sm:justify-evenly">
          <span>Minimum Character ID</span>
          <input
            type="number"
            onChange={(event) => {
              const value = Number(event.target.value)
              let min = 1 // We set a floor of an `id` of 1.
              if (!Number.isNaN(value) && value >= 1) min = value
              setMinCharacterId(min)
            }}
            defaultValue={minCharacterId}
            className="w-10 rounded-lg text-right"
          />
        </label>

        <label className="flex w-full justify-between sm:justify-evenly">
          <span>Maximum Character ID</span>
          <input
            type="number"
            onChange={(event) => setMaxCharacterId(Number(event.target.value))}
            defaultValue={maxCharacterId}
            className="w-10 rounded-lg text-right"
          />
        </label>
      </div>
      <div className="grid space-y-1 px-2 sm:grid-cols-2 sm:space-x-1 md:grid-cols-5">
        {characters.map((character) => (
          <Card
            character={character}
            key={`${character.name}${character.status}${character.image}`}
          />
        ))}
      </div>
    </>
  )
}
