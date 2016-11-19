import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';

import App from '../imports/ui/App.jsx';
import './main.html';


Meteor.startup(() => {
	  render(<App />, document.getElementById('render-target'));
});

