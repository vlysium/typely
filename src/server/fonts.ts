import { createServerFn } from "@tanstack/react-start";

type Item = {
  family: string;
  variants: Array<string>;
}

export type Weight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export const loadFonts = createServerFn({ method: "GET" })
	.handler(async () => {
		const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${process.env.GOOGLE_FONTS_API_KEY}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch fonts: ${response.statusText}`);
		}

		const data = await response.json();

		const fonts: Array<string> = await data.items.map((font: Item) => (font.family));

		const weights: Record<string, Array<Weight>> = await data.items.reduce((acc: Record<string, Array<Weight>>, font: Item) => {
			acc[font.family] = font.variants
				.filter(variant => !variant.includes("italic")) // Remove italic variants
				.map(variant => (variant === "regular" ? "400" : variant) as Weight); // Cast the "regular" variant to "400"
			return acc;
		}, {});

		return { fonts, weights };
	});
