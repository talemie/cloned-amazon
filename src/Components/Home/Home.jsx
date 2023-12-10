import React from 'react'
import './home.css'
import Product from '../Product/Product';
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
		] = [
			"https://m.media-amazon.com/images/I/71K6YQEI5RL._AC_UL320_.jpg",
			"https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY200_.jpg",
			"https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/51XLf5D0neL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
			"https://m.media-amazon.com/images/I/81ds-A08OxL._AC_UL320_.jpg",
			"https://m.media-amazon.com/images/I/819zf0AMM2L._AC_UL320_.jpg",
			"https://m.media-amazon.com/images/I/71UhMysaqzL._AC_UL320_.jpg",
			"https://m.media-amazon.com/images/I/71MvpgJdBoL._AC_UL320_.jpg",
			"https://m.media-amazon.com/images/I/81y8zGlpJWL._AC_UL320_.jpg",
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
						title="AirPods Pro Wireless Earbuds Bluetooth in Ear Light-Weight Headphones Built-in Microphone, with Touch Control"
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
						title="SUPERJARE TV Stand for 55 Inch TV, Entertainment Center with Adjustable Shelf, for Living Room, Bedroom, Rustic Brown"
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
			</div>
		</div>
	);
}

export default Home