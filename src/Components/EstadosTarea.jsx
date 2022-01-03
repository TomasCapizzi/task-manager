import React from "react";
import Tareas from "./Tareas";
import TareasEnProceso from "./TareasEnProceso";
import TareasFinalizadas from "./TareasFinalizadas";

export default function EstadosTarea(){
    return(
        <div className="columns section has-background-white-ter" style={{height: '80vh'}}>
            <Tareas/>
            <TareasEnProceso/>
            <TareasFinalizadas/>
        </div>
    )
}

