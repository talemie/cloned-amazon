import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Login from "./Components/Pages/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./CommonResources/firebase";
import ProductDetail from "./Components/Product/ProductDetail";
import Payment from "./Components/Pages/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./Components/Footer/Footer";
import Orders from "./Components/Pages/Orders/Orders";
const promise = loadStripe(
	"pk_test_51OMdeNBe0eTpj3WPSUJaTkOU10EeVxSlNGjQc1mNyIre5cB8hmBneyCDn0VRDHmFEQd39HRu3dhgJRnkMC3JAogH00hXMEJlt6"
);

function App() {
	const [{ user }, dispatch] = useStateValue();
	// checking the user login status
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// console.log('Authuser:',authUser.email);
				// the user is just logged in/the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		
	}, []);
	// to scroll the page to the top when mounted
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/payment"
					element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />
							</Elements>
							<Footer />
						</>
					}
				/>
				<Route
					path="checkout"
					element={
						<>
							<Header />
							<Checkout />
							<Footer />
						</>
					}
				/>
				<Route
					path="orders"
					element={
						<>
							<Header />
							<Orders />
							<Footer />
						</>
					}
				/>
				<Route
					path="productdetail"
					element={
						<>
							<Header />
							<ProductDetail />
							<Footer />
						</>
					}
				/>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
							<Footer />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
