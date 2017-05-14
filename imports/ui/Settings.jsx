import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';
import { Meteor } from 'meteor/meteor';



// Task component - represents a single todo item
export default class Settings extends Component {
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

          return(
          	<div className={this.props.className}>
        		<div className="col-md-12">
                 <header>
                    <h1>Setting</h1>
                </header>
        			<form>
                        <div className="col-md-12" style = {{"margin-top":"20px"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label style = {{"margin":"0 auto","font-size":"18px"}} htmlFor="">Interval between task requests (ms):</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="number" min="0" className = "form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" style = {{"margin-top":"20px"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label style = {{"margin":"0 auto","font-size":"18px"}} htmlFor="">High CPU load level:%</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="number" min="0" max = "100" className = "form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" style = {{"margin-top":"20px"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label style = {{"margin":"0 auto","font-size":"18px"}} htmlFor="">Data split level:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="number" min="0" className = "form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12" style = {{"margin-top":"20px"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label style = {{"margin":"0 auto","font-size":"18px"}} htmlFor="">Expiry time (ms):</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="number" min="0"  className = "form-control"/>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12" style = {{"margin-top":"30px"}}>
                            <div className="row">
                                <div className="text-center">
                                    <input type="submit" className = "btn btn-info" value="Save"/>
                                </div>
                            </div>
                        </div>

        				
        			</form>
        		</div>
        	</div>
          );
    }
}
