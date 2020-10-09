import React,{Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import 'bulma/css/bulma.css' // Importamos FrameWork Estilos
// Importar un componente nuestro creado a teclado1

import {Detail} from './pages/Detail';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';

class App extends Component {
  render(){
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail id={url.searchParams.get('id')} />
    : <Home/>

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = {Home}/>
          <Route exact path='/detail/:id' component = {Detail} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
