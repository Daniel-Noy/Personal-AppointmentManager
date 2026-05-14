import { Plus, Calendar as CalendarIcon, MoreHorizontal } from 'lucide-react';
import type { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Appointments = () => {
    return (
        <>
            {/* Toolbar */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-1.5 rounded-[14px] border border-zinc-200/80 bg-white p-1.5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
                    {['Todas', 'Pendientes', 'Confirmadas', 'Completadas'].map(
                        (tab, idx) => (
                            <button
                                key={idx}
                                className={`rounded-[10px] px-4 py-2 text-[13px] font-medium transition-colors ${idx === 0 ? 'bg-zinc-100/80 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800'}`}
                            >
                                {tab}
                            </button>
                        ),
                    )}
                </div>
                <div className="flex w-full items-center gap-3 sm:w-auto">
                    <button className="rounded-[14px] border border-zinc-200/80 bg-white p-2.5 text-zinc-500 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)] transition-colors hover:bg-zinc-50 hover:text-zinc-800">
                        <CalendarIcon
                            className="h-[18px] w-[18px]"
                            strokeWidth={2}
                        />
                    </button>
                    <button className="flex items-center gap-2 rounded-[14px] bg-[#1C1C1C] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-black">
                        <Plus className="h-[18px] w-[18px]" strokeWidth={2.5} />
                        Nueva Cita
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="border-b border-zinc-100/80 bg-[#F9F9F9] font-medium text-zinc-500">
                            <tr>
                                <th className="px-7 py-4.5 font-medium">
                                    Fecha y Hora
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Cliente
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Servicio
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Estado
                                </th>
                                <th className="px-7 py-4.5 text-right font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                {
                                    date: 'Hoy',
                                    time: '10:00 AM',
                                    client: 'Carlos Mendoza',
                                    service: 'Corte Clásico + Barba',
                                    status: 'Confirmada',
                                    statusColor:
                                        'bg-green-50 text-green-700 border-green-200/60',
                                },
                                {
                                    date: 'Hoy',
                                    time: '11:30 AM',
                                    client: 'Alejandro Ruiz',
                                    service: 'Tinte y Estilo',
                                    status: 'Pendiente',
                                    statusColor:
                                        'bg-[#FFF9EB] text-[#B88714] border-[#FCEBBD]',
                                },
                                {
                                    date: 'Mañana',
                                    time: '09:00 AM',
                                    client: 'Javier Hernández',
                                    service: 'Mantenimiento',
                                    status: 'Confirmada',
                                    statusColor:
                                        'bg-green-50 text-green-700 border-green-200/60',
                                },
                                {
                                    date: '25 May',
                                    time: '04:00 PM',
                                    client: 'Miguel Ángel',
                                    service: 'Corte Clásico',
                                    status: 'Pendiente',
                                    statusColor:
                                        'bg-[#FFF9EB] text-[#B88714] border-[#FCEBBD]',
                                },
                                {
                                    date: '25 May',
                                    time: '05:30 PM',
                                    client: 'Roberto Gómez',
                                    service: 'Corte + Barba',
                                    status: 'Completada',
                                    statusColor:
                                        'bg-zinc-100 text-zinc-600 border-zinc-200/80',
                                },
                            ].map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="transition-colors hover:bg-zinc-50/50"
                                >
                                    <td className="px-7 py-4">
                                        <div className="font-medium text-zinc-800">
                                            {row.date}
                                        </div>
                                        <div className="mt-0.5 text-[13px] text-zinc-400">
                                            {row.time}
                                        </div>
                                    </td>
                                    <td className="px-7 py-4 font-medium text-zinc-800">
                                        {row.client}
                                    </td>
                                    <td className="px-7 py-4">{row.service}</td>
                                    <td className="px-7 py-4">
                                        <span
                                            className={`rounded-md border px-2.5 py-1.5 text-[12px] font-semibold tracking-wide ${row.statusColor}`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-7 py-4 text-right">
                                        <button className="rounded-[10px] p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900">
                                            <MoreHorizontal className="h-[18px] w-[18px]" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

Appointments.layout = (page: ReactNode) => (
    <AdminLayout title="Appointments">{page}</AdminLayout>
);

export default Appointments;
