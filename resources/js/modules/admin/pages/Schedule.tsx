import React, { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Clock, Save } from 'lucide-react';

const Schedule = () => {
    const days = [
        { name: 'Lunes', open: true, start: '09:00 AM', end: '07:00 PM' },
        { name: 'Martes', open: true, start: '09:00 AM', end: '07:00 PM' },
        { name: 'Miércoles', open: true, start: '09:00 AM', end: '07:00 PM' },
        { name: 'Jueves', open: true, start: '09:00 AM', end: '07:00 PM' },
        { name: 'Viernes', open: true, start: '09:00 AM', end: '08:00 PM' },
        { name: 'Sábado', open: true, start: '10:00 AM', end: '05:00 PM' },
        { name: 'Domingo', open: false, start: '--:--', end: '--:--' },
    ];

    return (
        <>
            <div className="max-w-3xl">
                <div className="bg-white rounded-[18px] border border-zinc-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div className="px-8 py-7 border-b border-zinc-100/80 bg-[#FDFDFD]">
                        <h3 className="font-serif text-2xl font-medium text-zinc-900">Horario Laboral</h3>
                        <p className="text-[14px] text-zinc-500 mt-1.5">Configura los días y horas de apertura de tu negocio.</p>
                    </div>
                    
                    <div className="p-8 space-y-7">
                        {days.map((day, idx) => (
                            <div key={idx} className="flex items-center justify-between pb-7 border-b border-zinc-100/80 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4 w-44">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" defaultChecked={day.open} />
                                        <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1C1C1C]"></div>
                                    </label>
                                    <span className={`text-[15px] font-medium ${day.open ? 'text-zinc-800' : 'text-zinc-400'}`}>
                                        {day.name}
                                    </span>
                                </div>
                                
                                <div className={`flex items-center gap-4 flex-1 justify-end ${day.open ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                                    <div className="relative">
                                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                        <input 
                                            type="text" 
                                            defaultValue={day.start}
                                            className="w-32 pl-10 pr-3 py-2.5 bg-zinc-50/50 border border-zinc-200/80 rounded-xl text-sm font-medium text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
                                        />
                                    </div>
                                    <span className="text-zinc-400 text-sm font-medium">a</span>
                                    <div className="relative">
                                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                        <input 
                                            type="text" 
                                            defaultValue={day.end}
                                            className="w-32 pl-10 pr-3 py-2.5 bg-zinc-50/50 border border-zinc-200/80 rounded-xl text-sm font-medium text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-8 py-6 bg-[#F9F9F9] border-t border-zinc-100/80 flex justify-end">
                        <button className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-black text-white px-7 py-3 rounded-[14px] text-[14px] font-medium transition-colors shadow-sm">
                            <Save className="w-[18px] h-[18px]" strokeWidth={2.5} />
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Schedule.layout = (page: ReactNode) => <AdminLayout title="Schedule Configuration">{page}</AdminLayout>

export default Schedule;
