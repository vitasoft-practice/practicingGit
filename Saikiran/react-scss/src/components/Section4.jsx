import React from 'react'
import YourCare from "../images/yourcare.svg";
import Checkmark from "../images/checkmark.svg";
const Section4 = () => {
  return (
		<div className="row1">
			<div className="col">
				<img src={YourCare} width="639px" height="797px" alt="" />
			</div>
			<div className="col">
				<div className="yourcare">
					<h1>Create a care experience your patients love </h1>
					<p>
						For the first time ever, you can now offer clinical lab testing,
						<br />
						practitioner grade supplements, your own services and more with
						<br />
						shipping, fulfillment, and logistics all done-for-you in a single
						<br />
						platform.
					</p>
					<h4>
						<img src={Checkmark} alt="" /> Precision Wellness Testing
					</h4>
					<p>
						Help your patients get to the root cause of their health issue by
						<br />
						offering a vast menu of specialty wellness lab testing. Easily
						<br />
						integrate custom Vibrant America panels into your store for a truly
						<br /> personalized experience.
					</p>
					<h4>
						<img src={Checkmark} alt="" />
						Smart Dispensary
					</h4>
					<p id="bold">
						We have already done the heavy lifting to get you access to the best
						<br /> brands and dispensaries. Choose from thousands of
						Professional-
						<br />
						grade supplements you love. Dispense virtual or In-Office!
					</p>
					<h4>
						<img src={Checkmark} alt="" />
						Create Programs with Services
					</h4>
					<p>
						Start creating programs that include lab tests, supplements, and
						your own professional services to deliver the best patient
						<br />
						experience.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Section4