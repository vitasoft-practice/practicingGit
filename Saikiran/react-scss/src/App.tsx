import React from 'react';
import Nav from './components/Nav';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

import './styles/styles.css';
//import mobile from './images/vector.svg';
import storeItems from "./data/items.json";
import { StoreItem } from './components/StoreItem';
const App:React.FC=()=>{
  return (
		<>
			<Nav />
			<Section1 />
			<Section2 />
			<div className="design">
				<div className="design__container">
					<h1 className="design__container--top">
						Designed for
						<span className="design__container--top-span1"> patients. </span>
						Built for
						<span className="design__container--top-span2"> providers.</span>
					</h1>
				</div>
			  <div className="design__card">
				  {/*{storeItems.map(item => {
					  <StoreItem id={item.id} img={item.ImgUrl} name={item.name} cpation={item.caption} />
				  })}*/}
			  </div>
			  </div>
		</>
	);
}

export default App;
