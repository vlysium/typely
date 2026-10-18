import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const MaxWidth = () => {
	const { settings, setFluidMaxWidth } = useSettingsStore();

	return (
		<NumberField
			value={settings.fluid.maxWidth}
			setValue={setFluidMaxWidth}
			label="Max Width"
			step={1}
			min={0}
			suffix="px"
		/>
	);
};

export default MaxWidth;
