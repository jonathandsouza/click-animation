import react, { useCallback, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import RippleEffect3 from "./ripple3";

const Slider1 = () => {
	const [appliedClasses, setAppliedClasses] = useState("");

	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 15,
		},
	});

	const getClassesList = useCallback((ee: any) => {
		if (ee) {
			console.log("callback", ee);
			setAppliedClasses(Object.values(ee).slice(2).join(", "));
		}
	}, []);

	return (
		<>
			<h1>
				Slider 1 (with timers - adding and removing active class only)
			</h1>
			{appliedClasses}
			<div ref={sliderRef} className="keen-slider">
				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide1"
					getClassesList={getClassesList}
				>
					<div>1</div>
				</RippleEffect3>
				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide2"
					getClassesList={getClassesList}
				>
					<div>2</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide3"
					getClassesList={getClassesList}
				>
					<div>3</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide4"
					getClassesList={getClassesList}
				>
					<div>4</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide5"
					getClassesList={getClassesList}
				>
					<div>5</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide6"
					getClassesList={getClassesList}
				>
					<div>6</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide7"
					getClassesList={getClassesList}
				>
					<div>7</div>
				</RippleEffect3>

				<RippleEffect3
					isLink
					className="keen-slider__slide slide-card number-slide8"
				>
					<div>8</div>
				</RippleEffect3>
			</div>
		</>
	);
};

export default Slider1;
