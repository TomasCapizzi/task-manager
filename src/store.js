import {createStore} from 'redux';

// Declaro el estado como arrancará. 
const initialState = {
    tareas: [],
    enProceso: [],
    finalizadas: []
}

// Función reductora
const reducer = (state = initialState, action)=> {
    console.log(action);
    // Sección Tareas
    if(action.type === 'Nueva_Tarea'){
        return {
            ...state,
            tareas: state.tareas.concat(action.tarea)
        }
    }
    if(action.type === 'Eliminar_Tarea'){
        return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !== action.tarea.id)
        }
    }
    if(action.type === 'En_Proceso'){
        return {
            ...state, //Spread Operator
            enProceso: state.enProceso.concat(action.tarea), //Concatenamos lo que ya tenemos más el nuevo jugador que llega del action
            tareas: state.tareas.filter( jug => jug.id !== action.tarea.id )
        }
    }
    if(action.type === 'Finalizar'){
        return {
            ...state,
            finalizadas: state.finalizadas.concat(action.tarea),
            tareas: state.tareas.filter(jug => jug.id !== action.tarea.id)
        }
    }

    // Sección en Proceso ////////////////////////////////////////////////////////////////////////////
    if(action.type === 'Eliminar_Proceso'){
        return {
            ...state,
            enProceso: state.enProceso.filter(jug => jug.id !== action.tarea.id),
        }
    }
    if(action.type === 'Volver_Tarea'){
        return {
            ...state,
            enProceso: state.enProceso.filter(jug => jug.id !== action.tarea.id),
            tareas: state.tareas.concat(action.tarea)
        }
    }
    if(action.type === 'Mover_Finalizar'){
        return {
            ...state,
            enProceso: state.enProceso.filter(jug => jug.id !== action.tarea.id),
            finalizadas: state.finalizadas.concat(action.tarea)
        }
    }

    // Sección Finalizadas ////////////////////////////////////////////////////////////////////////////
    if(action.type === 'Retomar_Proceso'){
        return {
            ...state,
            finalizadas: state.finalizadas.filter(jug => jug.id !== action.tarea.id),
            enProceso: state.enProceso.concat(action.tarea)
        }
    }
    if(action.type === 'Eliminar_Finalizada'){
        return {
            ...state,
            finalizadas: state.finalizadas.filter(jug => jug.id !== action.tarea.id),
        }
    }
    return state
} 

export default createStore(reducer); // Le paso al store la función reductora y lo exporto