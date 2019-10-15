import React, {Component} from 'react';
import '../styles/workHistory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFutbol, faBriefcaseMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    render() {
        return (
            <div className="workHistoryContainer" id="history">
                <div className="workHistoryTitle">Formação</div>
                <div className="workHistory">
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon ">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/18 - present
                        </div>
                        <div className="workHistoryItemContent ">
                            <div className="workHistoryItemTitle">
                                Psicóloga Educaciona @Logicamentes
                            </div>
                            <div className="workHistoryItemDescription">
                                Nem sei bem por onde começar, se as outras era cabras, destas nem se fala.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faFutbol} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/17 - 07/18
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Estágio Curricular @Diferenças
                            </div>
                            <div className="workHistoryItemDescription">
                                As colegas eram todas umas cabras.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faBriefcaseMedical} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/13 - 02/17
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Estagio Curricular @CBEI
                            </div>
                            <div className="workHistoryItemDescription">
                                Aquilo não é sitio para uma princesa trabalhar.
                            </div>

                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="workHistoryItemDate">
                            09/08 - 05/12
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Mestrado Integrado Psicologia Educacional @ISPA
                            </div>
                            <div className="workHistoryItemDescription">
                                Estudei muitas coisas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;
