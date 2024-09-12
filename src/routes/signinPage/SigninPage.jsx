import { SignIn } from '@clerk/clerk-react';
import './signinPage.css';

const SiginPage = ()=>{
    return(
        <div className='SiginPage'><SignIn path="/sign-in" /></div>
    );
}

export default SiginPage;