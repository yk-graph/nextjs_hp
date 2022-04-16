import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'HP by Next.js' }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact">
                <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col flex-1 justify-center items-center w-screen">
        {children}
      </main>
      <footer className="flex justify-center items-center w-full h-12 border-t">
        Powered by Vercel
      </footer>
    </div>
  )
}
