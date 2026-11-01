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

export function calculateFluidFontSize(base: Settings["base"], fluid: Settings["fluid"], step: number, fontUnit: "px" | "rem", containerUnit: "vw" | "cqi"): string {

  // Handle division by 0
  if (fluid.maxWidth === fluid.minWidth) {
    return `${calculateFontSize(base.size, base.scale, step, fontUnit)}${fontUnit}`;
  }

  const minFontSize = calculateFontSize(base.size, base.scale, step, fontUnit);
  const maxFontSize = calculateFontSize(fluid.size, fluid.scale, step, fontUnit);

  const slope = (maxFontSize - minFontSize) / (fluid.maxWidth - fluid.minWidth);
   const yAxisIntersection = minFontSize - fluid.minWidth * slope;

  return `clamp(${minFontSize}${fontUnit}, ${yAxisIntersection.toFixed(2)}${fontUnit} + ${(slope * 100).toFixed(2)}${containerUnit}, ${maxFontSize}${fontUnit})`;
}
