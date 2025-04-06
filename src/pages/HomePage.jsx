import React from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
	return (
		<MainLayout>
			<h1>Home Page</h1>
			<button className='btn btn-success'>Click Me</button>
		</MainLayout>
	);
};

export default HomePage;
