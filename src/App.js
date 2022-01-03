import './App.css'

import EstadosTarea from './Components/EstadosTarea';
//El componente proveniente de react-redux. Envuelve toda la app
import {Provider} from 'react-redux';
import React from 'react';
import Tareas from './Components/Tareas';
// Lo que vamos a proveer, en este caso el store.js
import store from './store';

// Task Manager: una app para manejar tareas y tener un control, onda trello. Lo que se completo, lo que falta, lo que esta en progreso. 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <Tareas/>
        <EstadosTarea/>
      </div>
    </Provider>
  );
}

export default App;
