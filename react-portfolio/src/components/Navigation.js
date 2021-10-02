import React from "react";

const navigationStyles = {
    navigation: {
        backgroundColor: '#E5989B',
        color: 'white',
        display: 'flex',
        fontSize: '35px',
        height: "100px",
        width: "100%",
        margin: "auto",
        flexDirection: "row",
    },
    navigationList: {
        listStyleType: 'none',
        display: "inline-block",
        flexDirection: "row",
    },
};

export default function Navigation(){
    return (
        <nav class="navbar navbar-expand-lg" style={navigationStyles.navigation}>
            <div style={navigationStyles.navigation}>
                <div>
                    <ul style={navigationStyles.navigationList}>
                        <a class="nav-link" href="#about">About Me</a>
                        <a class="nav-link" href="#projects">Projects</a>
                        <a class="nav-link" href="#contact">Contact</a>
                    </ul>
                </div>
            </div>
        </nav>
    )
};