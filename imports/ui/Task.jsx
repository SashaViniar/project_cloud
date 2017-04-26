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
         
          
          <li className={taskClassName + "navbar navbar-inverse color-white"} style = {{margin:"5%"}}>      
        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        { this.props.showPrivateButton ? (
          <button className="toggle-private btn btn-primary" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
            
          </button>
        ) : ''}
        <div className="bg-primary"> <span className="text color-white"><strong>{this.props.task.username}</strong>: {this.props.task.name}</span></div> 
        <button style = {{float:"right" }} className="btn btn-danger delete " onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
          
        <p className = "centr color-white"  onClick = {fadeo("#task"+this.props.task._id).bind(this)}>Description : {this.props.task.description}</p>
        <div className="col-md-12 color-white" id = {"task" + this.props.task._id}>
          <div className="col-md-6">
            <div>
                  <p className="centr">ALGORITHM</p>
                  <br/>
                  <div className = "dashed-border">
                       <pre>{this.props.task.algorithm}</pre>
                  </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="centr">DATA</p>
              <br/>
              <div className = "dashed-border">
                   <pre>{this.props.task.data}</pre>
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
