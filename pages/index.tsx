import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTheme } from 'next-themes';

export default function Home() {
  let icon;
  const {theme, setTheme} = useTheme();
  const { resolvedTheme } = useTheme();

    // switch resolved theme
    if (resolvedTheme === "light") {
      icon = "🌙";
    }
    if (resolvedTheme === "dark") {
        icon = "🌞";
    }
  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Head Tags */}
      <Head>
        <title>Ussop</title>
        <meta
          name="description"
          content="Ussop Ltd. is a content management office based in Vancouver B.C with the goal of providing ultimate user experiences by handling and parsing advertisment data efficently."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-lg">
        <header>
          <Image src="/logo.png" width={365} height={165} alt="Ussop Ltd. logo" />
        </header>
        <main>
        <h1 className="mt-3 text-4xl font-bold text-gray-800 dark:text-slate-300 max-w-[365px]">
          We&apos;re Ussop Ltd.
        </h1>
        <p className="mt-5 text-2xl leading-8 text-gray-600 dark:text-slate-400 font-medium tracking-tight max-w-[365px]">
          We analyze your audience and give you developer friendly targeted information.
        </p>
      <div className="mt-5 text-lg prose prose-lg text-gray-500 dark:text-slate-500 max-w-[450px] tracking-wide">
        <p>Whether you handle large volumes of raw data or are involved with small amounts, you know that data conversion and data processing are vital to your business.</p>
        <p className='mt-3'>We are a team of dedicated data scientists and data engineers who are passionate about data and the way we use it to make our lives better.</p>
        <p className='mt-3'>Our team at Ussop handles your data and processes it with our <a className='text-green-600 duration-300 hover:text-green-500' href="javascript:void(0);">advanced AI algorithm</a> to give you an insight into your audience and their profile alongside detailed analytics.</p>
      </div>
      </main>
      
      <footer className="mt-8 mb-2 prose prose-lg text-gray-500 max-w-[365px] space-x-2">
        <a href="javascript:void(0);" className="inline-block fill-current p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 w-10 hover:bg-gray-200/100 dark:text-slate-500 dark:bg-gray-800/0 dark:hover:bg-gray-800/100">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M29.344 30.477c2.404-.5 4.585-1.366 6.28-2.638C38.52 25.668 40 22.314 40 19c0-2.324-.881-4.494-2.407-6.332c-.85-1.024 1.636-8.667-.573-7.638c-2.21 1.03-5.45 3.308-7.147 2.805A20.712 20.712 0 0 0 24 7c-1.8 0-3.532.223-5.147.634C16.505 8.232 14.259 6 12 5.03c-2.26-.97-1.026 6.934-1.697 7.765C8.84 14.605 8 16.73 8 19c0 3.314 1.79 6.668 4.686 8.84c1.93 1.446 4.348 2.368 7.054 2.822m0 0c-1.159 1.275-1.738 2.486-1.738 3.632v8.717m11.343-12.534c1.097 1.44 1.646 2.734 1.646 3.88v8.654M6 31.215c.899.11 1.566.524 2 1.24c.652 1.075 3.074 5.063 5.825 5.063h4.177"/></svg>
        </a>
        <a href="javascript:void(0);" className="inline-block fill-current p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 w-10 hover:bg-gray-200/100 dark:text-slate-500 dark:bg-gray-800/0 dark:hover:bg-gray-800/100">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" d="M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912c9.928-6.203 9.38-16.89 9.38-21.788c.9-1.884 2.8-2.842 2.8-7.942c-1.866 1.724-3.721 2.31-5.565 1.76c-1.806-2.754-4.291-3.973-7.456-3.655c-4.746.477-6.482 5.133-5.971 11.158c-7.318 3.7-13.056-2.683-16.014-7.503c-.988 3.796-1.94 8.354 0 13.395c1.294 3.362 4.405 6.203 9.331 8.526C12.332 35.33 8.224 36.377 5 35.762Z"/></svg>
        </a>
        <a href="javascript:void(0);" className="inline-block fill-current p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 w-10 hover:bg-gray-200/100 dark:text-slate-500 dark:bg-gray-800/0 dark:hover:bg-gray-800/100">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5"/><path d="m4 9l20 15L44 9"/></g></svg>
        </a>
        <a onClick={() => setTheme(theme === "light" ? "dark" : "light")} href="javascript:void(0);" className="align-top inline-block fill-current p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 w-10 hover:bg-gray-200/100 dark:text-slate-500 dark:bg-gray-800/0 dark:hover:bg-gray-800/100">
          {icon}
        </a>
      </footer>
      {/* <div className='text-gray-500 space-x-1 font-bold lowercase block text-md font-mono'>
          <a href="javascript:void(0);" className='p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 hover:bg-gray-200/100'>
            /api
          </a>
          <a href="javascript:void(0);" className='p-1.5 rounded-lg hover:text-gray-600 duration-300 bg-gray-200/0 hover:bg-gray-200/100'>
            /about
          </a>
        </div> */}
      </div>
    </div>
  )
}