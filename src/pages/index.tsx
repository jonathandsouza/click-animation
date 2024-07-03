import Image from "next/image";
import { Inter } from "next/font/google";
import Slider1 from "./slider-1";
import RippleEffect from "./ripple";
import Slider2 from "./slider-2";
import Slider3 from "./slider-3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<RippleEffect />
			<br />
			<Slider1 />
			<br />

			<Slider2 />

			<br />
			<br />

			<Slider3 />
		</>
	);
}
