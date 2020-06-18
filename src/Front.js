import React from 'react'
import App from './App'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Tips from './Tips'

class Front extends React.Component{
    render(){
        return(<div>
            <BrowserRouter>
            <Route exact path= "/" component= {App}/>
            <Route path= "/tips" component= {Tips}/>
            </BrowserRouter>
            
        </div>)
    }
}

export default Front