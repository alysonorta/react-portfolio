import React from 'react';

const headerStyles = {
    header: {
    backgroundColor: 'black',
    color: 'white',
    },
    
};

export default function Header(){
    return (
        <div style={headerStyles.header}>
            <header class='header'>
                <h1>Home</h1>
            </header>
        </div>
    )
};