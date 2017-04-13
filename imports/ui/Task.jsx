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
            <li className={taskClassName} style = {{margin:"5%"}}>      
        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
          </button>
        ) : ''}
        <span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
        <button style = {{float:"right" }} className="btn btn-danger delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
          
        <p className = "centr"  onClick = {fadeo("#task"+this.props.key).bind(this)}>Description : {this.props.task.description}</p>
        <div className="col-md-12" id = {"task" + this.props.key}>
          <div className="col-md-6">
            <div>
                  <p className="centr">IN</p>
                  <br/>
                  <div className = "dashed-border">
                       {this.props.task.in}
                       Hellnfds
                       fnsjakf
                       skalk
                  </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="centr">OUT</p>
              <br/>
              <div className = "dashed-border">
                   {this.props.task.out}
                   v,sanvl nskl bcjksa bcsjav 
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
