import {Signika} from "next/font/google";
import "./globals.css";
import Header from "./@header/page";
import Footer from "./@footer/page";

const signika = Signika({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: {
    absolute: "",
    default: "Discovery Deck",
    template: "%s | Discovery Deck"
  },
  description: "Home To Nigeria's Future Sounds",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
