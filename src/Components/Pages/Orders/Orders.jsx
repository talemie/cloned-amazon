import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { db } from "../../../CommonResources/firebase";
import Order from "../Order/Order";
import './orders.css'

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	// to scroll the page to the top when mounted
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<div className="orders">
			<h1>Your Orders</h1>
			{!user && <h2 className="mx-5">Sign in to see your orders</h2>}
			<div className="orders__order">
				{orders?.map((order,i) => (
					<Order key={i} order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
