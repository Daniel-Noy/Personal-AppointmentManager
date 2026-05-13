import React, { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Calendar, ClipboardCheck, TrendingUp } from 'lucide-react';

const Index = () => {
    return (
        <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#2D2D2D] text-white flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-[13px] text-zinc-500 font-medium mb-1.5">Citas para hoy</p>
                        <p className="font-serif text-[28px] font-semibold leading-none text-zinc-800">12</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#F5EFE8] text-[#9A8166] flex items-center justify-center shrink-0">
                        <ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-[13px] text-zinc-500 font-medium mb-1.5">Citas pendientes de confirmar</p>
                        <p className="font-serif text-[28px] font-semibold leading-none text-zinc-800">3</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#2D2D2D] text-white flex items-center justify-center shrink-0">
                        <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="text-[13px] text-zinc-500 font-medium mb-1">Servicios más solicitados</p>
                        <p className="font-serif text-[22px] font-semibold leading-none text-zinc-800 mt-1">Corte Clásico</p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="px-7 py-6 border-b border-zinc-100/80">
                    <h3 className="font-serif text-2xl font-medium text-zinc-900">Próximas citas del día</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="bg-[#F9F9F9] text-zinc-500 font-medium border-b border-zinc-100/80">
                            <tr>
                                <th className="px-7 py-4 font-medium">Hora</th>
                                <th className="px-7 py-4 font-medium">Cliente</th>
                                <th className="px-7 py-4 font-medium">Servicio</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                { time: '10:00 AM', client: 'Carlos Mendoza', service: 'Corte Clásico + Barba' },
                                { time: '11:30 AM', client: 'Alejandro Ruiz', service: 'Tinte y Estilo' },
                                { time: '01:00 PM', client: 'Javier Hernández', service: 'Mantenimiento de Barba' },
                                { time: '03:30 PM', client: 'Miguel Ángel', service: 'Corte Clásico' },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="px-7 py-5 font-medium text-zinc-700">{row.time}</td>
                                    <td className="px-7 py-5">{row.client}</td>
                                    <td className="px-7 py-5">{row.service}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

Index.layout = (page: ReactNode) => <AdminLayout title="Dashboard">{page}</AdminLayout>

export default Index;