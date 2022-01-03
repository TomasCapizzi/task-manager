import React from "react";
import { connect } from "react-redux";

function TareasEnProceso({enProceso, eliminar,volverAtras, finalizar}){

    return(
        <article>
            <h2>En proceso</h2>
            <div>
                {
                    enProceso.map(
                        tarea => (
                            <article key={tarea.id}>
                                <div>
                                    <button onClick={()=> volverAtras(tarea)}>Volver atrás</button>
                                    <button onClick={()=> finalizar(tarea) }>Finalizar</button>
                                    <button onClick={()=> eliminar(tarea)} >X</button>
                                </div>
                                <p>{tarea.nombre}</p>
                            </article>
                        )
                    )
                }
            </div>
        </article>
    )
}
const mapStatetoProps = state => ({
    enProceso: state.enProceso
})


const mapDispatchtoProps = dispatch => ({
    eliminar(tarea){
        dispatch({
            type: 'Eliminar_Proceso',
            tarea
        })
    },
    volverAtras(tarea){
        dispatch({
            type: 'Volver_Tarea',
            tarea
        })
    },
    finalizar(tarea){
        dispatch({
            type: 'Mover_Finalizar',
            tarea
        })
    }
})

export default connect(mapStatetoProps,mapDispatchtoProps)(TareasEnProceso)