import { Dela_Gothic_One } from "next/font/google";
import { Archivo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";


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
  title: "Admin Panel",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${delaGothic.className} ${archivo.className}`} style={{display:'flex', height:'100vh', alignItems:'center'}}>
          {children}
      </body>
    </html>
  );
}
