import { useEffect } from "react";

import { getFontWeights } from "@/lib/utils";
import type { Weight } from "@/server/fonts";

type GoogleFont = {
  font: string;
}

type UseGoogleFontsOptions = {
  fonts: Array<GoogleFont>;
  weights: Record<string, Array<Weight>>;
}

const createLink = (fonts: Array<GoogleFont>, availableWeights: Record<string, Array<Weight>>) => {
  const params = new URLSearchParams();

  for (const { font } of fonts) {
    const weights = getFontWeights(font, availableWeights);

    if (weights.length === 0) {
      params.append("family", font);
      continue;
    }

    params.append("family", `${font}:wght@${weights.join(";")}`);
  }

  params.set("display", "swap");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${params.toString()}`;

  return link;
};

export function useGoogleFonts({ fonts, weights }: UseGoogleFontsOptions) {
  useEffect(() => {
    if (fonts.length === 0) return;

    const link = createLink(fonts, weights);

    document.head.appendChild(link);

    return () => link.remove();
  }, [fonts, weights]);
}
