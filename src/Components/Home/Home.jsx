import React, { useEffect } from "react";
import "./home.css";
import Product from "../Product/Product";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { productList } from "../../CommonResources/prodcutList";
function Home() {
	// product images destructured here
	const [
		image1,
		image1a,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
	] = [
		"https://m.media-amazon.com/images/I/71K6YQEI5RL._AC_UL320_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61+BPJxcQrL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg",
		"https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61idku5S0OL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81gf+wgrcfS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51eU0W1rTFL._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/415BaMkpQsL._AC_SR320,320_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71PaRRuu45L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/81y8zGlpJWL._AC_UL320_.jpg",
	];

	// to scroll the page to the top when mounted
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7191th9dBnL._SX3000_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id={1}
						title="Fccabin Adjustable Laptop Stand for Desk, Ergonomic Aluminum Laptop Riser for..."
						image={image1}
						price={26.99}
						rating={5}
						quantity={1}
					/>
					<Product
						id={111}
						title="HP 15.6” HD Student Laptop, Intel Pentium Silver N5030, 8GB RAM, 256GB PCIe SSD, Intel UHD ..."
						image={image1a}
						price={399.99}
						rating={4}
						quantity={1}
					/>
					<Product
						id={2}
						title="Apple iPad Air 10.5-inch (3rd Gen) Tablet A2152 (Wi-Fi Only) - 64GB / Space Gray (Renewed)"
						image={image2}
						price={89.99}
						rating={4}
						quantity={1}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)"
						image={image3}
						price={219.99}
						rating={2}
						quantity={1}
					/>
					<Product
						id={4}
						title="Wireless Earbuds Bluetooth Headphones 60H Playtime Ear Buds with LED Power Display Charging Case Earphones in-Ear Earbud ..."
						image={image4}
						price={199.99}
						rating={3}
						quantity={1}
					/>
					<Product
						id={5}
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Soft Memory Earmuffs (Blue)"
						image={image5}
						price={49.99}
						rating={4}
						quantity={1}
					/>
				</div>
				<div className="home__row">
					<Product
						id={6}
						title="SAMSUNG 49 Odyssey Neo G9 Series G95NA 4K UHD Curved Gaming Monitor, 240Hz, 1ms, Mini LED Display, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA,..."
						image={image6}
						price={1119.99}
						rating={5}
						quantity={1}
					/>
				</div>
				<div className="home__row">
					<Product
						id={7}
						title="Ember Temperature Control Smart Mug 2, 10 Oz, App-Controlled  ..."
						image={image7}
						price={119.99}
						rating={5}
						quantity={1}
					/>
					<Product
						id={8}
						title="GoveeLife Smart Electric Kettle, 0.8L WiFi Gooseneck Kettle  ..."
						image={image8}
						price={79.99}
						rating={4}
						quantity={1}
					/>
					<Product
						id={9}
						title="Galanz Retro Electric Kettle with Heat Resistant Handle and  ..."
						image={image9}
						price={49.99}
						rating={4}
						quantity={1}
					/>
					<Product
						id={10}
						title="Electric Salt and Pepper Grinder Set (2 Pack), Rechargeable ... "
						image={image10}
						price={49.99}
						rating={4}
						quantity={1}
					/>
				</div>
				{/* for small products--scrollable */}
				<h3 className="view_more">
					Customers who viewed items in your browsing history also viewed
				</h3>
				<div className="home__rowSmall">
					{productList?.map((item, i) => (
						<Product
							className="bottom__product"
							key={i}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
							quantity={item.quantity}
							isSmall
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
