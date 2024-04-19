import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import NextAuthSessionProvider from "./provider/sessionProvider";

const inter = Lato({ weight: ["900", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <nav className="  bg-white border-white dark:bg-white-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://uploads-ssl.webflow.com/5faaa41b0012eb7dc69ec962/5faba064bc2f41056b1dff97_logoDarkblue.svg" className="h-12" alt="ContactWise Logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">contactwise</span> */}
              </a>

              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-black">
                  <li>
                    <a href="#" className=" text-xl block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className=" text-xl block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Why ContactWise?</a>
                  </li>
                  <li>
                    <a href="#" className=" text-xl block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className=" text-xl block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Resources</a>
                  </li>
                  <li>
                    <a href="#" className="text-xl  block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav >
          {children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
