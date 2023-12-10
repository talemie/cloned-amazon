import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider";
function Product({ id, title, image, price, rating }) {
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

		setIsAdded(true);
		setTimeout(() => {
			setIsAdded(false);
		}, 2000);
}	
	return (
		<div key={id} className="product">
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
				{isAdded && <h5 className="product__alert">Product added!!</h5>}
			</div>
		</div>
	);
}

export default Product;
