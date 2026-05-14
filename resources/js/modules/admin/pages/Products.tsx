import { Search, Plus, Edit2, Trash2, Filter } from 'lucide-react';
import type { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Products = () => {
    return (
        <>
            {/* Toolbar */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-3 sm:w-auto">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute top-1/2 left-3.5 h-[18px] w-[18px] -translate-y-1/2 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Buscar productos o servicios..."
                            className="w-full rounded-[14px] border border-zinc-200/80 bg-white py-2.5 pr-4 pl-10 text-sm shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)] transition-all placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 focus:outline-none"
                        />
                    </div>
                    <button className="rounded-[14px] border border-zinc-200/80 bg-white p-2.5 text-zinc-500 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)] transition-colors hover:bg-zinc-50 hover:text-zinc-800">
                        <Filter className="h-[18px] w-[18px]" strokeWidth={2} />
                    </button>
                </div>
                <button className="flex items-center gap-2 rounded-[14px] bg-[#1C1C1C] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-black">
                    <Plus className="h-[18px] w-[18px]" strokeWidth={2.5} />
                    Añadir Nuevo
                </button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="border-b border-zinc-100/80 bg-[#F9F9F9] font-medium text-zinc-500">
                            <tr>
                                <th className="px-7 py-4.5 font-medium">
                                    Nombre
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Categoría
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Precio
                                </th>
                                <th className="px-7 py-4.5 font-medium">
                                    Duración
                                </th>
                                <th className="px-7 py-4.5 text-right font-medium">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                {
                                    name: 'Corte Clásico',
                                    category: 'Servicio',
                                    price: '$25.00',
                                    duration: '45 min',
                                },
                                {
                                    name: 'Mantenimiento de Barba',
                                    category: 'Servicio',
                                    price: '$15.00',
                                    duration: '30 min',
                                },
                                {
                                    name: 'Pomada Texturizante Premium',
                                    category: 'Producto',
                                    price: '$22.00',
                                    duration: '-',
                                },
                                {
                                    name: 'Corte + Barba',
                                    category: 'Servicio',
                                    price: '$35.00',
                                    duration: '1h 15m',
                                },
                                {
                                    name: 'Aceite Hidratante',
                                    category: 'Producto',
                                    price: '$18.00',
                                    duration: '-',
                                },
                            ].map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="transition-colors hover:bg-zinc-50/50"
                                >
                                    <td className="px-7 py-5 font-medium text-zinc-800">
                                        {row.name}
                                    </td>
                                    <td className="px-7 py-5">
                                        <span
                                            className={`rounded-lg px-3 py-1.5 text-[12px] font-medium tracking-wide ${row.category === 'Servicio' ? 'bg-[#F5EFE8] text-[#9A8166]' : 'bg-zinc-100 text-zinc-600'}`}
                                        >
                                            {row.category}
                                        </span>
                                    </td>
                                    <td className="px-7 py-5 font-medium text-zinc-700">
                                        {row.price}
                                    </td>
                                    <td className="px-7 py-5">
                                        {row.duration}
                                    </td>
                                    <td className="px-7 py-5">
                                        <div className="flex items-center justify-end gap-3">
                                            <button className="p-1.5 text-zinc-400 transition-colors hover:text-zinc-900">
                                                <Edit2
                                                    className="h-[18px] w-[18px]"
                                                    strokeWidth={2}
                                                />
                                            </button>
                                            <button className="p-1.5 text-zinc-400 transition-colors hover:text-red-500">
                                                <Trash2
                                                    className="h-[18px] w-[18px]"
                                                    strokeWidth={2}
                                                />
                                            </button>
                                        </div>
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

Products.layout = (page: ReactNode) => (
    <AdminLayout title="Products & Services">{page}</AdminLayout>
);

export default Products;
