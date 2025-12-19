import { Dela_Gothic_One } from "next/font/google";
import { Archivo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";

export const metadata = {
  title: "Thank You",
  // description: "Home",
};

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

export default function ThankYouLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${delaGothic.className} ${archivo.className}`}>
        {children}
      </body>
    </html>
  );
}
