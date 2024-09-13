
import { Outlet, useNavigate, } from 'react-router-dom';
import './dashboardlayout.css';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import ChatList from '../../components/ChatList';


const Dashboardlayout = () => {

const navigate=useNavigate();
  const {userId, isLoaded}= useAuth();
  useEffect(()=>{
    if(isLoaded &&  !userId){
      navigate('/sign-in')
    }
  },[isLoaded, userId,navigate]);

  if(!isLoaded)return <div>Loading...</div>;

  return (
    <div className='Dashboardlayout'>
      <div className='menu'><ChatList/> </div>
      <div className='content'>
         <Outlet />
      </div>    
    </div>
  );
};

export default Dashboardlayout;
