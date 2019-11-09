import React, {Component} from 'react';
import '../styles/workHistory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
// import { faUsers, faFutbol, faBriefcaseMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    render() {
        return (
            <div className="workHistoryContainer" id="history">
                <div className="workHistoryTitle">Desenvolvimento Profissional</div>
                <div className="workHistory">
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon ">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2016 - Presente
                        </div>
                        <div className="workHistoryItemContent ">
                            <div className="workHistoryItemTitle">
                                Psicóloga Educacional - Lógicamentes
                            </div>
                            <div className="workHistoryItemDescription">
                                <p>Intervenção nas Perturbações do Neurodesenvolvimento</p>
                                <p>Elaboração de programas de intervenção na área da psicologia (Programa PIPA)</p>
                                <p>Construção de tarefas e atividades de acordo com a perturbação</p>
                                <p>Intervenção em contextos distintos (escola, casa, sala de aula)</p>
                                <p>Elaborar programas de apoio parental</p>
                                <p>Trabalhar em equipa multidisciplinar</p>
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2018 - Presente
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Psicóloga - Fisiomedical
                            </div>
                            <div className="workHistoryItemDescription">
                                <p>Avaliação das diferentes áreas do neurodesenvolvimento da criança (avaliação global do desenvolvimento; avaliação psicológica; avaliação psicopedagógica)</p>
                                <p>Realização de relatórios de avaliação e intervenção</p>
                                <p>Intervenção no sentido direto com a criança (modificação de comportamentos e ajustamento social e académico)</p>
                                <p>Intervenção no sentido indireto (pais, educadores e escola - visa a partilha de informações relevantes e o estabelecimento de estratégias para o sucesso do trabalho com as famílias, escolas e outros intervenientes que façam parte do contexto de vida da criança)</p>
                                <p>Intervenção contexto clinico.</p>
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2018
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Leitura e Escrita no Autismo
                            </div>
                            <div className="workHistoryItemDescription">
                                Elaboração e apresentação do “Programa de Estimulação da Leitura e da Escrita em crianças com perturbação do Espetro do Autismo”.
                            </div>

                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2018
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Membro Efetivo da OPP
                            </div>
                            <div className="workHistoryItemDescription">
                                <p>Membro Efetivo da Ordem dos Psicólogos</p>
                                <p>Cédula profissional nº 022377</p>
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2018
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Ano Profissional Júnior
                            </div>
                            <div className="workHistoryItemDescription">
                                Apresentação da candidatura ao Prémio Ano Profissional Júnior 2017/2018 para os 10 melhores estágios, em Braga.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2017 / 2018
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Projeto EMOTIVA
                            </div>
                            <div className="workHistoryItemDescription">
                                Elaboração de Programas de Prevenção Social e Comportamental no 2º ciclo.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2016 / 2017
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Estágio Profissional para OPP
                            </div>
                            <div className="workHistoryItemDescription">
                              Inicio do Estágio Profissional para a Ordem dos Psicólogos, no Centro de Desenvolvimento Infantil Logicamentes, em Lisboa.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2016
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Intervenção do Psicólogo nas NEE
                            </div>
                            <div className="workHistoryItemDescription">
                                Elaboração do artigo designado “A Intervenção do Psicólogo nas Necessidades Educativas Especiais – A experiência de um Centro de Desenvolvimento Infantil”, Congresso OPP, 2016.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            2014
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Dissertação de Mestrado
                            </div>
                            <div className="workHistoryItemDescription">
                                Elaboração e apresentação da dissertação de mestrado com o tema: “A atitude dos alunos do 1º ciclo do Ensino Básico face á Inclusão dos Pares com necessidades Educativas Especiais nas turmas de Ensino Regular”
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;
