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
                    <p>O meu Nome é Daniela Santos e sou Mestre em Psicologia Educacional pelo ISPA – IU.</p>
                    <p>A minha área de formação é a educação, que surgiu pelo gosto em trabalhar com crianças e adolescentes, sobretudo, em contexto escolar. É gratificante poder acompanhar os jovens e fornecer-lhes ferramentas para uso diário na resolução de conflitos, na gestão das relações interpessoais e na relação com os outros e os contextos. A minha verdadeira motivação é trabalhar com jovens, com ou sem perturbações do neurodesenvolvimento, ajudando-os a ultrapassar as suas dificuldades e apoiando-os face às mesmas.</p>
                </div>
            </div>
        );
    }
}

export default Introduction;
