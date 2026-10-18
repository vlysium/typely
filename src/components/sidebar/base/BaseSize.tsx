import { NumberField } from "@/components/ui/forms";

const BaseSize = () => {
	return (
		<NumberField label="Base size" defaultValue={16} step={0.5} min={0} suffix="px" />
	);
};

export default BaseSize;
