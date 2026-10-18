import { SelectField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";
import type { Weight } from "@/server/fonts";

const weightOptions: Array<{ label: string; value: Weight }> = [
	{ label: "100 — Thin", value: "100" },
	{ label: "200 — Extra Light", value: "200" },
	{ label: "300 — Light", value: "300" },
	{ label: "400 — Regular", value: "400" },
	{ label: "500 — Medium", value: "500" },
	{ label: "600 — Semi Bold", value: "600" },
	{ label: "700 — Bold", value: "700" },
	{ label: "800 — Extra Bold", value: "800" },
	{ label: "900 — Black", value: "900" }
];

const FontWeight = () => {
	const { settings, setBodyFontWeight } = useSettingsStore();

	return (
		<SelectField label="Font weight" options={weightOptions} value={settings.body.fontWeight} setValue={setBodyFontWeight} />
	);
};

export default FontWeight;
