import React from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import Creator from './Creator.jsx';
import Classie from './tympanus/classie.js';
import DummyData from './tympanus/dummydata.js';
import Main from './tympanus/main.js';
import Modernizr from './tympanus/modernizr-custom.js';

const appState = name => (props, state) => ({show: name});

const states = ["content", "creator"];

// App component - represents the whole app
class App extends React.Component {
  constructor(){
    super();
    this.state = {show: "content"};
  }

  go(name){
    if(states.includes(name))
      this.setState(appState(name));
    var menuEl = document.getElementById('ml-menu');
    window.classie.remove(menuEl, 'menu--open');
  }

  getContent(){
    switch(this.state.show){
      case "content":
        return (<Content className="content" />);
      case "creator":
        return (<Creator className="content" go={this.go.bind(this)} />);
    }
  }

  componentDidMount(){
    Modernizr(window,document);
    Classie(window);
    window.dummyData = DummyData;
    Main(window);
    var menuEl = document.getElementById('ml-menu'),
        mlmenu = new MLMenu(menuEl, {
          backCtrl : false, // show back button
        });
    var openMenuCtrl = document.querySelector('.action--open'),
        closeMenuCtrl = document.querySelector('.action--close');
    openMenuCtrl.addEventListener('click', openMenu);
    closeMenuCtrl.addEventListener('click', closeMenu);
    
    function openMenu() {
      window.classie.add(menuEl, 'menu--open');
    }
    
    function closeMenu() {
      window.classie.remove(menuEl, 'menu--open');
    }
    
    var gridWrapper = document.querySelector('.content');
    
    function loadDummyData(ev, itemName) {
      ev.preventDefault();
      closeMenu();
      gridWrapper.innerHTML = '';
      window.classie.add(gridWrapper, 'content--loading');
      setTimeout(function() {
        window.classie.remove(gridWrapper, 'content--loading');
        gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
      }, 700);
    }
  }

  render() {
    return (
      <div>
        <div className="tympanus-container">
          <header className="bp-header cf">
            <div className="bp-header__main">
              <nav className="bp-nav" />
            </div>
          </header>
          <button className="action action--open" aria-label="Open Menu"><span className="icon icon--menu"></span></button>
          <Navbar go={this.go.bind(this)} />
          { this.getContent() }
        </div>
      </div>
    );
  }
}

export default App;