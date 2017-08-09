import React from 'react';
import AppBar from 'material-ui/AppBar';

class TitleBar extends React.Component {
  render() {
    return <AppBar
      showMenuIconButton={false}
      title="MTG Event"
      titleStyle={{textAlign: 'center'}}
    />;
  }
}

export default TitleBar;
