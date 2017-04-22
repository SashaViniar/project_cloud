import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const checkFileAPI = () => window.File && window.FileReader && window.FileList && window.Blob;

class TexFileUploader extends React.Component {
  render(){
    return(
      <div className={this.props.className}>
        <h4>{this.props.caption}</h4>
        <p>
          <label htmlFor={this.props.name+"_mode"}>Input mode:</label>
          <select name={this.props.name+"_mode"} ref="mode">
            <option value="text">Text</option>
            <option value="file">File</option>
          </select>
        </p>
      </div>
    );
  }
}

export default TexFileUploader;