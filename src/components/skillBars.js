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
        <div className="title">Habilitações</div>
          <div className="box-c"><div href="#" className="customUnderline">Avaliação Global do Desenvolvimento</div></div>
          <div className="box-c"><div href="#" className="customUnderline">Avaliação Psicológica e Psicopedagógica</div></div>
          <div className="box-c"><div href="#" className="customUnderline">Elaboração de relatórios de Avaliação / Diagnóstico</div></div>
          <div className="box-c"><div href="#" className="customUnderline">Conhecimento de diferentes provas de avaliação</div></div>
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
