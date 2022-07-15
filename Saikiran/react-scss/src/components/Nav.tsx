import React from 'react'
import "../styles/styles.css"

const Nav:React.FC = () => {
  return (
		<nav className="navbar">
			<a href="/" className="navbar__logo">
				WellProz
			</a>
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
}

export default Nav