import { Dela_Gothic_One } from "next/font/google";
import { Archivo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { ModalProvider } from "../context/ModalContext";


const delaGothic = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${delaGothic.className} ${archivo.className}`}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
