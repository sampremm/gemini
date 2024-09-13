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
       <div className="right">
            <div className="imagecontainer">
                <div className="bigcontainer">
                    <div className="big"></div>
                </div>
                <img src="/bot.png" className="bot"></img>
            </div>
        </div>
        <div className="footer"> 
        <img src="/logo4.png" className='kk' />
        <div className="links ">
            <Link to="/">Terms and Conditions</Link>
            <span>|</span>
            <Link to="/">Privacy Policy</Link>
        </div>
        </div>
    </div>

    );
}


export default Homepage;