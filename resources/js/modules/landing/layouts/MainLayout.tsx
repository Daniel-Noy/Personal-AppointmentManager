import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
            <Header />
            
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            
            <Footer />
        </div>
    );
}
