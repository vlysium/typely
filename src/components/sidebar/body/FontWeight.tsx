import { getRouteApi } from "@tanstack/react-router";

import { SelectField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";
import type { Weight } from "@/server/fonts";

const fontWeightOptions: Array<{ value: Weight; label: string }> = [
  { value: "100", label: "100 — Thin" },
  { value: "200", label: "200 — Extra Light" },
  { value: "300", label: "300 — Light" },
  { value: "400", label: "400 — Regular" },
  { value: "500", label: "500 — Medium" },
  { value: "600", label: "600 — Semi Bold" },
  { value: "700", label: "700 — Bold" },
  { value: "800", label: "800 — Extra Bold" },
  { value: "900", label: "900 — Black" },
];

const indexRoute = getRouteApi("/");

const FontWeight = () => {
  const data = indexRoute.useLoaderData();

  const { settings, setBodyFontWeight } = useSettingsStore();

  const availableWeights = data.weights[settings.body.fontFamily] ?? [];
  const filteredOptions = fontWeightOptions.filter(({ value }) => availableWeights.includes(value));

  return (
    <SelectField
      label="Font weight"
      options={filteredOptions}
      value={availableWeights.includes(settings.body.fontWeight) ? settings.body.fontWeight : "400"}
      setValue={setBodyFontWeight}
    />
  );
};

export default FontWeight;
