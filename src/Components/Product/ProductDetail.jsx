import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import Product from "./Product";
import "./productDetail.css";

function ProductDetail() {
	const [{ basket, product }, dispatch] = useStateValue();
	const [productFetched, setProductFetched] = useState([]);
	useEffect(() => {
		// console.log("Test Product", product);
		setProductFetched(product);
		return () => {
			dispatch({
				type: "REMOVE_PRODUCT",
			});
		};
	}, []);

	// to scroll the page to the top when mounted
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// console.log("TEST BASKET", product);
	// console.log("Fetched product", productFetched);
	return (
		<div className="addional_view">
			{/* <h1 className="title">Product detail</h1> */}
			<div className="product_detail">
				{productFetched.map((item, i) => (
					<Product key={i}
						className="pro_fetched"
						id={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
						rating={item.rating}
						quantity={item.quantity}
					/>
				))}
				<div className="loading_detail">
					<img
						src="https://m.media-amazon.com/images/G/01/marketing/prime/new_prime_logo_RGB_blue._CB426090081_.png"
						alt=""
					/>
					<div className="prime__note">
						<p>
							Enjoy fast,free delivery,exclusive deals,and award-winning
							movies&TV shows with prime
						</p>
						<p>
							<span>Try Prime</span> and start saving today with fast,free
							delivery
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
