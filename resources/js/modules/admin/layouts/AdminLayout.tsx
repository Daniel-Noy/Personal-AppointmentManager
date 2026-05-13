import React, { ReactNode } from 'react';
import { LayoutGrid, Package, CalendarDays, ClipboardList, Bell, UserCircle } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

interface AdminLayoutProps {
    children: ReactNode;
    title?: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
    const { url } = usePage();

    const navigation = [
        { name: 'Inicio', href: '/admin', icon: LayoutGrid },
        { name: 'Products & Services', href: '/admin/productos-servicios', icon: Package },
        { name: 'Schedule Configuration', href: '/admin/horario', icon: CalendarDays },
        { name: 'Appointments', href: '/admin/citas-programadas', icon: ClipboardList },
    ];

    return (
        <div className="flex min-h-screen bg-[#FDFDFD] font-sans text-zinc-900">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-200/60 bg-[#F9F9F9] flex flex-col fixed h-screen">
                <div className="p-6 pb-8">
                    <h1 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">Luxe & Blade</h1>
                    <p className="text-[13px] text-zinc-500 mt-1">Management Dashboard</p>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-2">
                    {navigation.map((item) => {
                        const isActive = url === item.href || (item.href !== '/admin' && url.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors relative',
                                    isActive
                                        ? 'bg-zinc-200/60 text-zinc-900 font-medium'
                                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                                )}
                            >
                                {isActive && (
                                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-zinc-900 rounded-r-md"></div>
                                )}
                                <item.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-5 mt-auto">
                    <button className="w-full bg-[#1C1C1C] hover:bg-black text-white rounded-full py-2.5 text-sm font-medium transition-colors shadow-sm">
                        New Appointment
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col ml-64">
                {/* Header */}
                <header className="h-24 flex items-center justify-between px-10 bg-[#FDFDFD]">
                    <h2 className="font-serif text-3xl font-semibold text-zinc-800">{title}</h2>
                    <div className="flex items-center gap-4 text-zinc-600">
                        <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                            <Bell className="w-[22px] h-[22px]" strokeWidth={1.5} />
                        </button>
                        <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                            <UserCircle className="w-[22px] h-[22px]" strokeWidth={1.5} />
                        </button>
                    </div>
                </header>

                <div className="w-full h-px bg-zinc-100/60"></div>

                {/* Page Content */}
                <div className="p-10 flex-1 bg-[#FDFDFD]">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
