import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }: { addUtilities: any }) => {
			const newUtilities = {
				".card-ripple-effect": {
					"background-position": "center",
					transition: "background 0.8s",
				},

				".card-ripple-effect-hover": {
					background:
						"#f1f1f1 radial-gradient(circle, transparent 1%, #f1f1f1 1%) center/18000%",
				},

				".card-ripple-effect-active": {
					"background-color": "#ddd",
					"background-size": "100%",
					transition: "background 0s",
				},
			};

			addUtilities(newUtilities);
		}),
	],
};
export default config;
