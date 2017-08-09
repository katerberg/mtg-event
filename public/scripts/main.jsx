import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RootComponent from './components/RootComponent';

injectTapEventPlugin();
const root =
  <RootComponent />
;

ReactDOM.render(root, document.querySelector('.contents'));
