import React, { useState } from "react";
import "./checkoutProduct.css";
import { useStateValue } from "../../../StateProvider/StateProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function CheckoutProduct({ id, title, image, price, rating,quantity}) {
	const [{ basket }, dispatch] = useStateValue();
	

	// remove from basket function
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	// plus/minus product functionality

	const addMore = () => {
		dispatch({
			type: "DUPLICATE_PRODUCT",
			id: id,
		});
		
	};
	const remove = () => {
		dispatch({
			type: "MINUS_PRODUCT",
			id: id,
		});
		
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((item,i) => (
							<p key={i}>💛</p>
						))}
				</div>
				<div className="product__quantity">
					Qty. <span>{quantity}</span> <AddIcon onClick={addMore} />
					<RemoveIcon onClick={remove} />
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
