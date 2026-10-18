import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

const BaseSize = () => {
	const { settings, setBaseSize } = useSettingsStore();

	return (
		<NumberField
			value={settings.base.size}
			setValue={setBaseSize}
			label="Base size"
			step={0.5}
			min={0}
			suffix="px"
		/>
	);
};

export default BaseSize;
