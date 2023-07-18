import "./Home.css";
import {Link} from "react-router-dom";

import {AiOutlineInstagram} from 'react-icons/ai';

// import { Link } from "react-router-dom";
const Nav = () => {
    const linkStyle = {
        color: 'white',
        textDecoration:'none',
        padding:'5px 10px',
        borderRadius: '5px',
      };
      const hoverStyle = {
        backgroundColor: 'blue',
        color: 'black',
      };
      const link1 = {
        color: 'black',
        textDecoration:'none',
        borderRadius: '10px',
      }; 
    return (
      <div className="navbar">
    <nav>
      </nav>
      <div className="nav2">
      <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
      <Link to = '#' style={linkStyle} activeStyle={hoverStyle}>HIRE FREELANCERS</Link>
      <Link to = '#' style={linkStyle} activeStyle={hoverStyle}>Auction</Link>
      <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
      <Link to = '/feedback' style={linkStyle} activeStyle={hoverStyle}>feedback</Link>
      <Link to = '/' className="loginh">LOGIN</Link>
      <Link to = '/signup' className="signuph">SIGNUP</Link>
      </div>
      <div className="back1">
        <div className="text1">
        <h1 style ={{color:'white'}}>World's number 1 freelancing and</h1>
        <h1 style ={{color:'white'}}>crowdsourcing marketplace. </h1>
        </div>
        <div className="text2">
        <p style ={{color:'white'}}>India's fastest and 100% secure online e-auction platform, to procure and sell all categories of goods with ease. With experience of more than 1L+ tenders and auctions, more than 100 clients have been benefited as we strive for their 100% satisfaction.</p>
      </div>
      </div>
      {/* <div motion>
        <img src={boy}></img>
        </div> */}
        
      </div>
      
    )
};
export default Nav;