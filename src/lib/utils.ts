import type { Settings } from "./stores/settings.store";
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
  return Number(fontSize.toFixed(2));
}

export function calculateFluidFontSize(base: Settings["base"], fluid: Settings["fluid"], step: number, unit: "px" | "rem"): string {
  const isSameScale = fluid.scale === "_inherit" || fluid.scale === base.scale;
  const isSameSize = fluid.size === base.size;

  // Handle division by 0
  if (fluid.maxWidth === fluid.minWidth) {
    return `${calculateFontSize(base.size, base.scale, step, unit)}${unit}`;
  }

  // No fluid settings applied
  if (isSameScale && isSameSize) {
    return `${calculateFontSize(base.size, base.scale, step, unit)}${unit}`;
  }

  const minFontSize = calculateFontSize(base.size, base.scale, step, unit);
  const maxFontSize = calculateFontSize(fluid.size, fluid.scale === "_inherit" ? base.scale : fluid.scale, step, unit);

  const slope = (maxFontSize - minFontSize) / (fluid.maxWidth - fluid.minWidth);
   const yAxisIntersection = minFontSize - fluid.minWidth * slope;

  return `clamp(${minFontSize}${unit}, ${yAxisIntersection.toFixed(2)}${unit} + ${(slope * 100).toFixed(2)}vw, ${maxFontSize}${unit})`;
}
