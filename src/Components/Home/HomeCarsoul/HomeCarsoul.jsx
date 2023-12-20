import React from "react";
function HomeCarsoul() {
	return (
		<div className="home__image">
			<div
				id="carouselExampleAutoplaying"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7191th9dBnL._SX3000_.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71NlLqRisvL._SX3000_.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default HomeCarsoul;
