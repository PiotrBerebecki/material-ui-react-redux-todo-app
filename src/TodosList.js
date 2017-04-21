import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { grey900 } from 'material-ui/styles/colors';
import uuid from 'uuid/v4';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import formatDate from './lib/formatDate';
import { toggleTodo, deleteTodo } from './actions';

class TodosList extends Component {
  handleToggle = e => {
    e.persist();
    setTimeout(() => {
      this.props.toggleTodo(parseInt(e.target.id, 10));
    }, 0);
  };

  handleDelete = e => {
    e.preventDefault();
    const id = e.target.id || e.target.parentElement.id;
    this.props.deleteTodo(parseInt(id, 10));
  };

  render() {
    const renderTodos = this.props.todos.map(todo => (
      <ListItem
        leftCheckbox={
          <Checkbox
            onClick={this.handleToggle}
            checked={todo.isComplete}
            id={todo.id}
          />
        }
        rightIcon={
          <ActionDelete
            onClick={this.handleDelete}
            id={todo.id}
            hoverColor={grey900}
          />
        }
        primaryText={todo.text}
        secondaryText={formatDate(todo.date)}
        key={uuid()}
      />
    ));

    return (
      <div>
        <List>
          {renderTodos}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleTodo, deleteTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
