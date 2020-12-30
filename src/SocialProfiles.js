import React from 'react';
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends React.Component {
    render() {
        const {image, link, description} = this.props.profile;
        return(
            <span>
                <a href={link}>
                    <img src={image} alt="social-profile" style={{width: 35, height: 35, margin: 10}}/>
                </a>
            </span>
        )
    }
}


class SocialProfiles extends React.Component {
    render(){
        return (
            <div>
                <h2>Find me on social media!</h2>
                <div>
                    {SOCIAL_PROFILES.map((profile) => {
                        return (
                                <SocialProfile profile={profile} key={profile.id}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SocialProfiles;