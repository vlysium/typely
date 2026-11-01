import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface FluidSizeProps {
	className?: string;
}

const FluidSize = ({ className }: FluidSizeProps) => {
	const { settings, setFluidSize } = useSettingsStore();

	return (
		<NumberField
			className={className}
			value={settings.fluid.size}
			setValue={setFluidSize}
			label="Fluid Size"
			step={0.5}
			min={0}
			suffix="px"
			disabled={!settings.fluid.isEnabled}
		/>
	);
};

export default FluidSize;
