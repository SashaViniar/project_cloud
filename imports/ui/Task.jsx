import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

const fadeo = el => () =>
  $( el ).fadeOut( "slow", ()=>{});


// Task component - represents a single todo item
export default class Task extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value    
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
    }

    deleteThisTask() {
        Meteor.call('tasks.remove', this.props.task._id);
    }
    togglePrivate() {
        Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
    }
    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS

        const taskClassName = classnames({
            checked: this.props.task.checked,
            private: this.props.task.private,
        });
        return (
           <li className={taskClassName + " navbar navbar-inverse color-white"} style = {{margin:"5%"}}>    


          <div class="task">
      <div>
        <div class="row" style="color:white">

          <div class="col-md-6" style="float:left;">
            <div>Task {this.props.task.name} created by {this.props.task.username}</div>
          </div>
          <div class="col-md-6">
            <button class="btn btn-primary" style="float:right;">Description</button>
            <button class="btn btn-danger" style="float:right;">Delete</button>
          </div>


        </div>
        <div class="row text-center">
          <p>Task name</p>
        </div>
        <div class="row text-center">
          <p>Description</p>
        </div>
        <div class="col-md-12">
          <div class="col-md-4">
            <div class="row text-center">
              Algorithm
            </div>
            <div class="border-block">
                <pre>{this.props.task.algorithm}</pre>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row text-center">
              Date
            </div>
            <div class="border-block">
              <pre>{this.props.task.data}</pre>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row text-center">
              Output
            </div>
            <div class="border-block" onClick = {this.toggleChecked.bind(this)}>
              <pre>{this.props.task.output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>


    </li>
          
       

        );
    }
}

Task.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: PropTypes.object.isRequired,
    showPrivateButton: React.PropTypes.bool.isRequired,
};