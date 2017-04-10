import React from 'react';
import UIWrapper from './UIWrapper.jsx';
import { login } from '../api/accounts';
// Login component - represents the whole app
class Reset extends React.Component {
  constructor() {
    super();
    Template.reset.events({
      'click #signin': function(e) {
        e.preventDefault();
        FlowRouter.go('/login');
      }
    });
  }
  render() {
    return (
      <div>
        <div className="row" style={{"height":"1em"}}></div>
        <div className="row centr">
          <div className="row">
            <img src="/logo.png" width="300" alt="" />
          </div>
          <div className="row loginHeading light-font">
            <h1>Project Cloud</h1>
          </div>
        </div>
        <div className="row centr">
          <h4 className="light-font">Reset Password:</h4>
        </div>
        <div className="row">
          <div className="col-md-2 col-xs-1"></div>
          <div className="col-md-8 col-xs-10 dashed-border">
            
            <div className="row vcentr">
              <div className="col-md-5">
                <UIWrapper template="reset"/>
              </div>
              
            </div>
          </div>
          <div className="col-md-2 col-xs-1"></div>
        </div>
        <div className="row" style={{"height":"1em"}}></div>
      </div>
    );
  }
}
        

export default Reset;