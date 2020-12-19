import React,{Component} from 'react';
import './App.css';

import firebase from 'firebase';


var uuid=require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyA3N5dzs9fvMGlcsIvsdtdq12IIL8iXOeM",
    authDomain: "dept-a7f19.firebaseapp.com",
    databaseURL: "https://dept-a7f19-default-rtdb.firebaseio.com",
    projectId: "dept-a7f19",
    storageBucket: "dept-a7f19.appspot.com",
    messagingSenderId: "744282999515",
    appId: "1:744282999515:web:662a4c951e93e0bf371afe",
    measurementId: "G-4B32MS250M"
  };
  firebase.initializeApp(firebaseConfig);
  


class Employee extends Component
{

    employeeNameSubmit(event)
    {
var naam=this.refs.naam.value;
this.setState({employeeName: naam},function()
{
    console.log(this.state);
})
    };

    dataSubmit(event)
    {
firebase.database().ref('Employee/'+this.state.uid).set({
    employeeName:this.state.employeeName,city:this.state.city

});
this.setState({isSubmitted:true})
    };

    citySelected(event)
    {
   var city=this.state.city;

   if(event.target.name =='ans1')
   {
       city.ans1=event.target.value;
   }
   else if(event.target.name =='ans2')
   {
       city.ans2=event.target.value;
   }
   else if(event.target.name =='ans3')
   {
       city.ans3=event.target.value;
   }
   this.setState({city:city},function()
   {
       console.log(this.state);
   })
    };

    

    constructor(props)
    {
super(props);
this.state={
    uid:uuid.v1(),
     employeeName :'' , 
     city :
     {
         ans1:'',
         ans2:'',
         ans3:'',
     },
     isSubmitted:false
};
this.employeeNameSubmit=this.employeeNameSubmit.bind(this);
this.dataSubmit=this.dataSubmit.bind(this);
this.citySelected=this.citySelected.bind(this);


    }





    render()

    {
        var naam='';
        var city='';
        var dept='';

        if(this.state.employeeName =='' && this.state.isSubmitted == false)
        {
            naam=<div className='eName'>
                <h1 className='fword'>Welcome</h1>
             <h1  className='fword'> enter your name  </h1> 
             <form onSubmit={this.employeeNameSubmit}>
              <input className='eName' type='text'  placeholder='enter name' ref='naam'/>
             </form>
             </div>


             
            }
           else if(this.state.employeeName !=='' && this.state.isSubmitted == false)
        {
            naam=<div>
             <h1 className='fword'> welcome {this.state.employeeName} to database </h1> 
            
             </div>;

             city=  <div>
             <h2 className='fword'>select your city name</h2>
             <form onSubmit={this.dataSubmit}> 

             <div className='card'>
              <label className='check'>Where do you stay</label>
              <input                    type='radio' name='ans1' value='mumbai'    onChange={this.citySelected}      />mumbai
                </div>

                <div  className='card'>
                
                <input                    type='radio' name='ans2' value='pune'    onChange={this.citySelected}      />pune
                </div>

                 <div  className='card'>
                
                <input                    type='radio' name='ans3' value='banglore'    onChange={this.citySelected}      />banglore



               
               
               
                </div>

                

                


             <input  className='submitb' type='submit' value='submit'/>
             </form>
             
             </div>

             


             
            }
          


        return(
        <div className='container1'>
          {naam}

         


          {city}
        </div>);
    }
}

export default Employee;