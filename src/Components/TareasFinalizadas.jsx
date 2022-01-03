import React from "react";
import { connect } from "react-redux";

function TareasFinalizadas({finalizadas, eliminar,volverAProceso}){

    return(
        <article>
            <h2>Finalizadas</h2>
            <div>
                {
                    finalizadas.map(
                        sup => (
                            <article key={sup.id}>
                                <p>{sup.nombre}</p>
                                <div>
                                    <button onClick={()=> volverAProceso(sup)}>Volver atrás</button>
                                    <button onClick={()=> eliminar(sup)} >X</button>
                                </div>
                            </article>
                        )
                    )
                }
            </div>
        </article>
    )
}

const mapStatetoProps = state => ({
    finalizadas: state.finalizadas
})


const mapDispatchtoProps = dispatch => ({
    eliminar(tarea){
        dispatch({
            type: 'Eliminar_Finalizada',
            tarea
        })
    },
    volverAProceso(tarea){
        dispatch({
            type: 'Retomar_Proceso',
            tarea
        })
    }
})

export default connect(mapStatetoProps, mapDispatchtoProps)(TareasFinalizadas)