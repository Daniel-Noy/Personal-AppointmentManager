import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import {
    LayoutGrid,
    Package,
    CalendarDays,
    ClipboardList,
    Bell,
    UserCircle,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
    title?: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
    const { url } = usePage();

    const navigation = [
        { name: 'Inicio', href: '/admin', icon: LayoutGrid },
        {
            name: 'Products & Services',
            href: '/admin/productos-servicios',
            icon: Package,
        },
        {
            name: 'Schedule Configuration',
            href: '/admin/horario',
            icon: CalendarDays,
        },
        {
            name: 'Appointments',
            href: '/admin/citas-programadas',
            icon: ClipboardList,
        },
    ];

    return (
        <div className="flex min-h-screen bg-[#FDFDFD] font-sans text-zinc-900">
            {/* Sidebar */}
            <aside className="fixed flex h-screen w-64 flex-col border-r border-zinc-200/60 bg-[#F9F9F9]">
                <div className="p-6 pb-8">
                    <h1 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
                        Luxe & Blade
                    </h1>
                    <p className="mt-1 text-[13px] text-zinc-500">
                        Management Dashboard
                    </p>
                </div>

                <nav className="mt-2 flex-1 space-y-1 px-4">
                    {navigation.map((item) => {
                        const isActive =
                            url === item.href ||
                            (item.href !== '/admin' &&
                                url.startsWith(item.href));

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                                    isActive
                                        ? 'bg-zinc-200/60 font-medium text-zinc-900'
                                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900',
                                )}
                            >
                                {isActive && (
                                    <div className="absolute top-1/2 -left-4 h-6 w-[3px] -translate-y-1/2 rounded-r-md bg-zinc-900"></div>
                                )}
                                <item.icon
                                    className="h-[18px] w-[18px]"
                                    strokeWidth={2}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto p-5">
                    <button className="w-full rounded-full bg-[#1C1C1C] py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black">
                        New Appointment
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex flex-1 flex-col">
                {/* Header */}
                <header className="flex h-24 items-center justify-between bg-[#FDFDFD] px-10">
                    <h2 className="font-serif text-3xl font-semibold text-zinc-800">
                        {title}
                    </h2>
                    <div className="flex items-center gap-4 text-zinc-600">
                        <button className="rounded-full p-2 transition-colors hover:bg-zinc-100">
                            <Bell
                                className="h-[22px] w-[22px]"
                                strokeWidth={1.5}
                            />
                        </button>
                        <button className="rounded-full p-2 transition-colors hover:bg-zinc-100">
                            <UserCircle
                                className="h-[22px] w-[22px]"
                                strokeWidth={1.5}
                            />
                        </button>
                    </div>
                </header>

                <div className="h-px w-full bg-zinc-100/60"></div>

                {/* Page Content */}
                <div className="flex-1 bg-[#FDFDFD] p-10">{children}</div>
            </main>
        </div>
    );
};

export default AdminLayout;
