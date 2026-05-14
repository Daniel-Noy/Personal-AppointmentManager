import { Calendar, ClipboardCheck, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Index = () => {
    return (
        <>
            {/* KPI Cards */}
            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Card 1 */}
                <div className="flex items-center gap-5 rounded-[18px] border border-zinc-100 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2D2D2D] text-white">
                        <Calendar className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="mb-1.5 text-[13px] font-medium text-zinc-500">
                            Citas para hoy
                        </p>
                        <p className="font-serif text-[28px] leading-none font-semibold text-zinc-800">
                            12
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-5 rounded-[18px] border border-zinc-100 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F5EFE8] text-[#9A8166]">
                        <ClipboardCheck className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="mb-1.5 text-[13px] font-medium text-zinc-500">
                            Citas pendientes de confirmar
                        </p>
                        <p className="font-serif text-[28px] leading-none font-semibold text-zinc-800">
                            3
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-5 rounded-[18px] border border-zinc-100 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2D2D2D] text-white">
                        <TrendingUp className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                        <p className="mb-1 text-[13px] font-medium text-zinc-500">
                            Servicios más solicitados
                        </p>
                        <p className="mt-1 font-serif text-[22px] leading-none font-semibold text-zinc-800">
                            Corte Clásico
                        </p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                <div className="border-b border-zinc-100/80 px-7 py-6">
                    <h3 className="font-serif text-2xl font-medium text-zinc-900">
                        Próximas citas del día
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="border-b border-zinc-100/80 bg-[#F9F9F9] font-medium text-zinc-500">
                            <tr>
                                <th className="px-7 py-4 font-medium">Hora</th>
                                <th className="px-7 py-4 font-medium">
                                    Cliente
                                </th>
                                <th className="px-7 py-4 font-medium">
                                    Servicio
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                {
                                    time: '10:00 AM',
                                    client: 'Carlos Mendoza',
                                    service: 'Corte Clásico + Barba',
                                },
                                {
                                    time: '11:30 AM',
                                    client: 'Alejandro Ruiz',
                                    service: 'Tinte y Estilo',
                                },
                                {
                                    time: '01:00 PM',
                                    client: 'Javier Hernández',
                                    service: 'Mantenimiento de Barba',
                                },
                                {
                                    time: '03:30 PM',
                                    client: 'Miguel Ángel',
                                    service: 'Corte Clásico',
                                },
                            ].map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="transition-colors hover:bg-zinc-50/50"
                                >
                                    <td className="px-7 py-5 font-medium text-zinc-700">
                                        {row.time}
                                    </td>
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

Index.layout = (page: ReactNode) => (
    <AdminLayout title="Dashboard">{page}</AdminLayout>
);

export default Index;
