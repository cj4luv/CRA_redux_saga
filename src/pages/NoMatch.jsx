import React, { PureComponent } from 'react';
import * as PropTypes from '../common/PropsTypes';
import * as DefaultProps from '../common/DefaultProps';

class NoMatch extends PureComponent {
  render() {
    const { history } = this.props;
    alert('존재하지 않는 페이지입니다.');
    history.goBack();
    return (
      <div style={{ width: '100%', height: '100%' }} />
    );
  }
}

NoMatch.propTypes = {
  history: PropTypes.history,
};

NoMatch.defaultProps = {
  history: DefaultProps.history,
};

export default NoMatch;
