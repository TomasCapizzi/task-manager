import './App.css'
import 'bulma/css/bulma.min.css'

import EstadosTarea from './Components/EstadosTarea';
import Footer from './Components/Footer';
//El componente proveniente de react-redux. Envuelve toda la app
import {Provider} from 'react-redux';
import React from 'react';
// Lo que vamos a proveer, en este caso el store.js
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='container is-fluid is-flex-wrap-wrap is-justify-content-center is-gapless p-0' style={{height: '100vh'}}>
        <section className="">
          <h1 className='title has-text-primary py-4 has-text-centered'>Task Manager</h1>
          <EstadosTarea/>
        </section>
        <Footer/>
      </div>
    </Provider>
  );
}


export default App;
