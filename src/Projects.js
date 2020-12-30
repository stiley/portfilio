import React from 'react';
import PROJECTS from "./data/projects";

class Project extends React.Component {
    render() {
        // destructure the project properties
        const {title, image, description, link} = this.props.project;
        // console.log("this.props=",this.props)
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h2>Our projects go here</h2>
                <div>
                    {
                        PROJECTS.map((project) => {
                            return (
                                <Project project={project} key={project.id}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;