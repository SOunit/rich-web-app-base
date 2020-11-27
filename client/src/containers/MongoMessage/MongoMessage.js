import React, { Component } from 'react';
import axios from 'axios';

class MongoMessage extends Component {
  state = {
    message: null,
  };

  async fetchMessage() {
    const res = await axios.get('/node/mongo/message');
    this.setState({ message: res.data.message });
  }

  componentDidMount() {
    this.fetchMessage();
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default MongoMessage;
