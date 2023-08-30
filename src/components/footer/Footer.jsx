import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa"
import ContantWrapper from "../contentWrapper/ContentWrapper"
import "./style.scss"
const Footer = () => {
  return (
   <footer className="footer">
    <ContantWrapper>
      <ul className="menuItems">
        <li className="menuItem">Term Of Us</li>
        <li className="menuItem">Privacy-Policy</li>
        <li className="menuItem">About</li>
        <li className="menuItem">Blog</li>
        <li className="menuItem">FAQ</li>
      </ul>
      <div className="infoText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore nostrum cupiditate veniam, itaque quam nemo! Facilis perspiciatis qui, totam tempora quae quas esse minima quasi aut voluptate molestiae dolorem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero perferendis libero vitae laborum 
      </div>
      <div className="socialIcon">
        <span className="icon"><FaFacebookF/></span>
        <span className="icon"><FaInstagram/></span>
        <span className="icon"><FaTwitter/></span>
        <span className="icon"><FaLinkedin/></span>
      </div>
    </ContantWrapper>

   </footer>
  )
}

export default Footer
