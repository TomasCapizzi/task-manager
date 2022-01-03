import React from "react";
import TareasEnProceso from "./TareasEnProceso";
import TareasFinalizadas from "./TareasFinalizadas";

export default function EstadosTarea(){
    return(
        <section>
            <TareasEnProceso/>
            <TareasFinalizadas/>
        </section>
    )
}

