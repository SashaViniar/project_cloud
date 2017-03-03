import React from 'react';
import RegisterUIWrapper from './RegisterUIWrapper.jsx';

// Register component - represents the whole app
class Register extends React.Component {
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
					<h4 className="light-font">Register:</h4>
				</div>
				<div className="row">
						<div className="row vcentr">
							<div className="col-md-4"></div>
							<div className="col-md-4 dashed-border">
								<div className="row" style={{"height":"1em"}}></div>
								<RegisterUIWrapper/>
							</div>
							<div className="col-md-4"></div>
						</div>
					<div className="col-md-2 col-xs-1"></div>
				</div>
				<div className="row" style={{"height":"1em"}}></div>
			</div>
		);
	}
}
				

export default Register;