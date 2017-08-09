import React from 'react';
import DeckMetadata from './DeckMetadata';

export class AppContainer extends React.Component {
  render() {
    return (
      <div className="top-level">
        <DeckMetadata />
      </div>
    );
  }
}

export default AppContainer;

