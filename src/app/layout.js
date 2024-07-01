import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: " Next App",
//   description: "Next.Js 14 complete app",
// };

export const metadata = {
  title:{
    default: "Nextjs 14 Homepage",
    template: "%s | Nextjs 14 App"
  },
  description: {
    default: "Nextjs 14 Homepage description",
    template: "%s | Some page description"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSideProviderTest>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ClientSideProviderTest>
      </body>
    </html>
  );
}
