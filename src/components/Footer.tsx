import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <FaFacebookF size={50} color={"#3b5998"}/>
            <FaTwitter size={50} color={"#00acee"}/>
            <FaYoutube size={50} color={"#ff0000"} />
        </footer>
    )
}

export default Footer;