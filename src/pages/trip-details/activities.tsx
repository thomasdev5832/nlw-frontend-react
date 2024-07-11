import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
        <div className="space-y-8">

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-sm text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-sm text-zinc-500">Domingo</span>
                            </div>
                           <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Aula de Jiu-jitsu</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                            </div>
                           </div>
                           <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Surf session</span>
                                <span className="text-zinc-400 text-sm ml-auto">16:00</span>
                            </div>
                           </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
                                <span className="text-sm text-zinc-500">Segunda-feira</span>
                            </div>
                           <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Aula de Yoga</span>
                                <span className="text-zinc-400 text-sm ml-auto">10:00</span>
                            </div>
                           </div>
                        </div>
                    </div>
    )
}