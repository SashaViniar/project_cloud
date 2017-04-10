import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import resetPassword from '../imports/ui/resetPassword.jsx';
import Register from '../imports/ui/Register.jsx';
import './main.html';


FlowRouter.route('/', {
  action() {
    if(!Meteor.userId()) FlowRouter.go('/login');
  	$('body').css('background-image','none');
    $('body').css('background','#fff');
    render(<App />, document.getElementById('render-target'));
  }
});

FlowRouter.route('/login', {
  action() {
  	// $('body').css('background-image','url(/bg.jpg)');
  	$('body').css('background','#1c1d22');
    render(<Login />, document.getElementById('render-target'));
  }
});

FlowRouter.route('/resetPassword', {
  action() {
    // $('body').css('background-image','url(/bg.jpg)');
    $('body').css('background','#1c1d22');
    render(<resetRegister />, document.getElementById('render-target'));
  }
});

FlowRouter.route('/register', {
  action() {
    // $('body').css('background-image','url(/bg.jpg)');
    $('body').css('background','#1c1d22');
    render(<Register />, document.getElementById('render-target'));
  }
});

Meteor.startup(() => {
	  
});

