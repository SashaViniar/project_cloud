import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import './main.html';


FlowRouter.route('/', {
  action() {
  	$('body').css('background-image','none');
    render(<App />, document.getElementById('render-target'));
  }
});

FlowRouter.route('/beta', {
  action() {
  	$('body').css('background-image','url(/bg.jpg)');
    render(<Login />, document.getElementById('render-target'));
  }
});
Meteor.startup(() => {
	  // render(<App />, document.getElementById('render-target'));
});

