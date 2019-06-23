import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';

import { notationProps } from '../defaults/props';

class Notation extends Component {
  constructor(props) {
    super(props);

    this.notation = null;
    this.renderNotation = this.renderNotation.bind(this);
  }

  componentDidMount() {
    this.renderNotation();
  }

  componentDidUpdate() {
    this.renderNotation();
  }

  renderNotation() {
    const {
      el,
      engraverParams,
      notation,
      parserParams,
      renderParams,
      TimingCallbacks,
    } = this.props;

    this.notation = abc.renderAbc(
      el || this.el,
      notation,
      engraverParams,
      parserParams,
      renderParams,
      TimingCallbacks,
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
};

Notation.defaultProps = notationProps;

export default Notation;
