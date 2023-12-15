import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
function Product({ id, title, image, price, rating, isSmall, quantity }) {
	const [{ basket }, dispatch] = useStateValue();
	const [isAdded, setIsAdded] = useState(false);
	const navigate = useNavigate();
	console.log("This is the basket", basket);
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				price: price,
				image: image,
				rating: rating,
				quantity: quantity,
			},
		});
		// showing the product added msg
		setIsAdded(true);
		setTimeout(() => {
			setIsAdded(false);
		}, 300);
	};
	// show product detail function
	const showDetail = () => {
		navigate("/productdetail");
		dispatch({
			type: "SAVE_PRODUCT",
			item: {
				id: id,
				title: title,
				price: price,
				image: image,
				rating: rating,
				quantity: quantity,
			},
		});
	};
	return (
		<div
			className={!isSmall ? "product" : "small__product"}
			onClick={isSmall && showDetail}
		>
			{!isSmall && (
				<div className="product__info">
					<p>{title}</p>

					<div className="product__rating">
						{Array(rating)
							.fill()
							.map((item, i) => (
								<p key={i}>💛</p>
							))}
					</div>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
				</div>
			)}

			<img src={image} alt="" />
			{!isSmall && <button onClick={addToBasket}>Add to Cart</button>}
		</div>
	);
}

export default Product;
