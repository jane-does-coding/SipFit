import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Featured from "./Featured";
import Carousel from "./Carousel";
import Info from "./Info";
import Insights from "./Insights";
import Footer from "./Footer";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<Carousel />
			<Footer />
		</div>
	);
};

export default LandingPage;
