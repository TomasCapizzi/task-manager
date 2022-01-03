import React, {useRef, useState} from "react";

import {connect} from 'react-redux';

// Connect sirve para conectarnos a redux


// El valor que obtenemos por PROPS es el proveniente de la funcion mapStatetoProps
function Tareas({tareas, moverAPrceso,finalizar, nuevaTarea, eliminar}){

    const [tareaNueva, setTareaNueva] = useState(true)

    const inputTarea = useRef();
    const agregarTarea = useRef();

    const tareaHandler = ()=> {
        if(inputTarea.current.value !== ''){
            nuevaTarea(inputTarea.current.value);
            inputTarea.current.value= ''
            mostrarInputTarea();
        } else{
            alert('Campos incompletos')
        }
    }

    const mostrarInputTarea = ()=> {
        agregarTarea.current.classList.toggle('hide')
        setTareaNueva(!tareaNueva);
    }

    return(
        <section className="column content is-justify-content-center">
            <h2 className="title mb-6 has-text-centered">Tareas</h2>
            <div className='contenedor-tareas'>
                <button onClick={mostrarInputTarea} className="button is-primary is-medium mb-2">{tareaNueva ? 'Nueva Tarea +' : 'Cancelar'}</button>
                <article className="agregar-tarea hide" ref={agregarTarea}>
                    <input type="text" ref={inputTarea} className="input is-primary is-normal mb-2"/>
                    <button onClick={()=> tareaHandler()} className="button is-primary is-small is-fullwidth" >+</button>
                </article>
                <div className="my-3 is-flex is-flex-wrap-wrap ">
                    {
                        tareas.map(tarea =>(
                            <article className='has-background-primary-light p-3 is-flex is-flex-direction-column is-align-items-center m-2' key={tarea.id}>
                                <h3 className="title has-text-primary">{tarea.nombre}</h3>
                                <div className="container">
                                    <button onClick={()=> moverAPrceso(tarea)}className="button is-link is-small is-outlined" >En Proceso</button>
                                    <button onClick={()=> finalizar(tarea)}className="button is-info is-small is-outlined" >Finalizar</button>
                                    <button onClick={()=> eliminar(tarea)}className="button is-danger is-small">X</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}


// Exportamos connect, la cual es una funcion q recibe otras funciones. La primera es una funcion que mapea lo que tengo en el estado y o convierte en propiedades. La segunda es una funcion que mapea las funciones, y las convierte tambien en propiedades.
// Si es que alguna no la utilizaremos, pasamos un objeto vacio => {}

// Recibe el estado y retorna el objeto. 
const mapStatetoProps = state => ({
    tareas: state.tareas
})


const mapDispatchtoProps = dispatch => ({
    moverAPrceso(tarea){
        dispatch({
            type: 'En_Proceso', // Type sirve para ver que tipo de accion es, nos ayuda para luego filtrar la acción y elegir que hacer
            tarea
        })
    },
    finalizar(tarea){
        dispatch({
            type: 'Finalizar',
            tarea
        })
    },
    nuevaTarea(tarea){
        dispatch({
            type: 'Nueva_Tarea',
            tarea:{
                nombre: tarea,
                createdAt: new Date(),
                id: new Date()
            }
        })
    },
    eliminar(tarea){
        dispatch({
            type: 'Eliminar_Tarea',
            tarea
        })
    }
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Tareas)