import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

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
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks"
          />
        </form>
      </div>
    );
  }
}

export default Creator;