import react, { useRef } from "react";

export type IRippleEffectProps = {
	isLink?: boolean;
	href?: string;
	children?: any;
	className?: string;
	[x: string]: any;
};

const RippleEffect = ({
	isLink = false,
	children,
	href = "",
	className = "",
	...rest
}: IRippleEffectProps) => {
	const anchorRef = useRef<any>();

	const divRef = useRef<HTMLDivElement>(null);

	const locRef = isLink ? anchorRef : divRef;

	const ripple = "card-ripple-effect";
	const rippleHover = "hover:card-ripple-effect-hover";
	const rippleActive = "active:card-ripple-effect-active";

	const addClasses = () => {
		locRef.current &&
			locRef.current.classList.add(ripple, rippleHover, rippleActive);
	};

	const removeClasses = () => {
		locRef.current &&
			locRef.current.classList.remove(ripple, rippleHover, rippleActive);
	};

	const classes = `${ripple} ${rippleHover} ${rippleActive}`;

	return (
		<div
			className={classes}
			onTouchStart={removeClasses}
			onTouchEnd={addClasses}
			onTouchMove={removeClasses}
			style={{
				width: "300px",
				height: "400px",
				margin: "20px",
				border: "1px solid #ddd",
				padding: "10px",
			}}
		>
			<img
				src="https://images.voordeeluitjes.nl/images/small/69099_c6030ae7db9f2672c72d69a7abfc24b1.jpg?imwidth=270&amp;impolicy=squeezely"
				title="Hotel Oranjeoord"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptatibus quia, nulla! Maiores et perferendis eaque,
					exercitationem praesentium nihil.
				</p>
			</div>
		</div>
	);
};

export default RippleEffect;
