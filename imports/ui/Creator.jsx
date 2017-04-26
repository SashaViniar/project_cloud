import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { TestTokenizer } from '../core/CalcCore';
import TextFileUploader from './TextFileUploader';

class Creator extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const algorithm = this.refs.algorithm.getInput();
    const data = this.refs.data.getInput();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const description = ReactDOM.findDOMNode(this.refs.description).value.trim();
    Meteor.call('tasks.insert', {algorithm, data, name, description});
    // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = '';
    this.props.go("content");
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
          <div className="col-md-12 row">
            <div className="col-md-4 col-xs-12">
              <TextFileUploader 
                className="col-md-12" 
                name="algorithm"
                caption="Data processing algorithm:"
                ref="algorithm"/>
            </div>
            <div className="col-md-4 col-xs-12">
              <TextFileUploader 
                className="col-md-12" 
                name="data"
                caption="Data to process(CSV):"
                ref="data"/>
            </div>
            <div className="col-md-4 col-xs-12"><div className="col-md-12 dummy">REDUCER(OPTIONAL):<br/>COMING SOON</div></div>
          </div>
          <div className="col-md-12 centr">
            <button>Submit task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Creator;

//TODO: Implement dragover animations



