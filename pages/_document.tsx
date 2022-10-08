import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-rose-300 py-2">
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
