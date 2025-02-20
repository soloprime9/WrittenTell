import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Jav Guru - Latest Updates</title>
        <meta name="description" content="Daily updates provides on Today Update Website. Find updates daily!" />
        <meta name="keywords" content="jav,javguru,spangbang,japanese,English subbed JAV,Watch JAV.guru JAV Porn Tube Videos,Jav Guru - Watch JAV Online Free - Best JAV movies, updates, news, trending, latest" />
        <meta name="robots" content="index, follow" />
      </Head>
      {children}
    </>
  );
}
