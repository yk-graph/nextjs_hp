import Head from "next/head";
import Link from "next/link";
import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ children, title = "HP by NextJS" }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
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
              <Link href="/task">
                <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                  Task
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
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="flex justify-center items-center w-full h-12 border-t">
        Powered by Vercel
      </footer>
    </div>
  );
};

export default memo(Layout);
