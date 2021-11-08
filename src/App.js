

import './App.css';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import Users from './Component/Users';
import Todo from './Component/Todo';
import Posts from './Component/Posts';
import Comments from './Component/Comments';

import React from 'react';

    export default class App extends React.Component{


render(){
  return (
            <div className="App">
              <header className="App-header">
            
            <BrowserRouter>
            <Link  to="/"> users</Link>
            <Link  to="/todo"> todo</Link>
            <Link  to="/post"> post</Link>
            <Link   to="/comment"> comments</Link>
  
            <Route  exact path="/" component={Users}/>
            <Route  path="/todo" component={Todo}/>
            <Route  path="/post" component={Posts}/>
            <Route  path="/comment" component={Comments}/>
           

            
            </BrowserRouter>



   
              </header> 
            </div>
          );
      }

    }



