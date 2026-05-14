import { Clock, Save } from 'lucide-react';
import type { ReactNode } from 'react';
import AdminLayout from '../layouts/AdminLayout';

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
                <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                    <div className="border-b border-zinc-100/80 bg-[#FDFDFD] px-8 py-7">
                        <h3 className="font-serif text-2xl font-medium text-zinc-900">
                            Horario Laboral
                        </h3>
                        <p className="mt-1.5 text-[14px] text-zinc-500">
                            Configura los días y horas de apertura de tu
                            negocio.
                        </p>
                    </div>

                    <div className="space-y-7 p-8">
                        {days.map((day, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between border-b border-zinc-100/80 pb-7 last:border-0 last:pb-0"
                            >
                                <div className="flex w-44 items-center gap-4">
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="peer sr-only"
                                            defaultChecked={day.open}
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-zinc-200 peer-checked:bg-[#1C1C1C] peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                    </label>
                                    <span
                                        className={`text-[15px] font-medium ${day.open ? 'text-zinc-800' : 'text-zinc-400'}`}
                                    >
                                        {day.name}
                                    </span>
                                </div>

                                <div
                                    className={`flex flex-1 items-center justify-end gap-4 ${day.open ? 'opacity-100' : 'pointer-events-none opacity-40'}`}
                                >
                                    <div className="relative">
                                        <Clock className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                                        <input
                                            type="text"
                                            defaultValue={day.start}
                                            className="w-32 rounded-xl border border-zinc-200/80 bg-zinc-50/50 py-2.5 pr-3 pl-10 text-sm font-medium text-zinc-700 transition-all focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 focus:outline-none"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-400">
                                        a
                                    </span>
                                    <div className="relative">
                                        <Clock className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                                        <input
                                            type="text"
                                            defaultValue={day.end}
                                            className="w-32 rounded-xl border border-zinc-200/80 bg-zinc-50/50 py-2.5 pr-3 pl-10 text-sm font-medium text-zinc-700 transition-all focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end border-t border-zinc-100/80 bg-[#F9F9F9] px-8 py-6">
                        <button className="flex items-center gap-2 rounded-[14px] bg-[#1C1C1C] px-7 py-3 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-black">
                            <Save
                                className="h-[18px] w-[18px]"
                                strokeWidth={2.5}
                            />
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Schedule.layout = (page: ReactNode) => (
    <AdminLayout title="Schedule Configuration">{page}</AdminLayout>
);

export default Schedule;
