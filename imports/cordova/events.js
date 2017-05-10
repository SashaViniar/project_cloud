// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//         app.pluginInitialize();
//         socket.init();
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     },
//     // Initialize plugin
//     pluginInitialize: function() {
//         var silentBtn = document.getElementById('silent'),
//             modeBtn   = document.getElementById('mode'),
//             plugin    = cordova.plugins.backgroundMode;

//         plugin.setDefaults({ color: 'F14F4D' });
//         plugin.overrideBackButton();

//         plugin.on('activate', app.onModeActivated);
//         plugin.on('deactivate', app.onModeDeactivated);
//         plugin.on('enable', app.onModeEnabled);
//         plugin.on('disable', app.onModeDisabled);

//         modeBtn.onclick = app.onModeButtonClicked;

//         if (device.platform == 'Android') {
//             silentBtn.onclick = app.onSilentButtonClicked;
//         } else {
//             app.onSilentButtonClicked();
//         }
//     },
//     // Toggle the silent mode
//     onSilentButtonClicked: function() {
//         var plugin   = cordova.plugins.backgroundMode,
//             btn      = document.getElementById('silent'),
//             isSilent = !plugin.getDefaults().silent;

//         app.setButtonClass(btn, isSilent);
//         plugin.setDefaults({ silent: isSilent });
//     },
//     // Enable or disable the backgroud mode
//     onModeButtonClicked: function() {
//         var plugin = cordova.plugins.backgroundMode;
//         plugin.setEnabled(!plugin.isEnabled());
//     },
//     // Update CSS classes
    
//     // Toggle 'active' CSS class and return new status
//     setButtonClass: function(el, setActive) {
//         if (setActive) {
//             el.className += ' active';
//         } else {
//             el.className = el.className.replace(' active', '');
//         }
//     },
//     // To update the badge in intervals
//     timer: null,
//     // Update badge once mode gets activated
    
// };
if(Meteor.isCordova){
import worker from '../core/worker';
const getInfo = chrome.system.cpu.getInfo;

var timer;
var plugin;

  plugin = cordova.plugins.backgroundMode; 

const onModeActivated = () => {
  var counter = 0;
  let usage = 0;
  plugin.disableWebViewOptimizations();

  timer = setInterval(function () {
    counter++;

    console.log('Running since ' + counter + ' sec');
    // socket.doSend('Running since ' + counter + ' sec');

    // cordova.plugins.notification.badge.set(counter);

    
      getInfo(cpuInfo => {
        let sw = usage < 0.7;
        usage = cpuInfo.processors.map(x=>x.usage.idle/x.usage.total).reduce((a,b)=>a+b)/cpuInfo.processors.length;
        sw = sw ^ (usage<0.7);
        if(sw) counter = 0;
        if(usage < 0.7){
          worker.start();
          plugin.configure({
            text: `Running since ${counter} sec, cpu: ${Math.round(usage*100)}%`
          });
        } else {
          worker.pause();
          plugin.configure({
            text: `Idle since ${counter} sec, cpu: ${Math.round(usage*100)}%`
          });
        }
      });

      if (navigator.vibrate) {
        navigator.vibrate(300);
      }
    


  }, 1000);
}
// Reset badge once deactivated
const onModeDeactivated = () => {
  //cordova.plugins.notification.badge.clear();
  clearInterval(timer);
}

const onModeEnabled = () => {
  //var btn = document.getElementById('mode');
  //app.setButtonClass(btn, true);
  //cordova.plugins.notification.badge.registerPermission();
}

const onModeDisabled = () => {
  //var btn = document.getElementById('mode');
  //app.setButtonClass(btn, false);
}

export { onModeDisabled, onModeEnabled, onModeDeactivated, onModeActivated };
}