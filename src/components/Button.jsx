import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; // ES6

class Button extends PureComponent {
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
