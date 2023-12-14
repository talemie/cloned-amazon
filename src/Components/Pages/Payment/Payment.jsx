import React, { useEffect, useState } from "react";
import "./payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketSize, getBasketTotal } from "../../StateProvider/reducer";
import axios from '../../../CommonResources/axios.js'


function Payment() {
	const [{ basket, user }] = useStateValue()
	const stripe = useStripe()
	const elements = useElements()
	const navigate = useNavigate();
	
	const [error, setError] = useState(null)
	const [disabled, setDisabled] = useState(true)
	
	const [succeeded, setSucceeded] = useState(false)
	const [processing, setProcessing] = useState('')

	const[clientSecret,setClicentSecret]=useState(true)
	useEffect(() => {
		// generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				// Stripe expects the total in currencies subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`
			})
			setClicentSecret(response.data.clientSecret)
		}
		getClientSecret();
	},[basket])

	const handleSubmit = async (event) => {
		event.preventDefault()
		setProcessing(true)

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card:elements.getElement(CardElement)
			}
		}).then(({ paymentIntent }) => {
			// paymentIntent= payment confirmation
			setSucceeded(true)
			setError(null)
			setProcessing(false)

			navigate('/orders')
		}).catch((error)=>console.log(error.message))
	}

	const handleChange = (event) => {
		setDisabled(event.empty)
		setError(event.error?event.error.message:"")
	}

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout {<Link to={"/checkout"}>({getBasketSize(basket)} items) </Link>}
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.emai}</p>
						<p>123 React Ave</p>
						<p>Chicago, IL</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__items">
						{basket?.map((item, i) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
								quantity={item.quantity}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value} </h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
