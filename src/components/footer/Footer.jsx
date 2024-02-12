import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer-bottom">
                &copy; {(new Date().getFullYear())} YourSiteName. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;