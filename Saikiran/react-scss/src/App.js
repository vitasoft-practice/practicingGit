import React from "react";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./styles/styles.css";
//import YourCare from "./images/yourcare.svg";
//import Checkmark from "./images/checkmark.svg";
import Section4 from "./components/Section4";
const App = () => {
	return (
		<>
			<Nav />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<div className="row2">
				<div className="col">
					<div>
						<p>60%</p>
						<h6>
							improvement in patient retention
							<br /> by offering programs.{" "}
						</h6>
					</div>
				</div>
				<div class="border"></div>
				<div className="col">
					<div>
						<p>8h+</p>
						<h6>working hours saved per week </h6>
					</div>
				</div>
				<div class="border"></div>
				<div className="col">
					<div>
						<p>50%</p>
						<h6>less in cost to acquire patient</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
