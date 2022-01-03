import React from "react";
import Tareas from "./Tareas";
import TareasEnProceso from "./TareasEnProceso";
import TareasFinalizadas from "./TareasFinalizadas";

export default function EstadosTarea(){
    return(
        <div className="columns is-desktop section has-background-white-ter" style={{minHeight: '80vh'}}>
            <Tareas/>
            <TareasEnProceso/>
            <TareasFinalizadas/>
        </div>
    )
}

