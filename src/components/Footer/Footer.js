import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
           <hr className="footerHr"/>
		   <div className="footer-container">
                <div className="item1">
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>  
            </div>
        </footer>
    );
};

export default Footer;