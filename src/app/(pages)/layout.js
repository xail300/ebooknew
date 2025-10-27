import { Dela_Gothic_One } from "next/font/google";
import { Archivo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from "../components/Header";


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

export const metadata = {
  title: "Home - Ebook Editing Services",
  description: "Home - Ebook Editing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${delaGothic.className} ${archivo.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
