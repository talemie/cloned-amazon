import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
		<>
			<div className="container-fluid footer">
				<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top">
					<div className="col mb-3">
						<h5>Get to Know Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Home
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Features
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Pricing
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									FAQs
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									About
								</a>
							</li>
						</ul>
					</div>

					<div className="col mb-3"></div>

					<div className="col mb-3">
						<h5>Get to Know Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Home
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Features
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Pricing
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									FAQs
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									About
								</a>
							</li>
						</ul>
					</div>

					<div className="col mb-3">
						<h5>Make Money with Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Home
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Features
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Pricing
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									FAQs
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									About
								</a>
							</li>
						</ul>
					</div>

					<div className="col mb-3">
						<h5>Let Us Help You</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Home
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Features
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Pricing
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									FAQs
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									About
								</a>
							</li>
						</ul>
					</div>
				</footer>
				<div className="text-center">
					<Link to="/">
						<img
							className="header__logo pb-5 "
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Footer