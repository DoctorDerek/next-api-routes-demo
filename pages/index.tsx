import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-rose-300 font-xl">
      <Head>
        <title>Next API Routes Demo by @DoctorDerek</title>
      </Head>

      <main>
        <h1>h1</h1>
      </main>

      <footer>
        Created by{" "}
        <Link href="https://DoctorDerek.com">
          <a>@DoctorDerek</a>
        </Link>
      </footer>
    </div>
  )
}
