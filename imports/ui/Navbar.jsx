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
        props.items.map((x,i)=>
          x[0]=="submenu"?
            <SubMenuLink key={i} submenu={x[2]} caption={x[1]} />
          :
            <MenuItemLink key={i} caption={x[1]} action={x[2]} />
        )
      }
    </ul>
  );
}



class Navbar extends React.Component {
  render(){
  	return(
	    <nav id="ml-menu" className="menu">
          <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button>
          <div className="menu__wrap">
            <Menu name="main" items={[
              ["submenu", "Vegetables", "submenu-1"],
              ["submenu", "Fruits", "submenu-2"],
              ["submenu", "Grains", "submenu-3"],
              ["submenu", "Mylk & Drinks", "submenu-4"],
              ["link", "Logout", logout]
            ]} />
            <Menu name="submenu-1" items={[
              ["link", "Stalk Vegetables"],
              ["link", "Roots & Seeds"],
              ["link", "Cabbages"],
              ["link", "Salad Greens"],
              ["link", "Mushrooms"],
              ["submenu", "Sale %", "submenu-1-1"]
            ]} />
            <Menu name="submenu-1-1" items={[
              ["link", "Fair Trade Roots"],
              ["link", "Dried Veggies"],
              ["link", "Our Brand"],
              ["link", "Homemade"]
            ]} />
            <Menu name="submenu-2" items={[
              ["link", "Citrus Fruits"],
              ["link", "Berries"],
              ["submenu", "Special Selection", "submenu-2-1"],
              ["link", "Tropical Fruits"],
              ["link", "Melons"]
            ]} />
            <Menu name="submenu-2-1" items={[
              ["link", "Exotic Mixes"],
              ["link", "Wild Pick"],
              ["link", "Vitamin Boosters"]
            ]} />
            <Menu name="submenu-3" items={[
              ["link", "Buckwheat"],
              ["link", "Millet"],
              ["link", "Quinoa"],
              ["link", "Wild Rice"],
              ["link", "Durum Wheat"],
              ["submenu", "Promo Packs", "submenu-3-1"]
            ]} />
            <Menu name="submenu-3-1" items={[
              ["link", "Starter Kit"],
              ["link", "The Essential 8"],
              ["link", "Bolivian Secrets"],
              ["link", "Flour Packs"]
            ]} />
            <Menu name="submenu-4" items={[
              ["link", "Grain Mylks"],
              ["link", "Seed Mylks"],
              ["link", "Nut Mylks"],
              ["link", "Nutri Drinks"],
              ["submenu", "Selection", "submenu-4-1"]
            ]} />
            <Menu name="submenu-4-1" items={[
              ["link", "Nut Mylk Packs"],
              ["link", "Amino Acid Heaven"],
              ["link", "Allergy Free"]
            ]} />
          </div>
        </nav>
	 );
  }
}

export default Navbar;