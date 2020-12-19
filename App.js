import React,{Component} from 'react';
import Navbar from './Navbar'

import Employee from './Employee'
import Department from './Department'
import Hom from './Hom'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'




import firebase from 'firebase';

 //var firebase = require('firebase');

 
function  App()
{
 

  return(
  

    <Router>
    
      
  <div>
<Navbar/>
<Switch>

   <Route exact path="/Hom" component={Hom}/>
  
  <Route exact path="/Employee" component={Employee}/>
  <Route exact path="/Department" component={Department}/>

</Switch>
    
     </div>
</Router>
  );
}


export default App;







