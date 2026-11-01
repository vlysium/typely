import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface BaseSizeProps {
	className?: string;
}

const BaseSize = ({ className }: BaseSizeProps) => {
	const { settings, setBaseSize } = useSettingsStore();

	return (
		<NumberField
			value={settings.base.size}
			setValue={setBaseSize}
			label="Base size"
			step={0.5}
			min={0}
			suffix="px"
			className={className}
		/>
	);
};

export default BaseSize;
