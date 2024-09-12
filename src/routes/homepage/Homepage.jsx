import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = ()=>{
    return(
        <div className='Homepage'>
        <img src='/orbital.png' className='obit'></img>
        <div className='left'> 
        <h1>Gemini</h1>
        <h2>this is an sample text palace holder</h2>
        <h3>We introduce the Mobile Lorm Glove: a mobile communication and translation
         device for the deafblind. The glove translates the hand-touch alphabet Lorm, a common</h3>
        <Link to="/Dashboard">Get Started</Link>
        </div>
        <div className='right'></div>
        </div>

    );
}


export default Homepage;