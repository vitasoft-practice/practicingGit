import React from "react";
import "../styles/styles.css";
import logo from "../images/Combined-Shape.png";
const Nav = () => {
	return (
		<nav className="navbar">
			<div>
				<img src={logo} className="navbar__image" />
				<a href="/" className="navbar__logo">
					WellProz
				</a>
			</div>
			<div className="navbar__bars">
				<i className="fas fa-bars"></i>
			</div>
			<div className="navbar__menu">
				<a href="" className="navbar__menu--links">
					SignIn
				</a>
				<a href="" className="navbar__menu--links" id="button">
					SignUp
				</a>
			</div>
		</nav>
	);
};

export default Nav;
