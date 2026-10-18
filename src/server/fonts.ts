import { createServerFn } from "@tanstack/react-start";

type Item = {
  family: string;
  variants: Array<string>;
}

export type Weight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

type FontsData = {
  fonts: Array<string>;
  weights: Record<string, Array<Weight>>;
}

const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

let cachedFonts: FontsData | undefined;
let expiresAt = 0;
let pendingRequest: Promise<FontsData> | undefined;

async function getFonts(): Promise<FontsData> {
  if (cachedFonts && Date.now() < expiresAt) {
    return cachedFonts;
  }

  if (pendingRequest) {
    return pendingRequest;
  }

  pendingRequest = (async () => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${process.env.GOOGLE_FONTS_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch fonts: ${response.statusText}`);
    }

    const data: { items: Array<Item> } = await response.json();

    const fonts = data.items.map((font) => font.family);

    const weights = data.items.reduce<Record<string, Array<Weight>>>((acc, font) => {
      acc[font.family] = font.variants
        .filter((variant) => !variant.includes("italic")) // Remove italic variants
        .map((variant) => (variant === "regular" ? "400" : variant) as Weight); // Cast the "regular" variant to "400"
      return acc;
    }, {});

    const result = { fonts, weights };

    cachedFonts = result;
    expiresAt = Date.now() + CACHE_TTL;

    return result;
  })();

  try {
    return await pendingRequest;
  } finally {
    pendingRequest = undefined;
  }
}

export const loadFonts = createServerFn({ method: "GET" }).handler(
  async () => getFonts(),
);
