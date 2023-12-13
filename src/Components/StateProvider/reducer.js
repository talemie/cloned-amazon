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
			return {
				...state,
				basket: [...state.basket, action.item],
				quantity:state.quantity+1
			};
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
		case "DUPLICATE_PRODUCT":
			// if (state.) {
				
			// }
			return {
				...state,
				quantity: state.quantity + 1,
			};
		case "MINUS_PRODUCT":
			return {
				...state,
				quantity: state.quantity - 1,
			};
		default:
			return state;
	}
};
export default reducer;

// create a function to calculate the basket price
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price*item.quantity + amount, 0);
