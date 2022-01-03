import React, {useRef, useState} from "react";

import {connect} from 'react-redux';

// Connect sirve para conectarnos a redux


// El valor que obtenemos por PROPS es el proveniente de la funcion mapStatetoProps
function Tareas({tareas, moverAPrceso,finalizar, nuevaTarea, eliminar}){

    const [tareaNueva, setTareaNueva] = useState(true)

    const inputTarea = useRef();
    const agregarTarea = useRef();

    const tareaHandler = ()=> {
        nuevaTarea(inputTarea.current.value);
        inputTarea.current.value= ''
        mostrarInputTarea();
    }

    const mostrarInputTarea = ()=> {
        agregarTarea.current.classList.toggle('hide')
        setTareaNueva(!tareaNueva);
    }

    return(
        <section>
            <h2>Tareas</h2>
            <div className='contenedor-tareas'>
                <button onClick={mostrarInputTarea}>{tareaNueva ? 'Nueva Tarea +' : 'Cancelar'}</button>
                <article className="agregar-tarea hide" ref={agregarTarea}>
                    <input type="text" ref={inputTarea}/>
                    <button onClick={()=> tareaHandler()}>+</button>
                </article>
                {
                    tareas.map(tarea =>(
                        <article className='tarea' key={tarea.id}>
                            <h3>{tarea.nombre}</h3>
                            <div>
                                <button onClick={()=> moverAPrceso(tarea)}>En Proceso</button>
                                <button onClick={()=> finalizar(tarea)} >Finalizar</button>
                                <button onClick={()=> eliminar(tarea)}>X</button>
                            </div>
                        </article>
                    ))
                }
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