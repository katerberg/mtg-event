import React from 'react';
import TextField from 'material-ui/TextField';

export class DeckMetadata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dciNumber: '',
      nameErrorText: 'This field is required',
    };
  }

  handleNameChange(name) {
    this.setState({
      name,
      nameErrorText: name ? '' : 'This field is required',
    });
  }

  handleDciChange(dciNumber) {
    this.setState({
      dciNumber,
    });
  }

  render() {
    return (
      <div>
        <TextField errorText={this.state.nameErrorText}
          fullWidth
          hintText="Name"
          onChange={(a, val) => this.handleNameChange(val)}
          value={this.state.name}
        />
        <TextField
          fullWidth
          hintText="DCI Number"
          onChange={(a, val) => this.handleDciChange(val)}
        />
      </div>
    );
  }
}

export default DeckMetadata;

