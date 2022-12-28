import React from 'react'
import './Login.css'


class NotePad extends React.Component{

     state={
        work:'',
        date:'',
       
     }
    
    handleData=(e)=>{

    }
    render()
    {
        return(

        <form >
         <div className='container'>
            <div className='row'>
                <div className='login' style={{padding:"5px"}}>
                    <div className='form-group'>
                        <input type="text" placeholder='Enter a work' style={{margin:"40px 0 0 30px",padding:"20px"}}
                         required onChange={(e)=>this.state({work:e.target.value})}/>
                    </div>

                    <div className='form-group'>
                        <input type="date" placeholder='Select Date'  style={{margin:"30px 0 0 30px",padding:"20px",width:"210px"}}
                        required onChange={(e)=>this.state({date:e.target.value})}/>
                    </div>

                    <div >
                        <button className='btn1' style={{margin:"13px 0 5px 70px",}}>Submit</button>
                    </div>
                </div>

            </div>
         </div>
         </form>
            

            
        )
    }
}

export default NotePad;
