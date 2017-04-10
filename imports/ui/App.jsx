import React from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import Classie from './tympanus/classie.js';
import DummyData from './tympanus/dummydata.js';
import Main from './tympanus/main.js';
import Modernizr from './tympanus/modernizr-custom.js';

// App component - represents the whole app
class App extends React.Component {
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
              <div className="container">
                <header className="bp-header cf">
                  <div className="bp-header__main">
                    <nav className="bp-nav" />
                  </div>
                </header>
                <button className="action action--open" aria-label="Open Menu"><span className="icon icon--menu"></span></button>
                <Navbar />
                <Content className="content" />
              </div>
            </div>
        );
    }
}

export default App;