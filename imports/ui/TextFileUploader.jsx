import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const checkFileAPI = () => window.File && window.FileReader && window.FileList && window.Blob;

class TextFileUploader extends React.Component {
  constructor(){
    super();

    this.state = {mode: "text"};
    // this.onModeChange = this.onModeChange.bind(this);
  }

  onModeChange(){
    const newMode = this.refs.mode.value;
    this.setState((props, state) => ({mode: newMode}));
  }

  onUploadAreaClick(){
    $(ReactDOM.findDOMNode(this.refs.drag)).children("input").click();
  }

  render(){
    return(
      <div className={this.props.className}>
        <h4>{this.props.caption}</h4>
        {
          checkFileAPI() ? 
            <div className="col-xs-12 tfu-head">
              <label htmlFor={this.props.name+"_mode"}>Input mode:&nbsp;&nbsp;</label>
              <select name={this.props.name+"_mode"} ref="mode" onChange={this.onModeChange.bind(this)}>
                <option value="text">Text</option>
                <option value="file">File</option>
              </select>
            </div>
          : ""
        }
        {
          this.state.mode=="text" ?
            <textarea className="col-xs-12 txt-input-area" name={this.props.name+"_input"} />
          :
            <div className="col-xs-12 file-drag-area centr" onClick={this.onUploadAreaClick.bind(this)} ref="drag">
              <input type="file" name={this.props.name+"_input"} />
              Click here or drop file to upload
            </div> 
        }
      </div>
    );
  }
}

export default TextFileUploader;