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
         <div className="navbar navbar-inverse">
      <div className="col-md-12">
        <div className="col-md-6">
          <h4>Task {this.props.task.name} created by {this.props.task.username} </h4>
        </div>
        <div className="col-md-4">
          { this.props.showPrivateButton ? (
          <button className="toggle-private btn btn-primary" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
            
          </button>
        ) : ''}
        </div>
        <div className="col-md-2">
          <h2><button className = "btn btn-primary" style ={{float:"right"}}>S</button><button className = "btn btn-primary" style ={{float:"right"}}  onClick={this.deleteThisTask.bind(this)}>X</button></h2>
        </div>
        
      </div>
      
      
      <div className="col-md-12">
          <h2 className="tascname">This is Task Name</h2>
      </div>
      <div className="col-md-12">
        <div>
          <h2 className = "taskdescr">This is Task Description</h2>
          
          <div className="thisdesc" >
              {this.props.task.description}  
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="col-md-4">
          <h4 className="taskdescr">ALGORITHM</h4>
          <div className = "stylebro thisdesc">
            <pre>{this.props.task.algorithm}</pre>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="taskdescr">DATA</h4>
          <div className = "stylebro thisdesc">
            <pre>{this.props.task.data}</pre>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="taskdescr">OUTPUT</h4>
          <div className = "stylebro thisdesc" onClick = {this.toggleChecked.bind(this)}>
              { this.props.task.checked ? "done" : "fresh"}
              
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
