import React from 'react';
import './Login.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';



class Login extends React.Component{

    constructor(props) {
        super(props);
        this.addFormData = this.addFormData.bind(this);
    }


    addFormData(evt) {
        evt.preventDefault();
        const fd = new FormData();
        fd.append('myUsername', this.refs.myUsername.value);
        fd.append('myPassword', this.refs.myEmail.value);

        axios.post('http://localhost/reactimageupload.php', fd
        ).then(res => {

            
            Swal.fire({
                title: 'Therichpost',
                text: res.data.data,
                icon: 'success',

            });
            this.myFormRef.reset();

        }
        );



    }

    state = {
        username: '',
        password: '',
    }



   
    render()
    {
       
        return(

        <form >
         <div className='container'>
            <div className='row'>
                <div className='login' style={{padding:"5px"}}>
                    <div className='form-group'>
                        <input type="text" placeholder='Enter a username' style={{margin:"40px 0 0 30px",padding:"20px"}}
                         required onChange={(e)=>this.state({username:e.target.value})}/>
                    </div>

                    <div className='form-group'>
                        <input type="password" placeholder='Enter a password'  style={{margin:"30px 0 0 30px",padding:"20px",width:"210px"}}
                        required onChange={(e)=>this.state({password:e.target.value})}/>
                    </div>

                    <div >
                       
                        <button className='btn1' style={{margin:"13px 0 5px 70px",}} onClick={this.addFormData} ><Link to='/notePad'>Login</Link></button>
                    </div>
                </div>

            </div>
         </div>
         </form>
            

            
        )
    }
}

export default Login
