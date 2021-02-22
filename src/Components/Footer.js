import { GrFacebook } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import { IconContext } from "react-icons";




function Footer() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                  <br></br>
                <h5 className="white-text">Follow Us!</h5>
                <p className="grey-text text-lighten-4">
                <br></br>
                <br></br>
                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "55px"}}>
                    <div>
                        <a href="https://www.facebook.com/sigmaticmanufacturing"><GrFacebook /></a>
                        <a href="https://www.instagram.com"><FaInstagram /></a> 
                        <a href="https://www.twitter.com"><AiFillTwitterSquare /></a>
                        <a href="mailto:sigmaticmanufacturing@gmail.com"><AiOutlineMail /></a>
                    </div>
                </IconContext.Provider>
                    
                

                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="/AboutUs">About Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="/QualityPolicy">Quality Policy</a></li>
                  <li><a className="grey-text text-lighten-3" href="/SalesandManufacturing">Sales and Marketing</a></li>
                  <li><a className="grey-text text-lighten-3" href="/Facility">Facility</a></li>
                  <li><a className="grey-text text-lighten-3" href="/Safety">Safety</a></li>
                  <li><a className="grey-text text-lighten-3" href="/Contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 Sigmatic Manufacturing LLC.
            </div>
          </div>
        </footer>
        
    )
}

export default Footer
