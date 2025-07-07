import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Preloader from "./components/Preload/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "반엣",
  description:
    "스타일리시하고 편안한 엄마들을 위한 패션 브랜드 반엣 - 최신 트렌드와 특별한 맞춤 의류를 만나보세요.",
  icons: {
    icon: "/banatsmall.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Global CSS from public/ */}
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/css/all.min.css" />

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Download the best Creative Portfolio HTML Template in 2025"
        />
        <meta name="author" content="ClaPat Studio" />
        <meta
          property="og:image"
          content="http://bennet.clapat.com/prez/01_preview.png"
        />
        <meta charSet="UTF-8" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          {/* Preload  */}
          {/* <Preloader/> */}
          <div className="cd-index cd-main-content">
            <div
              id="clapat-page-content"
              className="dark-content"
              data-bgcolor="#c8c8c8"
            >
              <Navbar />

              <div id="content-scroll">
                <div id="main">{children}</div>
              </div>
            </div>
          </div>
        </main>

        {/* Overlay ve cursor div'leri */}
        {/* <div className="cd-cover-layer"></div>
        <div id="magic-cursor">
          <div id="ball">
            <div id="ball-drag-x"></div>
            <div id="ball-drag-y"></div>
            <div id="ball-loader"></div>
          </div>
        </div>
        <div id="clone-image">
          <div className="hero-translate"></div>
        </div>
        <div id="rotate-device"></div> */}

        {/* Scriptler */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.4.0/smooth-scrollbar.js"
          strategy="beforeInteractive"
        />

        <Script src="/js/clapat.js" strategy="lazyOnload" />
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/common.js" strategy="lazyOnload" />
        <Script src="/js/contact.js" strategy="lazyOnload" />
        <Script src="/js/scripts.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
