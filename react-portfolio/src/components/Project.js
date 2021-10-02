import React from "react";

const projectStyles = {
    project: {
      margin: 20,
      background: '#B5838D',
      display: "flex",
      justifyContent: "space-evenly",
      height: "auto",
      alignItems: "baseline",
    },
    heading: {
      background: '#B5838D',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
};



export default function Project(){
    return (
        <div style={projectStyles.project}>
            <footer>
                <h6>Here is my first Project.</h6>
            </footer>
        </div>
    )
};



