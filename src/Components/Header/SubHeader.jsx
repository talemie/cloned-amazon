import React from "react";
import "./subHeader.css";
import { Link } from "react-router-dom";
function SubHeader() {
	return (
		<div className="sub__header">
			<Link to="#" className="all__list">
				<div>All</div>
			</Link>
			<div className="lists">
				<Link to="#">
					<div>Last minute Deals</div>
				</Link>
				<Link to="#">
					<div>Gift Cards</div>
				</Link>
				<Link to="#">
					<div>Medical Care</div>
				</Link>
				<Link to="#">
					<div>Groceries</div>
				</Link>
				<Link to="#">
					<div>Best Sellers</div>
				</Link>
				<Link to="#">
					<div>Amazon Basics</div>
				</Link>
				<Link to="#">
					<div>Registry</div>
				</Link>
				<Link to="#">
					<div>Today's Deal</div>
				</Link>
				<Link to="#">
					<div>Prime</div>
				</Link>
				<Link to="#">
					<div>New Releases</div>
				</Link>
			</div>
			{/* <nav className="navbar navbar-expand-lg text-white ">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						All
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav   mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav> */}
		</div>
	);
}

export default SubHeader;
