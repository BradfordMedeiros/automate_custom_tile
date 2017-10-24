import React from 'react';
import { render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ProtoCircuitProgrammer from './containers/ProtoCircuitProgrammer';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
     <ProtoCircuitProgrammer />
  </MuiThemeProvider>
);


render(<App />, document.getElementById('root'));
