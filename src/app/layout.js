"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function RootLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <html lang="en">
            <body className="antialiased">
                <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

                {!mobileOpen && (
                    <>
                        {children}
                        <Footer />
                    </>
                )}
            </body>
        </html>
    );
}
