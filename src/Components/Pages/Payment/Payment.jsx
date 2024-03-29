import React, { useEffect, useState } from "react";
import "./payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketSize, getBasketTotal } from "../../StateProvider/reducer";
import axios from '../../../CommonResources/axios.js'
import { db } from "../../../CommonResources/firebase.js";


function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
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
			try {
				const response = await axios({
					method: "GET",

					url: `/payments/create?total=${getBasketTotal(basket) * 100}`, // *100 -> b/c Stripe expects the total in currencies subunits
				});
			setClicentSecret(response.data.clientSecret)
			} catch (error) {
				console.log(error.message);
			}
			
		}
		getClientSecret();
	}, [basket])
	

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (!user) {
			
		}
		setProcessing(true)

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card:elements.getElement(CardElement)
			}
		}).then(({ paymentIntent }) => {
			// paymentIntent= payment confirmation

			// adding purchased product to firebase database
			db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
				basket: basket,
				amount: paymentIntent.amount/100,
				created:paymentIntent.created
			})


			setSucceeded(true)
			setError(null)
			setProcessing(false)

			navigate('/orders')
			dispatch({
				type: "EMPTY_BASKET",
			});

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
					Checkout
					{
						<Link to={"/checkout"}>
							({getBasketSize(basket)}
							{getBasketSize(basket) == 1 ? " item" : " items"})
						</Link>
					}
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
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
							<CheckoutProduct key={i}
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
								quantity={item.quantity}
								isPaying
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
									<span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
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
