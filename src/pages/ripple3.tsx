import Link from "next/link";
import react, { useRef, useState } from "react";

export type IRippleEffectProps = {
	isLink?: boolean;
	href?: string;
	children?: any;
	className?: string;
	[x: string]: any;
};

const RippleEffect3 = ({
	isLink = false,
	children,
	href = "",
	className = "",
	getClassesList = () => {},
	...rest
}: IRippleEffectProps) => {
	const anchorRef = useRef<any>();

	const divRef = useRef<HTMLDivElement>(null);

	const locRef = isLink ? anchorRef : divRef;

	const ripple = "card-ripple-effect";
	const rippleHover = "hover:card-ripple-effect-hover";
	const rippleActive = "active:card-ripple-effect-active";

	const addClasses = () => {
		locRef.current && locRef.current.classList.add(rippleActive);

		setTimeout(() => {
			locRef.current.classList.remove(rippleActive);
		}, 100);

		getClassesList(locRef.current.classList);
	};

	const removeClasses = () => {
		locRef.current &&
			locRef.current.classList.remove(ripple, rippleHover, rippleActive);
		getClassesList(locRef.current.classList);
	};

	return isLink ? (
		<Link href={href} passHref legacyBehavior>
			<a
				ref={anchorRef}
				onTouchEnd={() => {
					console.log("onTouchEnd -  remove classes");
					addClasses();
				}}
				className={`${className} ${ripple} ${rippleHover}`}
				{...rest}
			>
				{children}
			</a>
		</Link>
	) : (
		<div
			ref={divRef}
			onTouchEnd={() => {
				console.log("onTouchEnd -  remove classes");
				addClasses();
			}}
			className={`${className} ${ripple} ${rippleHover}`}
			{...rest}
		>
			{children}
		</div>
	);
};

export default RippleEffect3;
