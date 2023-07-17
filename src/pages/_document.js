import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='w-full h-full relative'>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <title>Quiz</title>
      </Head>
      <body className='w-full h-full relative'>        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
