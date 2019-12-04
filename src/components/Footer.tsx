import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer--copyright">
                <h4><span className="footer--copyright--opacity">@2019</span><span className="footer--copyright--name">4BIRDS</span></h4>
            </div>
               

            <div className="footer--socialmedia">
                <a href="https://es-es.facebook.com" target="blank" className="footer--socialmedia--facebook">
                    <FaFacebookF size={30} color={"#ffffff80"}/>
                </a>
                <a href="https://twitter.com" target="blank" className="footer--socialmedia--twitter">
                    <FaTwitter size={30} color={"#ffffff80"}/>
                </a>    
                <a href="https://www.youtube.com" target="blank" className="footer--socialmedia--youtube">
                    <FaYoutube size={30} color={"#ffffff80"} />
                </a>
            </div>
            
        </footer>
    )
}

export default Footer;