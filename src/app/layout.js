import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "./context/GlobalContextProvider";
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather App",
  description: "Weather App",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolage.variable} antialiased bg-neutral-900`}
      >
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
