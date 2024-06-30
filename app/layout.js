import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./common/Navbar";
import { Footer } from "./common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanishk Sachdeva - Portfolio",
  description: "Kanishk Sachdeva's portfolio website",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.png" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen overflow-x-hidden overflow-y-hidden flex flex-col justify-between bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-fixed bg-size bg-top">
          <div className="flex justify-end">
            <Navbar />
          </div>
          {children}
          <div className="flex justify-center">
            <Footer />
          </div>
        </main>
      </body>

    </html >
  );
}
