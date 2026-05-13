import React, { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Search, Plus, Calendar as CalendarIcon, Filter, MoreHorizontal } from 'lucide-react';

const Appointments = () => {
    return (
        <>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-[14px] border border-zinc-200/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
                    {['Todas', 'Pendientes', 'Confirmadas', 'Completadas'].map((tab, idx) => (
                        <button
                            key={idx}
                            className={`px-4 py-2 text-[13px] font-medium rounded-[10px] transition-colors ${idx === 0 ? 'bg-zinc-100/80 text-zinc-900' : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="p-2.5 bg-white border border-zinc-200/80 rounded-[14px] text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 transition-colors shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
                        <CalendarIcon className="w-[18px] h-[18px]" strokeWidth={2} />
                    </button>
                    <button className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-black text-white px-5 py-2.5 rounded-[14px] text-[14px] font-medium transition-colors shadow-sm">
                        <Plus className="w-[18px] h-[18px]" strokeWidth={2.5} />
                        Nueva Cita
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="bg-[#F9F9F9] text-zinc-500 font-medium border-b border-zinc-100/80">
                            <tr>
                                <th className="px-7 py-4.5 font-medium">Fecha y Hora</th>
                                <th className="px-7 py-4.5 font-medium">Cliente</th>
                                <th className="px-7 py-4.5 font-medium">Servicio</th>
                                <th className="px-7 py-4.5 font-medium">Estado</th>
                                <th className="px-7 py-4.5 font-medium text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                { date: 'Hoy', time: '10:00 AM', client: 'Carlos Mendoza', service: 'Corte Clásico + Barba', status: 'Confirmada', statusColor: 'bg-green-50 text-green-700 border-green-200/60' },
                                { date: 'Hoy', time: '11:30 AM', client: 'Alejandro Ruiz', service: 'Tinte y Estilo', status: 'Pendiente', statusColor: 'bg-[#FFF9EB] text-[#B88714] border-[#FCEBBD]' },
                                { date: 'Mañana', time: '09:00 AM', client: 'Javier Hernández', service: 'Mantenimiento', status: 'Confirmada', statusColor: 'bg-green-50 text-green-700 border-green-200/60' },
                                { date: '25 May', time: '04:00 PM', client: 'Miguel Ángel', service: 'Corte Clásico', status: 'Pendiente', statusColor: 'bg-[#FFF9EB] text-[#B88714] border-[#FCEBBD]' },
                                { date: '25 May', time: '05:30 PM', client: 'Roberto Gómez', service: 'Corte + Barba', status: 'Completada', statusColor: 'bg-zinc-100 text-zinc-600 border-zinc-200/80' },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="px-7 py-4">
                                        <div className="font-medium text-zinc-800">{row.date}</div>
                                        <div className="text-[13px] text-zinc-400 mt-0.5">{row.time}</div>
                                    </td>
                                    <td className="px-7 py-4 font-medium text-zinc-800">{row.client}</td>
                                    <td className="px-7 py-4">{row.service}</td>
                                    <td className="px-7 py-4">
                                        <span className={`px-2.5 py-1.5 rounded-md text-[12px] font-semibold tracking-wide border ${row.statusColor}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-7 py-4 text-right">
                                        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-[10px] hover:bg-zinc-100">
                                            <MoreHorizontal className="w-[18px] h-[18px]" />
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

Appointments.layout = (page: ReactNode) => <AdminLayout title="Appointments">{page}</AdminLayout>

export default Appointments;
