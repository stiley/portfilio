import React from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
class App extends React.Component{
    state = {displayBio: false}

    // methods invoked by controls need to be callbacks so we do not have to bind with .bind(this)
    toggleDisplayBio = () =>{
        this.setState({displayBio: ! this.state.displayBio})
    }

    render() {
        return (
            <div>

                <h1>Hello!</h1>
                <p>My name is Sean.</p>

                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Mississauga Ontario</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love music and pizza!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }

}

export default App;