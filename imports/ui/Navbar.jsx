import React from 'react';
import {logout} from '../api/accounts';

const MenuItemLink = (props) => {
  return(
    <li className="menu__item"><a className="menu__link" onClick={props.action} href="#">{props.caption}</a></li>
  );
}

const SubMenuLink = (props) => {
  return(
    <li className="menu__item"><a className="menu__link" data-submenu={props.submenu} href="#">{props.caption}</a></li>
  );
}

const Menu = (props) => {
  return(
    <ul data-menu={props.name} className="menu__level">
      {
        props.items.filter(x=>x!==undefined).map((x,i)=>
          x[0]=="submenu"?
            <SubMenuLink key={i} submenu={x[2]} caption={x[1]} />
          :
            <MenuItemLink key={i} caption={x[1]} action={x[2]} />
        )
      }
    </ul>
  );
}

const taskCreate = go => () => {
  go("creator");
}

const home = go => () => {
  go("content");
}

const cordovaToggle = () => {
  if(Meteor.isCordova){
    let plugin = cordova.plugins.backgroundMode;
    plugin.setEnabled(!plugin.isEnabled());
  }
}

const nop = () => {};

class Navbar extends React.Component {
  render(){
  	return(
	    <nav id="ml-menu" className="menu">
          <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button>
          <div className="menu__wrap">
            <Menu name="main" items={[
              ["link", "Dashboard", home(this.props.go)],
              ["submenu", "Actions", "submenu-1"],
              ["link", "Settings", nop],
              ["submenu", "Info", "submenu-2"],
              ["link", "Logout", logout],
            ]} />
            <Menu name="submenu-1" items={[
              ["link", "Create a new task", taskCreate(this.props.go)],
              Meteor.isCordova ? ["link", "Toggle availability", cordovaToggle] : undefined,
            ]} />
            <Menu name="submenu-2" items={[
              ["link", "Help", nop],
              ["link", "About", nop],
            ]} />
          </div>
        </nav>
	 );
  }
}

export default Navbar;