import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = ()=>{
    return(
        <div className='ChatList'>
        <span className='title'>Dashboard</span>
        <Link to="/dashboard">create a new chat</Link>
        <Link to="/">explore</Link>
        <Link to="/">contact</Link>
        <hr>
        <div className='list'>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        <Link to="/">my chat</Link>
        </div>
        </hr> 
        div.conatiner 
        </div> 
    );
}
export default ChatList;