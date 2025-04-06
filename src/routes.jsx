import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUSPage from "./pages/AboutUSPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ComplainPage from "./pages/ComplainPage";
import ContactUsPage from "./pages/ContactUsPage";
import VerifyOTPPage from "./pages/VerifyOTPPage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path='about-us' element={<AboutUSPage />} />
			<Route path='privacy-policy' element={<PrivacyPolicyPage />} />
			<Route path='refund-policy' element={<RefundPolicyPage />} />
			<Route path='terms-and-condition' element={<TermsAndConditionsPage />} />
			<Route path='complain' element={<ComplainPage />} />
			<Route path='contact-us' element={<ContactUsPage />} />
			<Route path='login' element={<LoginPage />} />
			<Route path='verify-otp' element={<VerifyOTPPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
