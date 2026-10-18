import type { Weight } from "@/server/fonts";

export function getFontWeights(fontFamily: string, weights: Record<string, Array<Weight>>): Array<Weight> {
  return weights[fontFamily] ?? [];
}

export function calculateFontSize(base: number, scale: number, step: number, unit: "px" | "rem"): number {
  let fontSize = base * Math.pow(scale, step);

  // Convert to rem
  if (unit === "rem") {
    fontSize = fontSize / base;
  }

  // Round to 2 decimal places
  fontSize = Number((Math.round(fontSize * 1000) / 1000).toFixed(2));

  return fontSize;
}
