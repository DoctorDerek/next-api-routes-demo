import { GetStaticPaths, GetStaticProps } from "next"

import Card from "@/components/Card"
import { Character, fetchCharacter } from "@/pages/api/character/[id]"

export default function CharacterById({ character }: { character: Character }) {
  return <Card character={character} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // We build ids 1 & 2 (`/character/id/1` and `/character/id/2`) in advance:
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // But if we try another id, like 3, then we'll still statically render:
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Since we'll never call this code client-side, we don't use fetch here, and
  // instead we call our `fetchCharacter` method directly instead of using the
  // API. You would fetch with `getServerSideProps` or client-side `useEffect`.

  const character = await fetchCharacter({ id: Number(params.id) })

  return {
    // Passed to the page component as props
    props: { character },
  }
}
