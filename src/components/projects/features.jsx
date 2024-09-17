import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

function FeaturesCaroussel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="pt-4">
			<Carousel.Item>
				<Image src="../discover_books.png" height="150px" fluid />
			</Carousel.Item>
			<Carousel.Item>
				<Image src="../personal_library.png" height="150px" fluid />
			</Carousel.Item>
			<Carousel.Item>
				<Image src="../search_filter.png" height="150px" fluid />
			</Carousel.Item>
		</Carousel>
	);
}

export default FeaturesCaroussel;
