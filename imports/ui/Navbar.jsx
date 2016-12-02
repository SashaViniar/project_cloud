import React from 'react';
class Navbar extends React.Component {
  render(){
  	return(
	    <nav id="ml-menu" className="menu">
          <button className="action action--close" aria-label="Close Menu"><span className="icon icon--cross"></span></button>
          <div className="menu__wrap">
            <ul data-menu="main" className="menu__level">
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-1" href="#">Vegetables</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-2" href="#">Fruits</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-3" href="#">Grains</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-4" href="#">Mylk &amp; Drinks</a></li>
            </ul>
            <ul data-menu="submenu-1" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Stalk Vegetables</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Roots &amp; Seeds</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Cabbages</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Salad Greens</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Mushrooms</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-1-1" href="#">Sale %</a></li>
            </ul>
            <ul data-menu="submenu-1-1" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Fair Trade Roots</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Dried Veggies</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Our Brand</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Homemade</a></li>
            </ul>
            <ul data-menu="submenu-2" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Citrus Fruits</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Berries</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-2-1" href="#">Special Selection</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Tropical Fruits</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Melons</a></li>
            </ul>
            <ul data-menu="submenu-2-1" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Exotic Mixes</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Wild Pick</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Vitamin Boosters</a></li>
            </ul>
            <ul data-menu="submenu-3" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Buckwheat</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Millet</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Quinoa</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Wild Rice</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Durum Wheat</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-3-1" href="#">Promo Packs</a></li>
            </ul>
            <ul data-menu="submenu-3-1" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Starter Kit</a></li>
              <li className="menu__item"><a className="menu__link" href="#">The Essential 8</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Bolivian Secrets</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Flour Packs</a></li>
            </ul>
            <ul data-menu="submenu-4" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Grain Mylks</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Seed Mylks</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Nut Mylks</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Nutri Drinks</a></li>
              <li className="menu__item"><a className="menu__link" data-submenu="submenu-4-1" href="#">Selection</a></li>
            </ul>
            <ul data-menu="submenu-4-1" className="menu__level">
              <li className="menu__item"><a className="menu__link" href="#">Nut Mylk Packs</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Amino Acid Heaven</a></li>
              <li className="menu__item"><a className="menu__link" href="#">Allergy Free</a></li>
            </ul>
          </div>
        </nav>
	 );
  }
}

export default Navbar;