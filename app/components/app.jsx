// app.jsx

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true
    };
  }
  render() {
    let h1 = "Default React Starter App Header";
    if (this.state.display) h1 = this.props.title;
    return (
      <h1>{h1}</h1>
    );
  }
};

export default App;