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
                    <br></br>
                  <p>A Dissertação de mestrado teve como tema:</p>
                  <p>“A atitude dos alunos do 1º ciclo do Ensino Básico face á Inclusão dos Pares com necessidades Educativas Especiais nas turmas de Ensino Regular”.</p>
                    <br></br>
                  <p>No ano de 2016/2017 iniciei o Estágio Profissional para a Ordem dos Psicólogos no Centro de Desenvolvimento Infantil Logicamentes,</p>
                  <p>em Lisboa. Tornando-me membro efetivo da ordem dos psicólogos em 2018 (Cédula Profissional nº 022377).</p>
                    <br></br>
                  <p>
                      Membro Efetivo da Ordem dos Psicólogos, Cédula profissional: 022377
                  </p>
                </div>
            </div>
        );
    }
}

export default Introduction;
