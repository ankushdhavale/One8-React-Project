import React from 'react'
import { Link } from 'react-router-dom';
import { SlSocialLinkedin,SlSocialInstagram,SlSocialGithub } from 'react-icons/sl';
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer'>
             <Link to="https://www.linkedin.com/in/ankush-dhavale-5aa76b213/">
                <SlSocialLinkedin className='linkdin'/>
             </Link>
             <Link to="http://localhost:3000/">
                <SlSocialInstagram />
             </Link>
             <Link to="https://github.com/ankushdhavale">
                <SlSocialGithub />
             </Link>
        </div>
    </div>
  )
}

export default Footer
