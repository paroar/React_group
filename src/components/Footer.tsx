import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer--copyright">
                <h5><span>@2019</span>4BIRDS</h5>
            </div>
               

            <div className="footer--socialmedia">
                <a href="https://es-es.facebook.com" target="blank" className="footer--socialmedia--facebook">
                    <FaFacebookF size={33} color={"#ffffff80"}/>
                </a>
                <a href="https://twitter.com" target="blank" className="footer--socialmedia--twitter">
                    <FaTwitter size={38} color={"#ffffff80"}/>
                </a>    
                <a href="https://www.youtube.com" target="blank" className="footer--socialmedia--youtube">
                    <FaYoutube size={40} color={"#ffffff80"} />
                </a>
            </div>
            
        </footer>
    )
}

export default Footer;