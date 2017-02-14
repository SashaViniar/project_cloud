import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends React.Component {
    render() {
        return (
            <div>
              <div className="col-xs-12" style={{"height":"50px"}}></div>
			  <div className="row centr">
			    <div className="row">
			      <img src="https://placeholdit.imgix.net/~text?txtsize=66&txt=Logo&w=200&h=200" alt="" />
			    </div>
			    <div className="row loginHeading">
			      <h1>Site name</h1>
			    </div>
			  </div>
			  <div className="row">
			    <div className="col-md-2"></div>
			    <AccountsUIWrapper/>
			    <div className="col-md-2"></div>
			  </div>
			</div>
        );
    }
}
                

export default App;