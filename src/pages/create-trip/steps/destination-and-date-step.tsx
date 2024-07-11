import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsInput,
}: DestinationAndDateStepProps) {
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
           
           <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="outline-none w-40 bg-transparent text-lg placeholder-zinc-400 flex-1"></input>
           </div>

           <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="outline-none bg-transparent text-lg placeholder-zinc-400"></input>
           </div>

           <div className="w-px h-6 bg-zinc-800" />

           {isGuestsInputOpen ? (
            <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700">
              Alterar local/data
              <Settings2 className="size-5" />
            </button>
           ) : (
            <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
              Continuar 
              <ArrowRight className="size-5 text-lime-950" />
            </button>
           )}
          </div>
    )
}