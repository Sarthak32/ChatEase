import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css';

const App = ()=> {
    if(!localStorage.getItem('username')){
        return <LoginForm/>
    }
    return (
        <ChatEngine 
            height="100vh"
            projectID="2581e6f1-8a08-4b74-8fad-6adf81fc2d32"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            
        />
    );
}

export default App;