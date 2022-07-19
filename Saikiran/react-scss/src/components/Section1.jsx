import React from 'react'
import img1 from "../images/women image.png";
import "../styles/styles.css";

const Section = () => {
  return (
		<div className="hero">
			<div className="hero__container">
				<div className="hero__container--left">
					<h1>Your Patients Are On The Web, You Should Be Too.</h1>
					<p>
						Modernize your practice with cutting edge e-commerce technology,
						exclusively through Z Suite.
					</p>
					<button className="hero__container--btn">
						<a href="#">Try it out</a>
					</button>
				</div>
				<div className="hero__container--right">
					<img
						src={img1}
						alt="alien"
						className="'hero__container--img"
						height="500px"
					/>
				</div>
			</div>
		</div>
	);
}

export default Section