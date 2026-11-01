import { NumberField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface MaxWidthProps {
	className?: string;
}

const MaxWidth = ({ className }: MaxWidthProps) => {
	const { settings, setFluidMaxWidth } = useSettingsStore();

	return (
		<NumberField
			className={className}
			value={settings.fluid.maxWidth}
			setValue={setFluidMaxWidth}
			label="Max Width"
			step={1}
			min={0}
			suffix="px"
			disabled={!settings.fluid.isEnabled}
		/>
	);
};

export default MaxWidth;
