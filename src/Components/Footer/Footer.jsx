import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
function Footer() {
	const takeMeTop = () => {
		window.scrollTo(0, 0);
	}
	return (
		<>
				<div className="back_top" onClick={takeMeTop}>Back to top</div>
			<div className="container-fluid footer">
				<footer>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  ">
						<div className="col mb-3">
							<h5>Get to Know Us</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Career
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Newsletter
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										About Amazon
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Accessibility
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Sustainability
									</Link>
								</li>
							</ul>
						</div>

						<div className="col mb-3">
							<h5>Make Money with Us</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Sell on Amazon
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Sell apps on Amazon
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Supply to Amazon
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Become an Affiliate
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Become a Delivery Driver
									</Link>
								</li>
							</ul>
						</div>

						<div className="col mb-3">
							<h5>Amazon Payment Products</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Amazon Visa
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Amazon Store Card
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Amazon Secured Card
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Amazon Business Card
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Shop with Points
									</Link>
								</li>
							</ul>
						</div>

						<div className="col mb-3">
							<h5>Let Us Help You</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Your Account
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link
										to="/orders"
										className="nav-link p-0 text-body-secondary"
									>
										Your Orders
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Amazon Prime
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Returns & Replacements
									</Link>
								</li>
								<li className="nav-item mb-2">
									<Link to="#" className="nav-link p-0 text-body-secondary">
										Help
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="text-center bottom__flagwrapper">
						<Link to="/">
							<img
								className="header__logo pb-5 "
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt=""
							/>
						</Link>
						<div className="footer__langWrapper">
							<div className="footer__lang">
								{" "}
								<LanguageIcon /> English
							</div>
							<div className="footer__lang">United States</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Footer;
