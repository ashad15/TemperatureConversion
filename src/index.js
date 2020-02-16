import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

var Temp = require('./temp')

class App extends React.Component
{
   




   
    
render()
{
    return (

   <div >      
    <Temp/>
    </div>
        
    );
    }
}
ReactDom.render(
    <App /> , document.querySelector('#root')
)