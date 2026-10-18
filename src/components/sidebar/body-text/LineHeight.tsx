import { NumberField } from "@/components/ui/forms";

const LineHeight = () => {
	return (
		<NumberField label="Line height" defaultValue={1.5} step={0.05} min={0} />
	);
};

export default LineHeight;
