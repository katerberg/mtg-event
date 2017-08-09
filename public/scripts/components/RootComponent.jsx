import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import TitleBar from './TitleBar';
import AppContainer from './AppContainer';

const RootComponent = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Paper zDepth={1}>
      <TitleBar />
      <AppContainer />
    </Paper>
  </MuiThemeProvider>;

export default RootComponent;
