import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Webintegratorz",
  description: "We Innovate, Build and Excel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayoutWrapper>
          <Navbar />
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
