import React from "react";
import { connect } from "react-redux";

function TareasFinalizadas({finalizadas, eliminar,volverAProceso}){

    return(
        <article className="column content">
            <h2 className="title has-text-centered">Finalizadas</h2>
            <div className="my-3 is-flex is-flex-wrap-wrap">
                {
                    finalizadas.map(
                        sup => (
                            <article key={sup.id} className="has-background-primary-light p-3 is-flex is-flex-direction-column is-align-items-center m-2">
                                <h4 className="title">{sup.nombre}</h4>
                                <div>
                                    <button onClick={()=> volverAProceso(sup)} className="button is-link is-small is-outlined" >Volver atrás</button>
                                    <button onClick={()=> eliminar(sup)}className="button is-danger is-small" >X</button>
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