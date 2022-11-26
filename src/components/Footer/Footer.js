import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../img/facebook.svg"
import twitter from "../../img/twitter.svg"
import instagram from "../../img/instagram.svg"
import whatsapp from "../../img/whatsapp.svg"
import "./Footer.css"
const Footer = () => {
    return(
        <footer>
            <Link> <img className="iconFooter" src={facebook}/></Link>
            <Link> <img className="iconFooter" src={twitter}/></Link>
            <Link> <img className="iconFooter" src={instagram}/></Link>
            <Link> <img className="iconFooter" src={whatsapp}/></Link>
        </footer>
    )
}

export default Footer