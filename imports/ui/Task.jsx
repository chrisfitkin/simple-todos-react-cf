import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  toggleChecked() {
    // Set the checked proporty to the oppositve of its current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    // checked class
    const taskClassName = this.props.task.checked ? 'checked' : '';

    // use || false syntax for checked value so initial empty value doesn't throw warning
    return (
      <li>
        <button className='delete' onClick={this.deleteThisTask.bind(this)}>&times;</button>

        <input type='checkbox' readOnly checked={this.props.task.checked || false} onClick={this.toggleChecked.bind(this)} />

        <span className='text'>{this.props.task.text}</span>
      </li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};