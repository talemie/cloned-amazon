import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketSize, getBasketTotal } from "../../StateProvider/reducer";
function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	const navigate = useNavigate();
	// calculating basket size
	
	
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal({getBasketSize(basket)}
							{getBasketSize(basket) == 1 ? " item" : " items"}):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" name="" id="" />
							This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
