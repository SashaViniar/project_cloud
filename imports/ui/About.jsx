import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class About extends React.Component {
  
  render(){
    return(
      <div className={this.props.className}>
        <header>
          <h1>About:</h1>
        </header>
        
      </div>
    );
  }
}

export default About;





