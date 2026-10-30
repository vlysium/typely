import { RadioGroupField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const units = [
	{ value: "px", label: "px" },
	{ value: "rem", label: "rem" }
] satisfies Array<{ value: "px" | "rem"; label: string; }>;

const Unit = () => {
	const { settings, setUnit } = useSettingsStore();

	return (
		<RadioGroupField
			value={settings.preview.unit}
			label="Unit"
			options={units}
			setValue={setUnit}
		/>
	);
};

export default Unit;
