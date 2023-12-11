import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Product({ id, title, image, price, rating, isSmall }) {
	const [{ basket }, dispatch] = useStateValue()
	const[isAdded,setIsAdded]=useState(false)
	console.log('This is the basket',basket);
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				price: price,
				image:image,
				rating:rating
			}
		})
// showing the product added msg
		setIsAdded(true);
		setTimeout(() => {
			setIsAdded(false);
		}, 1000);
}	
	return (
		<div className={!isSmall ? "product" : "small__product"}>
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((item, i) => (
							<p key={i}>💛</p>
						))}
				</div>
			</div>
			<div>
				<img src={image} alt="" />
			</div>
			<div>
				<button onClick={addToBasket}>Add to Cart</button>
				{isAdded && (
					<h5 className="product__alert">
						<em>Product added!!</em>
					</h5>
				)}
			</div>
		</div>
	);
}

export default Product;
