import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './TitleBar';
import AppContainer from './AppContainer';

const RootComponent = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <TitleBar />
      <AppContainer />
    </div>
  </MuiThemeProvider>;

export default RootComponent;
