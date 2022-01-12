import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
               
                
            </div>
        </div>
    )
}

export default Header
