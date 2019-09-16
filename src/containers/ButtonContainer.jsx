import React, { Component } from 'react';

import { Button } from '../components';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.httpcall();
  }

  httpcall = () => setTimeout(() => this.setState({ data: true }), 1000)

  render() {
    const { data } = this.state;
    if (!data) return <p>loading...</p>;
    return <Button text="text" />;
  }
}

export default ButtonContainer;
