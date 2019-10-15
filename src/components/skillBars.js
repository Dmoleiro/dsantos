import React, { Component } from 'react';
import {connect} from "react-redux";
import '../styles/skillBars.css';

const mapStateToProps = (state, ownProps) => {
    return {selectedSliderTabIndex: state.dm.selectedSliderTabIndex};
};

class SkillBars extends Component {
  constructor(props) {
      super(props);

      this.state={};
  }
  componentDidMount() {
      let store = this.props.store;
      let storeData = store.getState();

      this.setState({
          ...this.state,
          selectedSliderTabIndex: storeData.dm.selectedSliderTabIndex
      });
  }
  static getDerivedStateFromProps(nextProps, state) {
      let store = nextProps.store;
      let storeData = store.getState();

      if (nextProps && storeData) {
          state.selectedSliderTabIndex = storeData.dm.selectedSliderTabIndex;
          return state;
      }
      return null;
  }

  render() {
    let store = this.props.store;
    let storeData = store.getState();
    let selectedSlider = storeData.dm.selectedSliderTabIndex;

    let psi = selectedSlider === 0 && (
      <div>
        <ul>
          <li><span className="html5"></span><em>Avaliação, diagnóstico e intervenção</em></li>
          <li><span className="css3"></span><em>Elaboração de relatórios de avaliação</em></li>
          <li><span className="js"></span><em>Gritar mais alto que os miudos</em></li>
          <li><span className="react"></span><em>Dizer que o patrao nao paga nada</em></li>
          <li><span className="electron"></span><em>Bater com o telemovel até partir</em></li>
        </ul>
      </div>
    );

    return (
      <div className="skillBarsContainer">
        <div className="skills" id="skills">
          {psi}
        </div>
      </div>
    );
  }

  elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
}
export default connect(mapStateToProps)(SkillBars);
