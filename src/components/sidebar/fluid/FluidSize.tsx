import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const FluidSize = () => {
	const { settings, setFluidSize } = useSettingsStore();

	return (
		<NumberField
			value={settings.fluid.size}
			setValue={setFluidSize}
			label="Fluid Size"
			step={0.5}
			min={0}
			suffix="px"
		/>
	);
};

export default FluidSize;
