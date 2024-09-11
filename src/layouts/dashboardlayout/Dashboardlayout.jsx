
import { Outlet } from 'react-router-dom';
import './dashboardlayout.css';

const Dashboardlayout = () => {
  return (
    <div className='Dashboardlayout'>
      <div className='menu'>Menu</div>
      <div className='content'>
         <Outlet />
      </div>    
    </div>
  );
};

export default Dashboardlayout;
