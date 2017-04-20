import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import formatDate from './lib/formatDate';
import { addTodo } from './actions';

class Form extends Component {
  state = {
    text: '',
    date: {},
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
      console.log('submitting');
      this.props.addTodo(this.state);
      this.setState({
        text: '',
        date: {},
      });
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
        />
        <DatePicker
          onChange={this.handleDateChange}
          value={this.state.date}
          name="date"
          hintText="Due date"
          fullWidth={true}
          formatDate={formatDate}
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
