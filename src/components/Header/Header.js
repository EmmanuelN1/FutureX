import React from 'react';
import './Header.css'; 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from "../ContextApi/StateProvider"; 

function Header() {
    const [{basket}] = useStateValue();
    
    return (
        <div className="header">
             {/* Linking the image to th home page onClick */}
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="logo" />
                </Link>
                <div className="header__search">
                    <input className="header__searchInput" type="text"/>
                    <SearchIcon className="header__searchIcon" type="text" />
                </div>

                <div className="header__nav">
                    <Link to="/login">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Hello Guest    
                            </span>

                            <span className="header__optionLineTwo">
                                Sign In
                            </span>
                        </div>
                    </Link>

                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Return   
                        </span>

                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>

                    <div className="header__option">

                        <span className="header__optionLineOne">
                            Your   
                        </span>

                        <span className="header__optionLineTwo">
                            Prime 
                        </span>
                    </div>


                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon/>
                            {/* To update the zero in the react context-api */}
                                <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
                        </div>
                    </Link>
                </div>
        </div>

    )
}

export default Header;
     