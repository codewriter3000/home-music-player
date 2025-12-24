import React, { Component } from 'react';
import UIShell from './content/UIShell/UIShell';
import { Theme } from '@carbon/react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
				<Theme theme="g100">
        	<UIShell />
				</Theme>
      </div>
    );
  }
}

export default App;