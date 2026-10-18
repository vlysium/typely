import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const MinWidth = () => {
	const { settings, setFluidMinWidth } = useSettingsStore();

	return (
		<NumberField
			value={settings.fluid.minWidth}
			setValue={setFluidMinWidth}
			label="Min Width"
			step={1}
			min={0}
			suffix="px"
		/>
	);
};

export default MinWidth;
