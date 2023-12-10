import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Login from "./Components/Pages/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./CommonResources/firebase";

function App() {
	const [{ user}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user is just logged in/the user was logged in
				dispatch({
					type: 'SET_USER',
					user:authUser
				})
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		})
	},[])
	return (
		<>
			<Routes>
				<Route exact path={"/login"} element={<Login />} />
				<Route exact path={"/checkout/login"} element={<Login />} />
				<Route
					path="checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
