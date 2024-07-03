import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./card";
import RippleEffect from "./ripple";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<RippleEffect />
			<br />
			<Card />
			<br />
		</>
	);
}
