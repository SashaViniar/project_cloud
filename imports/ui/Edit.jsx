import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class Edit extends React.Component {
  handleSubmit(){
    alert("not implemented yet");
  }
  render(){
    return(
      <div className={this.props.className}>
        <header>
          <h1>Create a new task:</h1>
        </header>
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <div className="col-md-12">
            <label htmlFor="name" className="col-md-2 col-xs-6">Task name:&nbsp;&nbsp;</label>
            <input
              className="col-md-3 col-xs-6"
              type="text"
              ref="name"
              name="name"
              placeholder="Type task name here"/>
          </div>
          <div className="col-md-12">
            <label htmlFor="description" className="col-md-2 col-xs-6">Task description:&nbsp;&nbsp;</label>
            <textarea
              className="col-md-5 col-xs-6 description-area"
              type="text"
              ref="description"
              name="description"
              placeholder="Type task description here"/>
          </div>
          <div className="col-md-12 centr">
            <button>Submit task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;

