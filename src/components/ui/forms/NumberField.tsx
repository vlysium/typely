import clsx from "clsx";

import styles from "./NumberField.module.css";

interface NumberFieldProps {
	defaultValue: number;
	step?: number;
	min?: number;
	max?: number;
	label: string;
	suffix?: string;
}

const NumberField = ({ defaultValue, step = 1, min, max, label, suffix }: NumberFieldProps) => {
	return (
		<div className={clsx(styles["input-group"])}>
			<label className={clsx(styles["label"])}>
				{label}
			</label>
			<input
				className={clsx(styles["input"])}
				type="number"
				defaultValue={defaultValue}
				step={step}
				min={min}
				max={max}
				placeholder=" "
			/>
			{suffix && <span className={clsx(styles["suffix"])}>{suffix}</span>}
		</div>
	);
};

export default NumberField;
