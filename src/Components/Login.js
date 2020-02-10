import React, { Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import Dashboard from './Dashboard';
import './Login.css'

class Login extends Component {
    state = {
        user: '',
        pass: '',
        loggedIn: false
    }
    
    handleChangeUser = (e) => {
        this.setState({user:e.target.value})
    }

    handleChangePass = (e) => {
        this.setState({pass:e.target.value})
    }
  
    submit = (e) => {
        e.preventDefault()
        if(this.state.user == 'Fabian' && this.state.pass == '1974') {
            this.setState({loggedIn: true})
        }
        
    }

    
    render() {
        if(this.state.loggedIn == false) {
            return (
                <form className= 'form' style={{ display: 'flex', flexDirection: 'column'}} onSubmit={this.submit}>
                    <TextField 
                        id='user'
                        label='User Name'
                        value={this.state.user}
                        onChange={this.handleChangeUser}
                        />
                    <TextField
                    id='pass'
                    label='password'
                    type='password'
                    value={this.state.pass}
                    onChange={this.handleChangePass}
                    />
                    <Button 
                    variant="contained" 
                    type='submit'
                    >Login
                    </Button>
               </form>
                
             )
        } else {
            return(
                <Dashboard/>
            )
        }
   
  }
}
export default Login