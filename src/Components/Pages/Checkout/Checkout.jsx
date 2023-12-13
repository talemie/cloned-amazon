import React, { useEffect } from "react";
import "./checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider/StateProvider";
function Checkout() {
	const [{user, basket }, dispatch] = useStateValue();
// to scroll the page to the top when mounted
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<h3>Hello { !user?'Guest':user.email}</h3>
				<h2 className="checkout__title">Your Shopping Basket</h2>
				{basket.map((item,i) => (
					<CheckoutProduct key={i} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} quantity={item.quantity} />
				))}
				
			</div>
			<div className="checkout__right">
				<Subtotal/>
			</div>
		</div>
	);
}

export default Checkout;
