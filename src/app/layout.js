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
    <html lang="en">
      <Head>
        <title>Jav Guru - Latest Updates</title>
        <meta name="description" content="Daily updates provides on Today Update Website. Find updates daily!" />
        <meta name="keywords" content="jav,javguru,spangbang,japanese,English subbed JAV,Watch JAV.guru JAV Porn Tube Videos,Jav Guru - Watch JAV Online Free - Best JAV movies, updates, news, trending, latest" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>


<header className="bg-white shadow-sm">
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 border-dashed mt-5 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold text-green-600 pointer"><a href="https://rumoursai.vercel.app/">Jav Guru</a></span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="https://reduceimages-sigma.vercel.app/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
          <a href="https://reduceimages-sigma.vercel.app/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
          <a href="https://reduceimages-sigma.vercel.app/privacy-policy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy Policy</a>
          <a href="https://reduceimages-sigma.vercel.app/terms-and-conditions" className="text-gray-700 hover:text-green-600 transition-colors">Terms and Conditions</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-green-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>


        {children}
      </body>
    </html>
  );
}
