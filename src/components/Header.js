import React from 'react';

const headerStyles = {
    header: {
    backgroundColor: '#E5989B',
    color: 'white',
    },
    
};

export default function Header(){
    return (
        <div style={headerStyles.header}>
            <header class='header'>
                <h1>Alyson Orta</h1>
            </header>
        </div>
    )
};