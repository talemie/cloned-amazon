import React, { useState } from "react";
import "./checkoutProduct.css";
import { useStateValue } from "../../../StateProvider/StateProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function CheckoutProduct({
	id,
	title,
	image,
	price,
	rating,
	quantity,
	isPaying,
	hideButton,
}) {
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
			type: "PLUS_QUANTITY",
			id: id,
		});
	};
	const remove = () => {
		dispatch({
			type: "MINUS_QUANTITY",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<div className="checkoutProduct__imageWrapper">
				<img className="checkoutProduct__image" src={image} alt="" />
			</div>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((item, i) => (
							<p key={i}>💛</p>
						))}
				</div>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong> <br />
					<em>
						{quantity > 1 &&
							hideButton &&
							`(Qty: ${quantity}, Sub total: ${(price * quantity).toFixed(2)})`}
					</em>
				</p>
				{!hideButton && (
					<>
						<div className="product__quantity">
							<h5>
								(Qty: <span>{quantity}</span>,
								<span>Sub total: ${(price * quantity).toFixed(2)}</span>)
							</h5>
							<div className="add_minusIcons">
								<AddIcon onClick={addMore} className="qty__icons" />
								<RemoveIcon onClick={remove} className="qty__icons" />
							</div>
						</div>

						<button onClick={removeFromBasket}>Remove from Basket</button>
					</>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
