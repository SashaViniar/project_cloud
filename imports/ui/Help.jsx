import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class Help extends React.Component {
  
  render(){
    return(
      <div className={this.props.className}>
        <header>
          <h1>About:</h1>
        </header>
        <div className="col-md-12">
        	<div className="col-md-1"></div>
        	<div className="col-md-10">
        		<p className = "text-help"></p>
        	</div>
        	<div className="col-md-1"></div>
        </div>

        <div className="col-md-12">
        	<h1>Operator</h1>
        	<table>
        		<tbody>
        			<tr className = "col-md-3">
        				<td></td>
        			</tr>
        			<tr className = "col-md-9">
        				<td></td>
        			</tr>
        		</tbody>
        	</table>
        </div>


        <div className="col-md-12">
        	<h1>Function</h1>
        	<table>
        		<tbody>
        			<tr className = "col-md-3">
        				<td></td>
        			</tr>
        			<tr className = "col-md-9">
        				<td></td>
        			</tr>
        		</tbody>
        	</table>
        </div>
      </div>
    );
  }
}

export default Help;





