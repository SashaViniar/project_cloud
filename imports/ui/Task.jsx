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


          <div className="task">
      <div>
        <div className="row" style="color:white">

          <div className="col-md-6" style="float:left;">
            <div>Task {this.props.task.name} created by {this.props.task.username}</div>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary" style={{float:"right"}}>Description</button>
            <button className="btn btn-danger" style={{float:"left"}}>Delete</button>
            <button className="btn btn-succses" style={{float:"left"}}>Delete</button>
          </div>


        </div>
        <div className="row text-center">
          <p>Task name</p>
        </div>
        <div className="row text-center">
          <p>Description</p>
        </div>
        <div className="col-md-12">
          <div className="col-md-4">
            <div className="row text-center">
              Algorithm
            </div>
            <div className="border-block">
                <pre>{this.props.task.algorithm}</pre>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row text-center">
              Date
            </div>
            <div className="border-block">
              <pre>{this.props.task.data}</pre>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row text-center">
              Output
            </div>
            <div className="border-block" onClick = {this.toggleChecked.bind(this)}>
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

  $(document).on('click', '.btn-primary', function() {
      

      console.log(parent);
      $(this).parents('.task').find('.col-md-12').toggle();
      

    });