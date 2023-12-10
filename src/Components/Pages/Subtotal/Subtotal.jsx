import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	const getBasketTotal = (basket) => 
		basket?.reduce((amount, item) => item.price + amount, 0);
	function formatToCurrency(amount) {
		return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
	}
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal({basket.length} { basket.length==1?'item':'items'}):<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" name="" id="" />
							This order contains a gift
						</small>
					</div>
				)}
				descimalScale={2}
				value={getBasketTotal(basket).toFixed(2)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
