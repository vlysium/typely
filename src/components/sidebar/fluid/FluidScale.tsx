import { SelectField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

export type ScaleOption = {
	label: string;
	value: 1.067 | 1.125 | 1.200 | 1.250 | 1.333 | 1.414 | 1.500 | 1.618 | "_inherit";
};

const scaleOptions: Array<ScaleOption> = [
	{ label: "inherit", value: "_inherit" },
	{ label: "1.067 — Minor Second", value: 1.067 },
	{ label: "1.125 — Major Second", value: 1.125 },
	{ label: "1.200 — Minor Third", value: 1.200 },
	{ label: "1.250 — Major Third", value: 1.250 },
	{ label: "1.333 — Perfect Fourth", value: 1.333 },
	{ label: "1.414 — Augmented Fourth", value: 1.414 },
	{ label: "1.500 — Perfect Fifth", value: 1.500 },
	{ label: "1.618 — Golden Ratio", value: 1.618 }
];

interface FluidScaleProps {
	className?: string;
}

const FluidScale = ({ className }: FluidScaleProps) => {
	const { settings, setFluidScale } = useSettingsStore();

	return (
		<SelectField
			className={className}
			value={settings.fluid.scale}
			setValue={setFluidScale}
			label="Scale"
			options={scaleOptions}
			disabled={!settings.fluid.isEnabled}
		/>
	);
};

export default FluidScale;
