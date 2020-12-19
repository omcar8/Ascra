import React,{Component} from 'react';


  
class Department extends Component
{



    departmentNameSubmit(event)
    {
var nem=this.refs.nem.value;
this.setState({departmentName: nem},function()
{
    console.log(this.state);
})
    };

   


    constructor(props)
    {
super(props);
this.state={
   
     departmentName :'' , 
    
     isSubmitted:false
};
this.departmentNameSubmit=this.departmentNameSubmit.bind(this);
//this.dataSubmit=this.dataSubmit.bind(this);



    }



    render()
    {

        var nem='';

        if(this.state.departmentName =='' && this.state.isSubmitted == false)
        {
            nem=<div className='fName'>
                <h1>Welcome</h1>
             <h1> Enter Department Name  </h1> 
             <form onSubmit={this.departmentNameSubmit}>
              <input className='eName' type='text'  placeholder='enter name' ref='naam'/>
             </form>
             </div>


             
            }
            else if(this.state.departmentName !=='' && this.state.isSubmitted == false)
            {
                nem=<div>
                 <h1> department recorded</h1> 
                
                 </div>;
    
                 
    
    <form>
                 <input type='submit' value='submit'/>
                 </form>
                 
                 
    
    
                 
                }
        return(<div>

          {nem}
        </div>)
    }
}

export default Department