import { createServerFn } from "@tanstack/react-start";

interface Font {
  family: string;
  variants: Array<string>;
}

interface Fonts {
	value: string;
	label: string;
}

interface Weights {
  [key: string]: Array<string>;
}

export const loadFonts = createServerFn({ method: "GET" })
	.handler(async () => {
		const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${process.env.GOOGLE_FONTS_API_KEY}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch fonts: ${response.statusText}`);
		}

		const data = await response.json();

		const fonts: Array<Fonts> = await data.items.map((font: Font) => ({
			value: font.family,
			label: font.family
		}));

		const weights: Weights = await data.items.reduce((acc: Weights, font: Font) => {
			acc[font.family] = font.variants
				.filter(variant => !variant.includes("italic")) // Remove italic variants
				.map(variant => variant === "regular" ? "400" : variant); // Cast the "regular" variant to "400"
			return acc;
		}, {});

		return { fonts, weights };
	});
