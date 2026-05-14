import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Header />

            <main className="flex flex-1 flex-col">{children}</main>

            <Footer />
        </div>
    );
}
