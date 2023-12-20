import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../CommonResources/firebase";
import { getBasketSize } from "../StateProvider/reducer";
import SubHeader from "./SubHeader";
import SearchDropDown from "./SearchDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<>
			<div className="header">
				<Link to="/" className="header__itemsBorder">
					<img
						className="header__logo"
						src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt=""
					/>
				</Link>
				<div className="header__itemsBorder header__option">
					<span className="header__optionLineOne mx-4 px-1">
						Delivering to Chicago, 60607
					</span>
					<span className="header__optionLineTwo">
						<LocationOnIcon /> Update Location
					</span>
				</div>

				<div className="header__search">
					<SearchDropDown className="search_icon" />
					<input
						className="header__searchInput"
						type="text"
						placeholder="This is Not an Official website!!!"
					/>
					<SearchIcon className="header__searchIcon" />
				</div>
				<div className="header__nav">
					<div className="country__flag header__option">
						<span className="header__optionLineOne">
							<img className="flag"
								src="https://t3.ftcdn.net/jpg/05/43/00/48/240_F_543004860_AiMa6Qr8ub2khwxduNxWg8R9bpYTauW4.jpg"
								alt=""
							/>
						</span>
						<span className="header__optionLineTwo">EN</span>
					</div>
					<Link to={!user && "/login"} className="header__itemsBorder">
						<div onClick={handleAuthentication} className="header__option">
							<span className="header__optionLineOne">
								Hello {!user ? "Guest" : user.email}
							</span>
							<span className="header__optionLineTwo">
								{user ? "Sign Out" : "Sign In"}
							</span>
						</div>
					</Link>
					<Link
						to={!user ? "/login" : "/orders"}
						className="header__itemsBorder"
					>
						<div className="header__option">
							<span className="header__optionLineOne">Returns</span>
							<span className="header__optionLineTwo">&Orders</span>
						</div>
					</Link>

					<div className="header__option header__itemsBorder">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
					<Link to="/checkout" className="header__itemsBorder">
						<div className="header__optionBasket">
							<ShoppingBasketIcon />

							<span className="header__optionLineTwo header__basketCount">
								{getBasketSize(basket)}
							</span>
						</div>
					</Link>
				</div>
			</div>
			<SubHeader />
		</>
	);
}

export default Header;
