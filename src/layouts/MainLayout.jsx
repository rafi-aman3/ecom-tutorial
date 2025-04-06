import React from "react";
import { Outlet } from "react-router";

const MainLayout = ({ children }) => {
	return (
		<>
			<div>Navbar</div>
			{children}
			<div>Footer</div>
		</>
	);
};

export default MainLayout;
