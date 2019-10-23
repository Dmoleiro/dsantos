import React, {Component} from 'react';
import '../styles/titleBar.css';

class TitleBar extends Component {
    render() {
        return (
            <div className="titleBarContainer" id="title-bar">
                <div className="titleBarName">
                    Daniela Santos
                </div>
                <div className="titlePosititon">
                    Psicóloga Educacional
                </div>
                <hr className="horizontalBreak"/>
                <div className="titleAddress">
                    Lisboa
                </div>
                <div className="titleContacts">
                    dalexandrasantos@gmail.com
                </div>
                <img className="titlePhoto" alt='image20' src={process.env.PUBLIC_URL + '/assets/photo.png'}/>
            </div>
        );
    }
}

export default TitleBar;
