import React from 'react'
import './Navbar.css'

import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="navbar">

            {/* Logo */}
            <Link to="/">
                <img 
                    className="navbar__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""/>
            </Link>

            {/* SEARCH  */}
            <div className="navbar__search">
                <input className="navbar__searchInput" type="text"/>
                <SearchIcon className="navbar__searchIcon"/>
            </div>
           
            {/* LINk */}
            <div className="navbar__nav">
                {/* 1 link */}
                <Link to="/login" className="navbar__link" >
                    <div className="navbar__option">
                            <span className="navbar__optionLineOne">
                                Hello 
                            </span>
                            <span className="navbar__optionLineTwo">
                                Sign IN
                            </span>
                    </div>
                </Link>
                  
                {/* 2 link */}
                <Link to="/login" className="navbar__link">
                    <div className="navbar__option">
                            <span className="navbar__optionLineOne">
                                Return 
                            </span>
                            <span className="navbar__optionLineTwo">
                                Order
                            </span>
                    </div>
                </Link>
               
                {/* 3 link */}
                <Link to="/login" className="navbar__link">
                    <div className="navbar__option">
                            <span className="navbar__optionLineOne">
                                Your  
                            </span>
                            <span className="navbar__optionLineTwo">
                            Prime
                            </span>
                    </div>
                </Link>
                
                {/* CART */}

                <Link to="/checkout">
                    <div className="navbar__optionBasket">
                        <ShoppingCartOutlinedIcon/>
                        <span className="navbar__optionLineTwo navbar__basketCount"> 0</span>
                    </div>
                </Link>
            </div>
           


        </div>
    )
}

export default Navbar
