import react, { useCallback, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider3 = () => {
	const [appliedClasses, setAppliedClasses] = useState("");

	const [sliderRef3] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 15,
		},
	});

	return (
		<>
			<h1>With Pure CSS classes (without tailwind)</h1>
			{appliedClasses}
			<div ref={sliderRef3} className="keen-slider">
				<div className="keen-slider__slide slide-card number-slide1 ripple">
					1
				</div>
				<div className="keen-slider__slide slide-card number-slide2 ripple">
					2
				</div>
				<div className="keen-slider__slide slide-card number-slide3 ripple">
					3
				</div>
				<div className="keen-slider__slide slide-card number-slide4 ripple">
					4
				</div>
				<div className="keen-slider__slide slide-card number-slide5 ripple">
					5
				</div>
				<div className="keen-slider__slide slide-card number-slide6 ripple">
					6
				</div>
			</div>
		</>
	);
};

export default Slider3;
