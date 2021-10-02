import React from "react";

const footerStyles = {
    footer: {
    backgroundColor: '#E5989B',
    color: 'white',
    },
    
};

export default function Footer(){
    return (
        <div style={footerStyles.footer}>
            <footer>
                <h6>Thank you for visiting my portfolio site. Made with love by Alyson. 2021</h6>
            </footer>
        </div>
    )
};