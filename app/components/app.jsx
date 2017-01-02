// app.jsx

import React, { PropTypes } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true
    };
  }
  toggleDisplay() {
    this.setState({ display: !this.state.display });
  }
  render() {
    let title = "My Default React Starter App";
    if (this.state.display) title = this.props.title;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.toggleDisplay.bind(this)}>Toggle header text</button>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;