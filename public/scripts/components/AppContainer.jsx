import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/image/edit';

export class AppContainer extends React.Component {
  render() {
    return (
      <div className="top-level">
        <FlatButton
          className="edit-model"
          icon={<Edit />}
        />
      </div>
    );
  }
}
export default AppContainer;
