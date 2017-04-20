import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <MainContent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
