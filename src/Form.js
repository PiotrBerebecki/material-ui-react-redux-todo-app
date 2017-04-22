import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import formatDate from './lib/formatDate';
import { addTodo } from './actions';
import { highlightInputError2000 } from './lib/highlightInputError';

const styles = {
  underlineStyle: {
    borderColor: '#eea6a0',
  },
};

class Form extends Component {
  state = {
    text: '',
    date: {},
    emptyTextSubmitted: false,
    emptyDateSubmitted: false,
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDateChange = (e, date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text && this.state.date instanceof Date) {
      this.props.addTodo({ text: this.state.text, date: this.state.date });
      this.setState({
        text: '',
        date: {},
      });
    }

    if (!this.state.text) {
      highlightInputError2000(this, 'emptyTextSubmitted');
    }

    if (!(this.state.date instanceof Date)) {
      highlightInputError2000(this, 'emptyDateSubmitted');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          onChange={this.handleTextChange}
          value={this.state.text}
          name="text"
          hintText="To do"
          fullWidth={true}
          autoComplete="off"
          underlineStyle={
            this.state.emptyTextSubmitted ? styles.underlineStyle : null
          }
        />
        <DatePicker
          onChange={this.handleDateChange}
          value={this.state.date}
          name="date"
          hintText="Due date"
          fullWidth={true}
          formatDate={formatDate}
          underlineStyle={
            this.state.emptyDateSubmitted ? styles.underlineStyle : null
          }
        />
        <RaisedButton type="submit" label="Add todo" fullWidth={true} />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(Form);
