import React, { Component } from 'react';
import AppTemplate from './container/appTamplate';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppTemplate/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
