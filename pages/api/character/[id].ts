import type { NextApiRequest, NextApiResponse } from "next"

export type Character = { name: string; status: string; image: string }

export const fetchCharacter = async ({ id }: { id: number }) => {
  // We'll query the Rick and Morty API using a GET request:
  const URL = "https://rickandmortyapi.com/api/character/"
  return fetch(`${URL}${id}`)
    .then(
      // We type-cast to Character so that TypeScript knows the return type:
      (response) => response.json() as unknown as Character
    )
    .then((result) => result)
}

export default async function characterAPI(
  req: NextApiRequest,
  res: NextApiResponse<Character>
) {
  await fetchCharacter({ id: Number(req?.query?.id) })
    .then((result) => {
      const character = result || ({} as Character)
      res.status(200).json(character)
    })
    .catch((error: any) => {
      console.error(error)
      res.status(500).json({
        name: String(error),
        status: "Error",
        image: "https://http.cat/500.jpg",
      })
    })
}
