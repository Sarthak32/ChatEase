import { WindowsFilled } from "@ant-design/icons";
import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [username , setUsername ] = useState('');
    const [password, setpassword] =  useState('');
    const [error , seterror ] = useState('');

    const handleSubmit = async(event) =>{
        event.preventDefault();

        const authObject= { 'Project-ID':"2581e6f1-8a08-4b74-8fad-6adf81fc2d32" , 'User-Name':username , 'User-Secret':password }

        try{
            await axios.get('https://api.chatengine.io/chats' , { headers: authObject}) ;

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            

            window.location.reload()
        }
        catch(error){
            seterror('Incorrect , username or password.')
        }


    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ChatEase</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="UserName" required />
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)}  className="input" placeholder="Password" required />
                    
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>

        </div>
    )
}

export default LoginForm;