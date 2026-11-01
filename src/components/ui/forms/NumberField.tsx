import clsx from "clsx";

import styles from "./NumberField.module.css";

interface NumberFieldProps {
	className?: string;
	value: number;
	label: string;
	step?: number;
	min?: number;
	max?: number;
	suffix?: string;
	disabled?: boolean;
	setValue: (value: number) => void;
}

const NumberField = ({ className, value, setValue, label, step = 1, min, max, suffix, disabled }: NumberFieldProps) => {
	return (
		<div className={clsx(styles["input-group"], className)}>
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
				disabled={disabled}
			/>
			{suffix && <span className={clsx(styles["suffix"])}>{suffix}</span>}
		</div>
	);
};

export default NumberField;
