import { SelectField } from "@/components/ui/forms";

const scaleOptions: Array<{ label: string; value: string }> = [
	{ label: "1.067 — Minor Second", value: "1.067" },
	{ label: "1.125 — Major Second", value: "1.125" },
	{ label: "1.200 — Minor Third", value: "1.2" },
	{ label: "1.250 — Major Third", value: "1.25" },
	{ label: "1.333 — Perfect Fourth", value: "1.333" },
	{ label: "1.414 — Augmented Fourth", value: "1.414" },
	{ label: "1.500 — Perfect Fifth", value: "1.5" },
	{ label: "1.618 — Golden Ratio", value: "1.618" }
];

const BaseScale = () => {
	return (
		<SelectField label="Scale" options={scaleOptions} defaultValue={scaleOptions[2].value} />
	);
};

export default BaseScale;
