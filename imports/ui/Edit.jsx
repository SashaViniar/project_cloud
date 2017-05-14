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
          <h1>Edit task:</h1>
        </header>
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >

          <div className="col-md-12">
            <div className="col-md-3">
              <label htmlFor="name" className="">Task name:&nbsp;&nbsp;</label>
            </div>
            <div className="col-md-6">
              <input
              className="form-control"
              type="text"
              ref="name"
              name="name"
              placeholder="Type task name here"/>
            </div>

            
          </div>
          <div className="col-md-12" style = {{"margin-top":"20px"}}>
          <div className="col-md-3">
            <label htmlFor="description" className="">Task description:&nbsp;&nbsp;</label>
          </div>
            <div className="col-md-6">
              <textarea
              className="form-control description-area"
              type="text"
              ref="description"
              name="description"
              placeholder="Type task description here"/>
            </div>
            
          </div>
          <div className="col-md-12 centr"  style = {{"margin-top":"20px"}}>
            <button className="btn btn-info">Submit task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;

