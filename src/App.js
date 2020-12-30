import React from 'react';

class App extends React.Component{
    state = {displayBio: false}

    // methods invoked by controls need to be callbacks so we do not have to bind with .bind(this)
    toggleDisplayBio = () =>{
        this.setState({displayBio: ! this.state.displayBio})
    }

    render(){
        const bio = this.state.displayBio ? (
            <div>
                <p>I live in Mississauga Ontario</p>
                <p>My favourite language is JavaScript</p>
                <p>Besided coding and testing, I love music</p>
                <button onClick={this.toggleDisplayBio}>Read less</button>
            </div>
        ): (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more...</button>
            </div>
        );
        return(
            <div>
                <h1>Hello</h1>
                <p>My Name is Sean Tiley</p>
                {bio}
            </div>
        );
    }
}

export default App;