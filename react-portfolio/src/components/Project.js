import React from "react";
import myProjects from "../myProjects";

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
      fontSize: '35px',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
};


const Project = ({ myProjects }) => {
    const myProjectList = myProjects.map((myProject) => {
        return <myProjects key={myProject.name.title} myProject={myProject} />;
    })
    return (
        <div className="container">
            <div style={projectStyles.project}> {myProjectList}</div>
        </div>
    )
};

export default Project;



