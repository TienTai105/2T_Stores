import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useCart } from "../../Pages/Cart/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItemCount } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="header">
      <a href="#" className="logo">
        2T Store<span>.</span>
      </a>
      <nav className="navbar">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Button>
            <Link to="/listing">Shop</Link>
            <ArrowDropDownOutlinedIcon />
          </Button>
          {showDropdown && (
            <div className="dropdown-content">
              <Button>
                <Link to="/newproduct">New Products</Link>
              </Button>
              <Button>
                <Link to="/bestseller">Best Sellers</Link>
              </Button>
            </div>
          )}
        </div>
        <Button>
          <Link to="/About">About</Link>
        </Button>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
        <Button>
          <Link to="/blog">Blog</Link>
        </Button>

        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
        <Button>
          <Link>Sport</Link>
          <ArrowDropDownOutlinedIcon />
          {showDropdown && (
            <div className="dropdown-content">
              <Button>
                <Link to="/running">Running</Link>
              </Button>
              <Button>
                <Link to="/football">Football</Link>
              </Button>
              <Button>
                <Link to="/basketball">Basketball</Link>
              </Button>
              <Button>
                <Link to="/gym">Gym</Link>
              </Button>
              <Button>
                <Link to="/tennis">Tennis</Link>
              </Button>
              <Button>
                <Link to="/yoga">Yoga</Link>
              </Button>
              <Button>
                <Link to="/skate">Skate</Link>
              </Button>
            </div>
          )}
        </Button>
        </div>
      </nav>
      <div className="icons">
        <div className="search-box">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
        <FavoriteBorderOutlinedIcon className="icon" />
        <div className="cart">
          <Link to="/cart">
            <ShoppingBagOutlinedIcon className="icon" />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
        <div className="user_icon">
          <Link to="/login"><PermIdentityOutlinedIcon className="icon" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
