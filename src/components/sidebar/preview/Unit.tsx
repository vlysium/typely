import { RadioGroupField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const units = [
	{ value: "px", label: "px" },
	{ value: "rem", label: "rem" }
] satisfies Array<{ value: "px" | "rem"; label: string; }>;

interface UnitProps {
	className?: string;
}

const Unit = ({ className }: UnitProps) => {
	const { settings, setPreviewUnit } = useSettingsStore();

	return (
		<RadioGroupField
			value={settings.preview.unit}
			label="Unit"
			options={units}
			setValue={setPreviewUnit}
			className={className}
		/>
	);
};

export default Unit;
