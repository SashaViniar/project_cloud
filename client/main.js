import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Reset from '../imports/ui/Reset.jsx';
import Register from '../imports/ui/Register.jsx';
import './main.html';
import BackgroundEvents from '../imports/cordova/events.js';
import { CalcCore } from '../imports/core/CalcCore';

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

FlowRouter.route('/reset', {
  action() {
    // $('body').css('background-image','url(/bg.jpg)');
    $('body').css('background','#1c1d22');
    render(<Reset />, document.getElementById('render-target'));
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

if(Meteor.isCordova){
  Meteor.startup(() => {
    let plugin = cordova.plugins.backgroundMode;
    plugin.setDefaults({ color: 'F14F4D' });
    plugin.overrideBackButton();

    plugin.on('activate', BackgroundEvents.onModeActivated);
    plugin.on('deactivate', BackgroundEvents.onModeDeactivated);
    plugin.on('enable', BackgroundEvents.onModeEnabled);
    plugin.on('disable', BackgroundEvents.onModeDisabled);

    plugin.setEnabled(true);
    
    cordova.plugins.autoStart.enable();
  });
}

// Client side calc - debug mode
// TODO: move to imports/cordova/events.js
// TODO: make interval configurable
if(Meteor.isClient){
  Meteor.startup(() => {
    const taskHandler = (err,task) => {
      try {
        // console.log(task);
        if(task == 0) {
          console.log("No task available");
        } else {
          pause();
          // console.log(`Task algorithm: ${task.algorithm}`);
          const data = task.data;
          const delta = Math.floor((task.expires - (new Date()))*0.8); // magic 0.8 - time saving for lags
          let progress = 0;
          const progressCallback = ()=>{progress++;};
          const reporter = () => {
            if(progress > 0) {
              Meteor.call("tasks.report", task.id, progress);
              progress = 0;
            } else {
              clearInterval(innerTimer);
              throw "Task too complex for me";
            }
          };
          const innerTimer = setInterval(reporter, delta);
          // console.log(data);
          const result = CalcCore(task.algorithm, data, progressCallback);
          if(result.type=="error")
            console.log(`Error: ${result.value}`);
          else console.log(result.value);
          // console.log(result);
          Meteor.call("tasks.resolve", task.id, result.value);
          clearInterval(innerTimer);
          start();
        }
      } catch (e) {
        start();
      }
    }

    const worker = () => {
      console.log("I'm working");
      Meteor.call("tasks.get", taskHandler);
    };

    let timer;
    const start = () => { timer = setInterval(worker, 10000); };
    const pause = () => clearInterval(timer);

    start();
  });
}