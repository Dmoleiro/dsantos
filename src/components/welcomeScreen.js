import React, {Component} from 'react';
import '../styles/welcomeScreen.css';

class WelcomeScreen extends Component {
    render() {
        return (
            <div className="welcomeContainer" id="welcomeScreen">
                <section className="intro">
                    <div className="content">
                        <div className="sp-container">
                        	<div className="sp-content">
                        		<h2 className="frame-1">Olá, eu sou a Daniela</h2>
                        		<h2 className="frame-2">e este é o meu curriculo</h2>
                        		<h2 className="frame-5">
                        			<span>Move</span>
                        			<span> para baixo</span>
                        			<span> para ver mais</span>
                        		</h2>
                        	</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WelcomeScreen;
