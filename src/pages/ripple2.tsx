import Link from "next/link";
import { useRef } from "react";

export type IRippleEffectProps = {
	isLink?: boolean;
	href?: string;
	children?: any;
	className?: string;
	[x: string]: any;
};

export const RippleEffect2 = ({
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
		console.log("add classes");
		locRef.current &&
			locRef.current.classList.add(ripple, rippleHover, rippleActive);
	};

	const removeClasses = () => {
		console.log("remove classes");
		locRef.current &&
			locRef.current.classList.remove(ripple, rippleHover, rippleActive);
	};

	return isLink ? (
		<Link href={href} passHref legacyBehavior>
			<a
				ref={anchorRef}
				onTouchStart={() => {
					console.log("touch start - REMOVE");
					removeClasses();
				}}
				onTouchEnd={() => {
					console.log("touch end - REMOVE");
					addClasses();
				}}
				onTouchMove={() => {
					console.log("touch move - ADD");
					removeClasses();
				}}
				className={`${className} ${ripple} ${rippleHover} ${rippleActive}`}
				{...rest}
			>
				{children}
			</a>
		</Link>
	) : (
		<div
			ref={divRef}
			onTouchStart={() => {
				console.log("touch start - REMOVE");
				removeClasses();
			}}
			onTouchEnd={() => {
				console.log("touch end - REMOVE");
				addClasses();
			}}
			onTouchMove={() => {
				console.log("touch move - ADD");
				removeClasses();
			}}
			className={`${className} ${ripple} ${rippleHover} ${rippleActive}`}
			{...rest}
		>
			{children}
		</div>
	);
};
