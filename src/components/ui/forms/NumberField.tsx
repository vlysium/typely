import clsx from "clsx";

import styles from "./NumberField.module.css";

interface NumberFieldProps {
	value: number;
	label: string;
	step?: number;
	min?: number;
	max?: number;
	suffix?: string;
	setValue: (value: number) => void;
}

const NumberField = ({ value, setValue, label, step = 1, min, max, suffix }: NumberFieldProps) => {
	return (
		<div className={clsx(styles["input-group"])}>
			<label className={clsx(styles["label"])}>
				{label}
			</label>
			<input
				className={clsx(styles["input"])}
				type="number"
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
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
