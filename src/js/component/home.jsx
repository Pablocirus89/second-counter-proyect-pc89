import React from "react";
import SecondCounter from "./secondCounter";
import Footer from "./footer";


const Home = ({number, number2, number3, number4, number5, number6}) => {
	return (
		<div className="text-center pt-5">
			<SecondCounter number={number} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6}/>
			<Footer />
		</div>
		
	);
};

export default Home;
