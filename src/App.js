import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';
import About from './components/about/about';
import Upload from './components/upload/upload';
import Controls from './components/controls/controls';
import Canvas from './components/canvas/canvas';
import CanvasClass from './components/canvas-class/Canvas-Class';
import Canvasp5hook from './components/canvasp5hook/canvasp5hook';

class App extends React.Component{




  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={()=> <Redirect to='/canvas' />} />
            <Route path="/upload" component={Upload} />
            <Route path="/about" component={About} />
            <Route path="/controls" component={Controls} />
            {/* <Route path="/canvas" component={CanvasClass} /> */}
            <Route path="/canvas" component={CanvasClass} />
          </Switch>
          
        </React.Fragment>
      </BrowserRouter>
    )
  }



}

export default App