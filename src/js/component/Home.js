import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () =>{
	return (
		<div className = "counter">
			<div className = "clock"></div>
			<div className = "hundred-thounsand">0</div>
			<div className = "ten-thounsand">0</div>
			<div className = "thounsand">0</div>
			<div className = "hundred">0</div>
			<div className = "ten">0</div>
			<div className = "one">0</div>
		</div>
	)
}

