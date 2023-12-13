export const initialState = {
	basket: [],
	user: null,
	product: [],
	quantity: 0,
};

// reducer
const reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			const isInCart = state.basket.some((item) => item.id === action.item.id);
			if (isInCart) {
				// update existing item in cart
				return {
					...state,
					basket: state.basket.map((item) =>
						item.id === action.item.id
							? {
									...item,
									quantity: item.quantity + 1,
							  }
							: item
					),
				};
			}
			// add net item to cart
			return {
				...state,
				basket: [
					...state.basket,
					{
						...action.item,
						quantity: 1,
					},
				],
			};

		// old functionality
		// return {
		// 	...state,
		// 	basket: [...state.basket, action.item],

		// };
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove produce (id:${action.id} as its not in the basket`
				);
			}

			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SAVE_PRODUCT":
			return {
				...state,
				product: [...state.product, action.item],
			};
		case "REMOVE_PRODUCT":
			return {
				...state,
				product: [],
			};

		// add/minus product Qty feature
		case "PLUS_QUANTITY":
			// if (state.) {

			// }
			return {
				...state,
				basket: state.basket.map((item) =>
					item.id === action.id
						? {
								...item,
								quantity: item.quantity + 1,
						  }
						: item
				),
			};
		case "MINUS_QUANTITY":
			const item = state.basket.find((item) => item.id === action.id);
			if (item?.quantity===1) {
				// new quantity is 0,remove item from cart
				return {
					...state,
					basket: state.basket.filter(item=>item.id!==action.id)
				};
			}
		// decrement quantity
			return {
				...state,
				basket: state.basket.map(
					item => item.id === action.id ? {
						...item,
						quantity:item.quantity-1
					}:item
				)
			}
			
		default:
			return state;
	}
};
export default reducer;

// create a function to calculate the basket price
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
