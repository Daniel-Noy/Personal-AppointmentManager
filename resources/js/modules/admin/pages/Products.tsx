import React, { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Search, Plus, Edit2, Trash2, Filter } from 'lucide-react';

const Products = () => {
    return (
        <>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-400" />
                        <input 
                            type="text" 
                            placeholder="Buscar productos o servicios..." 
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200/80 rounded-[14px] text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)] placeholder:text-zinc-400"
                        />
                    </div>
                    <button className="p-2.5 bg-white border border-zinc-200/80 rounded-[14px] text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 transition-colors shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
                        <Filter className="w-[18px] h-[18px]" strokeWidth={2} />
                    </button>
                </div>
                <button className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-black text-white px-5 py-2.5 rounded-[14px] text-[14px] font-medium transition-colors shadow-sm">
                    <Plus className="w-[18px] h-[18px]" strokeWidth={2.5} />
                    Añadir Nuevo
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[14px] text-zinc-600">
                        <thead className="bg-[#F9F9F9] text-zinc-500 font-medium border-b border-zinc-100/80">
                            <tr>
                                <th className="px-7 py-4.5 font-medium">Nombre</th>
                                <th className="px-7 py-4.5 font-medium">Categoría</th>
                                <th className="px-7 py-4.5 font-medium">Precio</th>
                                <th className="px-7 py-4.5 font-medium">Duración</th>
                                <th className="px-7 py-4.5 font-medium text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {[
                                { name: 'Corte Clásico', category: 'Servicio', price: '$25.00', duration: '45 min' },
                                { name: 'Mantenimiento de Barba', category: 'Servicio', price: '$15.00', duration: '30 min' },
                                { name: 'Pomada Texturizante Premium', category: 'Producto', price: '$22.00', duration: '-' },
                                { name: 'Corte + Barba', category: 'Servicio', price: '$35.00', duration: '1h 15m' },
                                { name: 'Aceite Hidratante', category: 'Producto', price: '$18.00', duration: '-' },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                                    <td className="px-7 py-5 font-medium text-zinc-800">{row.name}</td>
                                    <td className="px-7 py-5">
                                        <span className={`px-3 py-1.5 rounded-lg text-[12px] font-medium tracking-wide ${row.category === 'Servicio' ? 'bg-[#F5EFE8] text-[#9A8166]' : 'bg-zinc-100 text-zinc-600'}`}>
                                            {row.category}
                                        </span>
                                    </td>
                                    <td className="px-7 py-5 font-medium text-zinc-700">{row.price}</td>
                                    <td className="px-7 py-5">{row.duration}</td>
                                    <td className="px-7 py-5">
                                        <div className="flex items-center justify-end gap-3">
                                            <button className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors">
                                                <Edit2 className="w-[18px] h-[18px]" strokeWidth={2} />
                                            </button>
                                            <button className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-[18px] h-[18px]" strokeWidth={2} />
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

Products.layout = (page: ReactNode) => <AdminLayout title="Products & Services">{page}</AdminLayout>

export default Products;
