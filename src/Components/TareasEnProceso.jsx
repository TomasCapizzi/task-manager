import React from "react";
import { connect } from "react-redux";

function TareasEnProceso({enProceso, eliminar,volverAtras, finalizar}){

    return(
        <article className="column content"> 
            <h2 className="title has-text-centered">En proceso</h2>
            <div className="my-3 is-flex is-flex-wrap-wrap">
                {
                    enProceso.map(
                        tarea => (
                            <article key={tarea.id} className='has-background-primary-light p-3 is-flex is-flex-direction-column is-align-items-center m-2'>
                                <h4 className="title has-text-primary">{tarea.nombre}</h4>
                                <div>
                                    <button onClick={()=> volverAtras(tarea)} className="button is-link is-small is-outlined" >Volver atrás</button>
                                    <button onClick={()=> finalizar(tarea)} className="button is-info is-small is-outlined">Finalizar</button>
                                    <button onClick={()=> eliminar(tarea)} className="button is-danger is-small" >X</button>
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