import React from "react";
import { SliderContainer, Figure, Img } from "./styles";

const Slider = () => {
	return (
		<SliderContainer>
			<Figure>
				<Img src="/img/img1.jpg" />
				<Img src="/img/img2.jpg" />
				<Img src="/img/img3.jpg" />
			</Figure>
		</SliderContainer>
	);
};

export default Slider;
