import React from "react";
import { Link } from "react-router-dom";

function SingleDeal({ imgx1, deal, dealTitle }) {
	return (
		<div className="product__dealsWrapper ">
			<h5>{dealTitle}</h5>
			<div className="single__product__deals">
				<div className="single__product__dealsRow">
					<div className="single__deal">
						<img src={imgx1} alt="" />
						<p>
							<span>{deal}% off</span> Deal
						</p>
					</div>
				</div>
			</div>
			<Link to="#" className="deals__link">
				See all deals
			</Link>
		</div>
	);
}

export default SingleDeal;
