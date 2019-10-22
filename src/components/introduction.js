import React, {Component} from 'react';
import '../styles/introduction.css';

class Introduction extends Component {
    render() {
        return (
            <div className="introductionContainer" id="introduction">
                <div className="introductionTitle">
                    Apresentação
                </div>
                <div className="introductionText">
                  <p>O meu Nome é Daniela Santos e sou Psicóloga. Em 2014 terminei o Mestrado em psicologia Educacional no ISPA – IU.</p>
                </div>
            </div>
        );
    }
}

export default Introduction;
