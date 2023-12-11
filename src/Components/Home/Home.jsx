import React from "react";
import "./home.css";
import Product from "../Product/Product";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function Home() {
	// product images destructured here
	const [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
		image16,
	] = [
		"https://m.media-amazon.com/images/I/71K6YQEI5RL._AC_UL320_.jpg",
		"https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg",
		"https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61idku5S0OL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81gf+wgrcfS._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/I/819zf0AMM2L._AC_UL320_.jpg",
		"https://m.media-amazon.com/images/I/71UhMysaqzL._AC_UL320_.jpg",
		"https://m.media-amazon.com/images/I/71MvpgJdBoL._AC_UL320_.jpg",
		"https://m.media-amazon.com/images/I/81y8zGlpJWL._AC_UL320_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/619CPKLr92L._AC_UL160_SR160,160_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/61re+ymFgcL._AC_UL160_SR160,160_.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/81vxbNpc14L._AC_UL160_SR160,160_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41L-kH-Q3mL._AC_SY879_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81rSvKs5q4L._AC_SL1500_.jpg",
		"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719hcFL5ZJL._AC_SL1500_.jpg",
	];
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id={1}
						title="Fccabin Adjustable Laptop Stand for Desk, Ergonomic Aluminum Laptop Riser for..."
						image={image1}
						price={26.99}
						rating={5}
					/>
					<Product
						id={2}
						title="Apple iPad Air 10.5-inch (3rd Gen) Tablet A2152 (Wi-Fi Only) - 64GB / Space Gray (Renewed)"
						image={image2}
						price={89.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)"
						image={image3}
						price={219.99}
						rating={2}
					/>
					<Product
						id={4}
						title="Wireless Earbuds Bluetooth Headphones 60H Playtime Ear Buds with LED Power Display Charging Case Earphones in-Ear Earbud ..."
						image={image4}
						price={199.99}
						rating={3}
					/>
					<Product
						id={5}
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Soft Memory Earmuffs (Blue)"
						image={image5}
						price={49.99}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id={6}
						title="SAMSUNG 49 Odyssey Neo G9 Series G95NA 4K UHD Curved Gaming Monitor, 240Hz, 1ms, Mini LED Display, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA,..."
						image={image6}
						price={1119.99}
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={7}
						title="Sakugi Dish Drying Rack - X-Large Stainless Steel Dish Rack ..."
						image={image7}
						price={219.99}
						rating={2}
					/>
					<Product
						id={8}
						title="KEEMAKE Chef Knife 8 inch, Kitchen Knife with Japanese 440C..."
						image={image8}
						price={199.99}
						rating={3}
					/>
					<Product
						id={9}
						title="Owala FreeSip Insulated Stainless Steel Water Bottle with Straw..."
						image={image9}
						price={49.99}
						rating={4}
					/>
					<Product
						id={10}
						title="Electric Salt and Pepper Grinder Set (2 Pack), Rechargeable ... "
						image={image10}
						price={49.99}
						rating={4}
					/>
				</div>
				{/* for small products--scrollable */}
				<h3 className="view_more">
					Customers who viewed items in your browsing history also viewed
				</h3>
				<div className="home__rowSmall">
					<Product
						id={11}
						title="KitchenAid KFP1333GC 13-Cup Food Processor with ExactSlice System - Gloss Cinnamon (Renewed) "
						image={image11}
						price={199.99}
						rating={2}
						isSmall
					/>
					<Product
						id={12}
						title="Akkerds Case Compatible with iPad 10.2 Inch 2021/2020 iPad 9th/8th Generation & 2019 iPad 7th Generation with Pencil Holder, Protective Case with Soft TPU Back, Auto Sleep/Wake Cover, Sky Blue "
						image={image12}
						price={10.99}
						rating={3}
						isSmall
					/>
					<Product
						id={13}
						title="Retro TV Stand with Storage for TVs up to 55 In, Rustic Brown TV Stand for Media, Mid Century Modern TV Stand & Entertainment Center with Shlef，Wood TV Console Table for Living Room Bedroom, APRTS01 "
						image={image13}
						price={99.99}
						rating={4}
						isSmall
					/>
					<Product
						id={14}
						title="Owala Harry Potter FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Ravenclaw "
						image={image14}
						price={27.99}
						rating={4}
						isSmall
					/>
					<Product
						id={15}
						title="LG 27 Ultragear™ OLED QHD Gaming Monitor with 240Hz .03ms GtG & nVIDIA® G-SYNC® Compatible,Black "
						image={image15}
						price={219.99}
						rating={2}
						isSmall
					/>
					<Product
						id={16}
						title="Hamilton Beach Stack & Snap Food Processor and Vegetable Chopper, BPA Free, Stainless Steel Blades, 14 Cup + 4-Cup Mini Bowls, 3-Speed 500 Watt Motor, Black (70585)"
						image={image16}
						price={199.99}
						rating={3}
						isSmall
					/>
					<Product
						id={13}
						title="Owala FreeSip "
						image={image9}
						price={49.99}
						rating={4}
						isSmall
					/>
					<Product
						id={14}
						title="Electric Salt  "
						image={image10}
						price={49.99}
						rating={4}
						isSmall
					/>
					<Product
						id={7}
						title="Sakugi Dish "
						image={image7}
						price={219.99}
						rating={2}
						isSmall
					/>
					<Product
						id={8}
						title="KEEMAKE Chef Knife "
						image={image8}
						price={199.99}
						rating={3}
						isSmall
					/>
					<Product
						id={9}
						title="Owala FreeSip "
						image={image9}
						price={49.99}
						rating={4}
						isSmall
					/>
					<Product
						id={10}
						title="Electric Salt "
						image={image10}
						price={49.99}
						rating={4}
						isSmall
					/>
					<Product
						id={11}
						title="Sakugi Dish Drying Rack "
						image={image7}
						price={219.99}
						rating={2}
						isSmall
					/>
					<Product
						id={12}
						title="KEEMAKE Chef Knife 8 inch"
						image={image8}
						price={199.99}
						rating={3}
						isSmall
					/>
					<Product
						id={13}
						title="Owala FreeSip "
						image={image9}
						price={49.99}
						rating={4}
						isSmall
					/>
					<Product
						id={14}
						title="Electric Salt  "
						image={image10}
						price={49.99}
						rating={4}
						isSmall
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
