import React from "react"
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
    return (
        <div class="Header">
            { /*Amazon logo */ }
            <img src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" className="header-logo" />


            { /*input bar*/ }
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>
            </div>
            
            <div className="header-nav">
                <div className="header-option">
                    <span className="header_optionOne">Hello</span>
                    <span className="header_optionTwo">Sign In</span>
                </div>
                <div className="header-option">
                    <span className="header_optionOne">Returns</span>
                    <span className="header_optionTwo">& Orders</span>
                </div>
                <div className="header-option">
                    <span className="header_optionOne">Your</span>
                    <span className="header_optionTwo">Prime</span>
                </div>
            </div>

            <div className="header_basketIcon">
                <ShoppingBasketIcon/>
                <span className="header_basketIconCount">0</span>
            </div>
        </div>
    )
}

export default Header