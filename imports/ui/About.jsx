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
        <div className="col-md-12">
        	<div className="col-md-4">
        		<div className="with-img">
        			 <img  width = "100%" src="mnxoid.jpg" alt=""/>
        		</div>
        		<div className="row">
        			<div className="text-with-description">
        				
        			</div>
        		</div>
        		<div className="row">
        			<div className="link-social"></div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<div className="with-img">
        			<img  width = "100%" src="lilia.jpg" alt=""/>
        		</div>
        		<div className="row">
        			<div className="text-with-description">
        				MATYASHCHUK LILIYA
        			</div>
        		</div>
        		<div className="row">
        			<div className="link-social"></div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<img  width = "100%" src="sasha.jpg" alt=""/>
        		<div className="row">
        			<div className="text-with-description">VINIAR OLEKSANDR</div>
        		</div>
        		<div className="row">
        			<div className="link-social"></div>
        		</div>
        	</div>
        </div>
        
      </div>
    );
  }
}

export default About;





