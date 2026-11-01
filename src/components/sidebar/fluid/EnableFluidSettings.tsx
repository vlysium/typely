import { CheckboxField } from "@/components/ui/forms";
import useSettingsStore from "@/lib/stores/settings.store";

interface EnableFluidSettingsProps {
	className?: string;
}

const EnableFluidSettings = ({ className }: EnableFluidSettingsProps) => {
	const { settings, setFluidIsEnabled } = useSettingsStore();

	return (
    <CheckboxField
      className={className}
      value={settings.fluid.isEnabled}
      setValue={setFluidIsEnabled}
      label="Enable fluid settings"
    />
	);
};

export default EnableFluidSettings;
