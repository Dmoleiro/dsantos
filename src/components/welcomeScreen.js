import React, {Component} from 'react';
import '../styles/welcomeScreen.css';

class WelcomeScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            let doc = window.document;
            if (doc !== null && doc !== undefined) {
                doc.body.style.overflowY = 'auto'
            }
        }, 2100);
    }

    render() {
        return (
            <div className="welcomeContainer" id="welcomeScreen">
                <section className="intro">
                    <div className="boxLoading">
                        <div className="loadingText">Loading...</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WelcomeScreen;
