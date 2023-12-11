import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import Product from "./Product";
import './productDetail.css'

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

	// console.log("TEST BASKET", product);
	// console.log("Fetched product", productFetched);
	return (
		<div className="addional_view">
            <h1 className="title">Product detail</h1>
            <div className="product_detail">
                {productFetched.map((item, i) => (
				<Product className='pro_fetched'
					id={item.id}
					title={item.title}
					price={item.price}
					image={item.image}
					rating={item.rating}
				/>
                ))}
                <div className="loading_detail"><h2>Project detail loading...</h2></div>
            </div>
			
		</div>
	);
}

export default ProductDetail;
