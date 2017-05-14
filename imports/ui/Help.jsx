import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class Help extends React.Component {
  
  render(){
    return(
      <div className={this.props.className}>
        <header>
          <h1>Help:</h1>
        </header>
        
      </div>
    );
  }
}

export default Help;





