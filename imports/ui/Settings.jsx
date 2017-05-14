import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';



// Task component - represents a single todo item
export default class Setting extends Component {
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

          return{
          	<div className="setting">
		<div className="col-md-12">
			<form>
				<label for="pass">Change password</label>
				<input type="password" name="pass"/>
				<input type="password" name="pass"/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	</div>
          }

    }
}
