import { SignIn } from '@clerk/clerk-react';
import './signinPage.css';

const SiginPage = ()=>{
    return(
        <div className='SiginPage'><SignIn path="/sign-in"  signUpUrl='/sign-up' fallbackRedirectUrl={'/dashboard' }/></div>
    );
}

export default SiginPage;