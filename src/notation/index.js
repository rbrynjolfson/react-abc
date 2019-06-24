import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';
import {TimingCallbacks} from 'abcjs';

import { notationProps } from '../defaults/props';

class Notation extends Component {
  constructor(props) {
    super(props);

    this.notation = null;
    this.renderNotation = this.renderNotation.bind(this);
  }

  componentDidMount() {
    this.renderNotation();

    if (this.notation[0] && this.props.timingParams && this.props.onSetControls) {
      this.setControls(this.notation[0])
    }

  }

  componentDidUpdate() {
    this.renderNotation();
  }

  setControls(tune) {
    const callbacks = new TimingCallbacks(tune, this.props.timingParams)
    this.props.onSetControls(callbacks)
  }

  renderNotation() {
    const {
      el,
      engraverParams,
      notation,
      parserParams,
      renderParams,
    } = this.props;

    this.notation = abc.renderAbc(
      el || this.el,
      notation,
      engraverParams,
      parserParams,
      renderParams,
    );

  }

  render() {
    return (
      <div
        ref={(input) => { this.el = input; }}
      />
    );
  }
}

Notation.propTypes = {
  el: PropTypes.node,
  engraverParams: PropTypes.object,
  notation: PropTypes.string.isRequired,
  parserParams: PropTypes.object,
  renderParams: PropTypes.object,
  timingParams: PropTypes.object,
  onSetControls: PropTypes.func,
};

Notation.defaultProps = notationProps;

export default Notation;
