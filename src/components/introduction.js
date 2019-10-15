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
                    Sou a Daniela, gosto muito de ser psicologa e faço bué cenas.
                    Trato de miudos doidos e de gente doida no geral e, também eu, sou um pouco doida das ideias.
                    Entra em contacto se souberes de uma clinica que esteja a recrutar e a pagar a horas.
                    Não é para isto que me pagam...
                </div>

            </div>
        );
    }
}

export default Introduction;
