import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { TestTokenizer } from '../core/CalcCore';
import TextFileUploader from './TextFileUploader';

class Creator extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call('tasks.insert', text);
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
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
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </div>
          <div className="col-md-12 row">
            <div className="col-md-4 col-xs-12">
              <TextFileUploader 
                className="col-md-12" 
                name="algorithm"
                caption="Data processing algorithm:"/>
            </div>
            <div className="col-md-4 col-xs-12">
              <TextFileUploader 
                className="col-md-12" 
                name="data"
                caption="Data to process(CSV):"/>
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

//TODO: Design good task addition form