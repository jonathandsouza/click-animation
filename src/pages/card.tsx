import react from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { RippleEffect2 } from "./ripple2";

const Card = () => {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 15,
		},
	});

	return (
		<div ref={sliderRef} className="keen-slider">
			<RippleEffect2
				isLink
				className="keen-slider__slide slide-card number-slide1"
			>
				<div>1</div>
			</RippleEffect2>
			<RippleEffect2
				isLink
				className="keen-slider__slide slide-card number-slide2"
			>
				<div>2</div>
			</RippleEffect2>

			<RippleEffect2
				isLink
				className="keen-slider__slide slide-card number-slide3"
			>
				<div>3</div>
			</RippleEffect2>

			<RippleEffect2
				isLink
				className="keen-slider__slide slide-card number-slide4"
			>
				<div>4</div>
			</RippleEffect2>

			<RippleEffect2
				isLink
				className="keen-slider__slide slide-card number-slide5"
			>
				<div>5</div>
			</RippleEffect2>
		</div>
	);
};

export default Card;
