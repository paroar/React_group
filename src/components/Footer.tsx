import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

const icons = [
  {
    icon: <FaFacebookF size={30} color={"#ffffff80"} />,
    url: "https://es-es.facebook.com",
    className: "facebook"
  },
  {
    icon: <FaTwitter size={30} color={"#ffffff80"} />,
    url: "https://twitter.com",
    className: "twitter"
  },
  {
    icon: <FaYoutube size={30} color={"#ffffff80"} />,
    url: "https://www.youtube.com",
    className: "youtube"
  }
];

type AnchorProps = {
  url: string;
  className: string;
  icon: JSX.Element;
};

const Anchor: React.FC<AnchorProps> = ({ url, className, icon }) => {
  return (
    <a
      href={url}
      aria-label={`Visit {$className}`}
      target="blank"
      className={`footer--socialmedia--${className}`}
    >
      {icon}
    </a>
  );
};

const Footer: React.FC = () => {
  const { handleLanguage } = useContext(LanguageContext);

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleLanguage(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer--copyright">
        <Link to="/">
          <h4>
            <span className="footer--copyright--opacity">@2019</span>
            <span className="footer--copyright--name">4BIRDS</span>
          </h4>
        </Link>
      </div>

      <div className="footer--socialmedia">
        {icons.map(({ icon, className, url }: AnchorProps) => (
          <Anchor key={url} icon={icon} className={className} url={url} />
        ))}
      </div>

      <div className="footer--lang">
        <select name="" id="" onChange={e => changeLang(e)}>
          <option value="en">en</option>
          <option value="es">es</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
