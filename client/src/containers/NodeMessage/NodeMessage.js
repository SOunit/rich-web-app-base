import React, { Component } from 'react';
import axios from 'axios';

class NodeMessage extends Component {
  state = {
    message: null,
  };

  async fetchMessage() {
    const res = await axios.get('/node/message');
    this.setState({ message: res.data });
  }

  componentDidMount() {
    this.fetchMessage();
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default NodeMessage;
