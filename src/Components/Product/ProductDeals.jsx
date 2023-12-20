import React from "react";
import "./productDeals.css";
import { Link } from "react-router-dom";
function ProductDeals({ dealTitle, deal, imgx1,imgx2,imgx3,imgx4 }) {
	return (
		<div className="product__dealsWrapper ">
			<h5>{dealTitle}</h5>
			<div className="product__deals">
				<div className="product__dealsRow">
					<div className="deal">
						<img src={imgx1} alt="" />
						<p>
							<span>{deal}% off</span> Deal
						</p>
					</div>
					<div className="deal">
						<img src={imgx2} alt="" />
						<p>
							<span>{deal}% off</span> Deal
						</p>
					</div>
				</div>
				<div className="product__dealsRow">
					<div className="deal">
						<img src={imgx3} alt="" />
						<p>
							<span>{deal}% off</span> Deal
						</p>
					</div>
					<div className="deal">
						<img src={imgx4} alt="" />
						<p>
							<span>{deal}% off</span> Deal
						</p>
					</div>
				</div>
			</div>
			<Link to="#" className="deals__link">See all deals</Link>
		</div>
	);
}

export default ProductDeals;
